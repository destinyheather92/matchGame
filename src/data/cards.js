import twoOfClubs from "../assets/2_of_clubs.png";
import twoOfDiamonds from "../assets/2_of_diamonds.png";
import twoOfHearts from "../assets/2_of_hearts.png";
import twoOfSpades from "../assets/2_of_spades.png";
import threeOfClubs from "../assets/3_of_clubs.png";
import threeOfDiamonds from "../assets/3_of_diamonds.png";
import threeOfHearts from "../assets/3_of_hearts.png";
import threeOfSpades from "../assets/3_of_spades.png";
import fourOfClubs from "../assets/4_of_clubs.png";
import fourOfDiamonds from "../assets/4_of_diamonds.png";
import fourOfHearts from "../assets/4_of_hearts.png";
import fourOfSpades from "../assets/4_of_spades.png";
import fiveOfClubs from "../assets/5_of_clubs.png";
import fiveOfDiamonds from "../assets/5_of_diamonds.png";
import fiveOfHearts from "../assets/5_of_hearts.png";
import fiveOfSpades from "../assets/5_of_spades.png";
import sixOfClubs from "../assets/6_of_clubs.png";
import sixOfDiamonds from "../assets/6_of_diamonds.png";
import sixOfHearts from "../assets/6_of_hearts.png";
import sixOfSpades from "../assets/6_of_spades.png";
import sevenOfClubs from "../assets/7_of_clubs.png";
import sevenOfDiamonds from "../assets/7_of_diamonds.png";
import sevenOfHearts from "../assets/7_of_hearts.png";
import sevenOfSpades from "../assets/7_of_spades.png";
import eightOfClubs from "../assets/8_of_clubs.png";
import eightOfDiamonds from "../assets/8_of_diamonds.png";
import eightOfHearts from "../assets/8_of_hearts.png";
import eightOfSpades from "../assets/8_of_spades.png";
import nineOfClubs from "../assets/9_of_clubs.png";
import nineOfDiamonds from "../assets/9_of_diamonds.png";
import nineOfHearts from "../assets/9_of_hearts.png";
import nineOfSpades from "../assets/9_of_spades.png";
import tenOfClubs from "../assets/10_of_clubs.png";
import tenOfDiamonds from "../assets/10_of_diamonds.png";
import tenOfHearts from "../assets/10_of_hearts.png";
import tenOfSpades from "../assets/10_of_spades.png";
import jackOfClubs from "../assets/jack_of_clubs.png";
import jackOfDiamonds from "../assets/jack_of_diamonds.png";
import jackOfHearts from "../assets/jack_of_hearts.png";
import jackOfSpades from "../assets/jack_of_spades.png";
import queenOfClubs from "../assets/queen_of_clubs.png";
import queenOfDiamonds from "../assets/queen_of_diamonds.png";
import queenOfHearts from "../assets/queen_of_hearts.png";
import queenOfSpades from "../assets/queen_of_spades.png";
import kingOfClubs from "../assets/king_of_clubs.png";
import kingOfDiamonds from "../assets/king_of_diamonds.png";
import kingOfHearts from "../assets/king_of_hearts.png";
import kingOfSpades from "../assets/king_of_spades.png";
import aceOfClubs from "../assets/ace_of_clubs.png";
import aceOfDiamonds from "../assets/ace_of_diamonds.png";
import aceOfHearts from "../assets/ace_of_hearts.png";
import aceOfSpades from "../assets/ace_of_spades.png";

const cards = [
  { id: 0, value: "2", flipped: false, matched: false, path: twoOfClubs },
  { id: 1, value: "2", flipped: false, matched: false, path: twoOfDiamonds },
  { id: 2, value: "2", flipped: false, matched: false, path: twoOfHearts },
  { id: 3, value: "2", flipped: false, matched: false, path: twoOfSpades },
  { id: 4, value: "3", flipped: false, matched: false, path: threeOfClubs },
  { id: 5, value: "3", flipped: false, matched: false, path: threeOfDiamonds },
  { id: 6, value: "3", flipped: false, matched: false, path: threeOfHearts },
  { id: 7, value: "3", flipped: false, matched: false, path: threeOfSpades },
  { id: 8, value: "4", flipped: false, matched: false, path: fourOfClubs },
  { id: 9, value: "4", flipped: false, matched: false, path: fourOfDiamonds },
  { id: 10, value: "4", flipped: false, matched: false, path: fourOfHearts },
  { id: 11, value: "4", flipped: false, matched: false, path: fourOfSpades },
  { id: 12, value: "5", flipped: false, matched: false, path: fiveOfClubs },
  { id: 13, value: "5", flipped: false, matched: false, path: fiveOfDiamonds },
  { id: 14, value: "5", flipped: false, matched: false, path: fiveOfHearts },
  { id: 15, value: "5", flipped: false, matched: false, path: fiveOfSpades },
  { id: 16, value: "6", flipped: false, matched: false, path: sixOfClubs },
  { id: 17, value: "6", flipped: false, matched: false, path: sixOfDiamonds },
  { id: 18, value: "6", flipped: false, matched: false, path: sixOfHearts },
  { id: 19, value: "6", flipped: false, matched: false, path: sixOfSpades },
  { id: 20, value: "7", flipped: false, matched: false, path: sevenOfClubs },
  { id: 21, value: "7", flipped: false, matched: false, path: sevenOfDiamonds },
  { id: 22, value: "7", flipped: false, matched: false, path: sevenOfHearts },
  { id: 23, value: "7", flipped: false, matched: false, path: sevenOfSpades },
  { id: 24, value: "8", flipped: false, matched: false, path: eightOfClubs },
  { id: 25, value: "8", flipped: false, matched: false, path: eightOfDiamonds },
  { id: 26, value: "8", flipped: false, matched: false, path: eightOfHearts },
  { id: 27, value: "8", flipped: false, matched: false, path: eightOfSpades },
  { id: 28, value: "9", flipped: false, matched: false, path: nineOfClubs },
  { id: 29, value: "9", flipped: false, matched: false, path: nineOfDiamonds },
  { id: 30, value: "9", flipped: false, matched: false, path: nineOfHearts },
  { id: 31, value: "9", flipped: false, matched: false, path: nineOfSpades },
  { id: 32, value: "10", flipped: false, matched: false, path: tenOfClubs },
  { id: 33, value: "10", flipped: false, matched: false, path: tenOfDiamonds },
  { id: 34, value: "10", flipped: false, matched: false, path: tenOfHearts },
  { id: 35, value: "10", flipped: false, matched: false, path: tenOfSpades },
  { id: 36, value: "J", flipped: false, matched: false, path: jackOfClubs },
  { id: 37, value: "J", flipped: false, matched: false, path: jackOfDiamonds },
  { id: 38, value: "J", flipped: false, matched: false, path: jackOfHearts },
  { id: 39, value: "J", flipped: false, matched: false, path: jackOfSpades },
  { id: 40, value: "Q", flipped: false, matched: false, path: queenOfClubs },
  { id: 41, value: "Q", flipped: false, matched: false, path: queenOfDiamonds },
  { id: 42, value: "Q", flipped: false, matched: false, path: queenOfHearts },
  { id: 43, value: "Q", flipped: false, matched: false, path: queenOfSpades },
  { id: 44, value: "K", flipped: false, matched: false, path: kingOfClubs },
  { id: 45, value: "K", flipped: false, matched: false, path: kingOfDiamonds },
  { id: 46, value: "K", flipped: false, matched: false, path: kingOfHearts },
  { id: 47, value: "K", flipped: false, matched: false, path: kingOfSpades },
  { id: 48, value: "A", flipped: false, matched: false, path: aceOfClubs },
  { id: 49, value: "A", flipped: false, matched: false, path: aceOfDiamonds },
  { id: 50, value: "A", flipped: false, matched: false, path: aceOfHearts },
  { id: 51, value: "A", flipped: false, matched: false, path: aceOfSpades },
];

export default cards;
