import React, { useEffect, useState, useRef } from "react";
import Randomizer from "../HelperFunctions/Randomizer";
import Timer from "../Timer/Timer";
import TotalMatches from "../HelperFunctions/TotalMatches";
import CardGrid from "../CardGrid/CardGrid";
import Matches from "../Matches/Matches";
import Message from "../Message/Message";
import Difficulty from "../DifficultyLevel/Difficulty";

export default function Game() {
  //gameFlags is an object that keeps track of the start of the game, end of the game and if the game is won.
  const [gameFlags, setGameFlags] = useState({
    startOfGame: true,
    gameOver: false,
    win: false,
  });
  //randomCards will be the randomly selected cards based on the users selection of difficulty
  const [randomCards, setRandomCards] = useState(null);
  //cards selected is an array of the values of the cards selected which can only hold 2 values max. This is logically handled below 
  const [cardsSelected, setCardsSelected] = useState([]);
  //next two deal with matches made and total matches
  const [matched, setMatched] = useState(0);
  const [totalMatches, setTotalMatches] = useState(null);
  //next two handle the time
  const [time, setTime] = useState({ minutes: 10, seconds: "00" });
  const [timerRunning, setTimerRunning] = useState(false);
  //these are references to the matches div, difficultyRef, and timeRemainingRef. useRef is a React Hook that lets you reference a value that’s not needed for rendering. It’s like a “box” that can hold a mutable value in its .current property. You can change it without causing a re-render. I am using these refs to add and remove the highlight class when the user gets a match or when the time is running low. I also have refs for the first and second card selected so that I can unflip them if they dont match.
  const matchesRef = useRef(null);
  const difficultyRef = useRef(null);
  const timeRemainingRef = useRef(null);
  const card1ref = useRef(null);
  const card2ref = useRef(null);

  //this use effect uses the cardsSelected state and matched state as dependencies
  useEffect(() => {
    //early return for if the user finds all matches before the time runs out. This sets the flags of gameOver and Win both to true and stops the timer.
    if (matched === totalMatches) {
      setGameFlags({ ...gameFlags, gameOver: true, win: true });
      setTimerRunning(false);
    }
    //I dont want to run the rest of the code UNLESS there are two cards in the array.
    if (cardsSelected.length !== 2) {
      return;
    }
    //gathering the ids of the first and second card chosen so they can be reset to unflipped if they dont match
    let card1 = Number(card1ref.current.target.id);
    let card2 = Number(card2ref.current.target.id);

    const flipTimerId = setTimeout(() => {
      //if the two values in the cardSelected array match, then I want to add one to matched state. and highlight the matches display indicating the user got a match. I want it to stay highlighted for a second so I put a 1sec delay on unhiglighting it. I also want to also setCardsSelected back to an empty array.
      if (cardsSelected[0] === cardsSelected[1]) {
        setMatched(matched + 1);
        matchesRef.current.classList.add("highlight");
        setTimeout(() => {
          matchesRef.current.classList.remove("highlight");
        }, "1000");
        // setCardsSelected([])
      } else {
        //here, if the cards dont match, I want to flip them back over by mapping through the randomCards and looking for a matching id and changing the value for flipped back to false, so when it rerenders it wont show.
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
    //ignore the linting rule violations on the very next line of code. Its essentially saying “This code will probably work, but something about it is messy, risky, inconsistent, or against the project’s rules.”
    // eslint-disable-next-line
  }, [cardsSelected, matched]);

  //this useEffect is using time and timeRunning as dependencies so essentially they are watching for changes within these states and when they change, they run this function.
  //useEffect hook is is used to run code after a comp renders. Its mainly used for side effects. A side effect is anything that affects something outside of the scope of the function being executed. In this case, we are using it to create a timer that counts down every second. We are also using it to check if the time has run out and if so, we set the game over flag to true. We also use it to add a highlight class to the time remaining when there is 1 minute left and remove it after a second.
  useEffect(() => {
    if (timerRunning) {
      const timerId = setTimeout(() => {
        if (time.minutes === 0 && time.seconds === "00") {
          //stops the timer at 0:00 and sets the gameOver flag to true
          setTimerRunning(false);
          setGameFlags({ ...gameFlags, gameOver: true });
        } else if (time.seconds === "00") {
          //this highlights the time remaining to hot pink, and after a second passes, the setTimeout removes the highlight.
          timeRemainingRef.current.classList.add("highlight");
          setTimeout(() => {
            timeRemainingRef.current.classList.remove("highlight");
          }, "1000");
          //this also sets the time to subtract a minute from time.minutes and start at 59 seconds
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          //this is responsible for the seconds. it keeps the minute, and then subtracts one if its greater than ten and then for numbers less than 10 it will add "0" and then the number
          setTime({
            minutes: time.minutes,
            seconds:
              time.seconds - 1 < 10
                ? `0${time.seconds - 1}`
                : time.seconds - 1 || "00",
          });
        }
      }, 1000);
      //clean up.
      return () => clearTimeout(timerId);
    }
    // eslint-disable-next-line
  }, [time, timerRunning]);

  const handleClick = (e) => {
    //on click of the cards, if the game is over or the length of the values in cards selected is equal to two, then I want to return out of this function early . Essentially doing nothing.
    if (gameFlags.gameOver || cardsSelected.length === 2) {
      return;
    }
    //otherwise, I want to set the timer and perform the rest of the function.
    setTimerRunning(true);
    if (cardsSelected.length < 2) {
      // saving a ref based on the length of the cardsSelected array. If it is 0 then the click is my first card and I want to save that into the card1ref, if its not, then that is my second card selected and I want to save that into the card2ref. These are beneficial for when I want to unflip them if they dont match.
      cardsSelected.length === 0
        ? (card1ref.current = e)
        : (card2ref.current = e);
      //picking up card value and setting it  I just need this to compare if the two cards are the same to account for matches. When setting it, im spreading whats currently in the cards selected array and adding the valu
      let cardValue = e.target.classList[1];
      setCardsSelected([...cardsSelected, cardValue]);
    }

    //e.target id is a string so we need that as a number to compare it to the id in the data set.
    //in a variable called updatedFlippedCards, iterate through the random cards with the map method. if the cards id in the randomCard data set matches the selected cards id then change the value of flipped to true. There is a use effect on cards selected, so when that is updated, there is a rerender and being the this card will be set to "flipped: true", it will display the card.
    let cardSelectedId = Number(e.target.id);
    let updatedFlippedCards = randomCards.map((card) => {
      if (card.id === cardSelectedId) {
        card.flipped = true;
      }
      return card;
    });
    //update the cards to reflect the flip
    setRandomCards(updatedFlippedCards);
  };

  //something extra, this is for the users to be able to select a level of difficulty which gives 12,24,48 cards based on difficulty. I have a reference to the level of difficulty which is stored when the user chooses a level of difficulty. Then the random cards are set by calling the randomizer function using the ref to the difficulty as an argument. The e.target.value is based on the click of the button which just gives us a number of 12,24,48. Then I am setting the game flag "start of game" to false so it will display the actual game and not the difficulty screen.
  const handleDifficulty = (e) => {
    difficultyRef.current = e.target.value;
    setRandomCards(Randomizer(difficultyRef.current));
    setGameFlags({ ...gameFlags, startOfGame: false });
  };
  //this use effect is looking for the start of game to change. Basically Im looking for the start of the game to be false, so in order for it to meet this conditional, I need the negated version of false, which is true. then I want to set the total matches to reflect the the state of the random cards.
  useEffect(() => {
    !gameFlags.startOfGame && setTotalMatches(TotalMatches(randomCards));
    // eslint-disable-next-line
  }, [gameFlags.startOfGame]);

  //this handles the reset of the game and sets all of the pieces of state back to its original condition
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
      {/* If it is the start of the game, basically on load then I want to display the difficulty page, once the user selects a difficulty, I want to display the card grid.  */}
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
         <button id="resetButton" onClick={reset}>Reset</button>

          {/* If the game is over and the user wins then display a message that states such and has a button to start a new game */}
          {gameFlags.gameOver && gameFlags.win && (
            <Message
              message="You Win"
              matches={matched}
              totalMatches={totalMatches}
              funct={reset}
            />
          )}
          {/* If the game is over and the user does not win/ game ran out of time then display a message that states such and has a button to start a new game */}
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
