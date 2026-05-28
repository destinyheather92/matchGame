//here I was just playing around. no functionality

import React, { useEffect, useState, useRef } from "react";
import Randomizer from "./HelperFunctions/Randomizer";
import Timer from "./Timer/Timer";
import TotalMatches from "./HelperFunctions/TotalMatches";
import CardGrid from "./CardGrid/CardGrid";
import Matches from "./Matches/Matches";
import Message from "./Message/Message";
import Difficulty from "./DifficultyLevel/Difficulty";

export default function Game() {
  const [gameFlags, setGameFlags] = useState({
    startOfGame: true,
    gameOver: false,
    win: false,
  });
  const [randomCards, setRandomCards] = useState(null);
  const [cardsSelected, setCardsSelected] = useState([]);
  const [matched, setMatched] = useState(0);
  const [totalMatches, setTotalMatches] = useState(null);
  const [time, setTime] = useState({ minutes: 10, seconds: "00" });
  const [timerRunning, setTimerRunning] = useState(false);
  const matchesRef = useRef(null);
  const difficultyRef = useRef(null);
  const timeRemainingRef = useRef(null);
  const card1ref = useRef(null);
  const card2ref = useRef(null);

  useEffect(() => {
    if (matched === totalMatches) {
      setGameFlags({ ...gameFlags, gameOver: true, win: true });
      setTimerRunning(false);
    }
    if (cardsSelected.length !== 2) {
      return;
    }
    let card1 = Number(card1ref.current.target.id);
    let card2 = Number(card2ref.current.target.id);

    const flipTimerId = setTimeout(() => {
      if (cardsSelected[0] === cardsSelected[1]) {
        setMatched(matched + 1);
        matchesRef.current.style.backgroundColor = "aqua";
        setTimeout(() => {
          matchesRef.current.style.backgroundColor = "";
        }, "1000");
      } else {
        let unflipCards = randomCards.map((card) => {
          if (card.id === card1 || card.id === card2) {
            card.flipped = false;
          }
          return card;
        });
        setRandomCards(unflipCards);
      }
      setCardsSelected([]);
    }, 1000);
    return () => clearTimeout(flipTimerId);
    // eslint-disable-next-line
  }, [cardsSelected, matched]);

  useEffect(() => {
    if (timerRunning) {
      const timerId = setTimeout(() => {
        if (time.minutes === 0 && time.seconds === "00") {
          setTimerRunning(false);
          setGameFlags({ ...gameFlags, gameOver: true });
        } else if (time.seconds === "00") {
          timeRemainingRef.current.style.backgroundColor = "hotPink";
          setTimeout(() => {
            timeRemainingRef.current.style.backgroundColor = "";
          }, "1000");
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          setTime({
            minutes: time.minutes,
            seconds:
              time.seconds - 1 < 10
                ? `0${time.seconds - 1}`
                : time.seconds - 1 || "00",
          });
        }
      }, 1000);
      return () => clearTimeout(timerId);
      // eslint-disable-next-line
    }
  }, [time, timerRunning]);

  const handleClick = (e) => {
    if (gameFlags.gameOver || cardsSelected.length === 2) {
      return;
    }
    setTimerRunning(true);
    if (cardsSelected.length < 2) {
      cardsSelected.length === 0
        ? (card1ref.current = e)
        : (card2ref.current = e);
      let cardValue = e.target.classList[1];
      setCardsSelected([...cardsSelected, cardValue]);
    }
    let cardSelectedId = Number(e.target.id);
    let updatedFlippedCards = randomCards.map((card) => {
      if (card.id === cardSelectedId) {
        card.flipped = true;
      }
      return card;
    });
    setRandomCards(updatedFlippedCards);
  };

  const handleDifficulty = (e) => {
    difficultyRef.current = e.target.value;
    setRandomCards(Randomizer(difficultyRef.current));
    setGameFlags({ ...gameFlags, startOfGame: false });
  };
  useEffect(() => {
    !gameFlags.startOfGame && setTotalMatches(TotalMatches(randomCards));
    // eslint-disable-next-line
  }, [gameFlags.startOfGame]);

  const reset = () => {
    setGameFlags({ startOfGame: true, gameOver: false, win: false });
    setCardsSelected([]);
    setRandomCards(null);
    setMatched(0);
    setTime({ minutes: 10, seconds: "00" });
    setTimerRunning(false);
    setTotalMatches(null);
  };

  return (
    <>
      {gameFlags.startOfGame ? (
        <Difficulty func={handleDifficulty} />
      ) : (
        <>
          <CardGrid data={randomCards} handleClick={handleClick} />
          <Matches
            ref={matchesRef}
            matches={matched}
            totalMatches={totalMatches}
          />
          <Timer
            ref={timeRemainingRef}
            minutes={time.minutes}
            seconds={time.seconds}
          />

          {gameFlags.gameOver && gameFlags.win && (
            <Message
              message="You Win"
              matches={matched}
              totalMatches={totalMatches}
              funct={reset}
            />
          )}
          {gameFlags.gameOver && !gameFlags.win && (
            <Message
              matches={matched}
              totalMatches={totalMatches}
              message="You Lose"
              funct={reset}
            />
          )}
        </>
      )}
    </>
  );
}
