import Letter from "./letter";

export default function LetterGrid({ secretWord, guessedLetters }) {
  const letters = secretWord.split("").map((letter, index) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1
    return <Letter value={letter} isShown={isShown} key={index}/>;
  });
  return <>{letters}</>;
}
