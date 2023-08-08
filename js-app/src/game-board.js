import LetterGrid from "./letter-grid"
import ButtonGrid from "./button-grid"
import { useState } from "react"

export default function GameBoard({secretWord, maxErrors, isShown}) {
    const [guessedLetters, setGuessedLetters] = useState([])
    const [errorCount, setErrorCount] = useState(0)
    
    const letterGuessedHandler = function(letter) {
        const val = letter.toLowerCase()
        setGuessedLetters((prev) => [...prev, val ])
        if (secretWord.toLowerCase().indexOf(val) === -1)
            setErrorCount(1 + errorCount)
    }
    return (
        isShown && 
        <>
            <div>
                Mistakes left: {maxErrors - errorCount}
            </div>
            <LetterGrid
                secretWord={secretWord}
                guessedLetters={guessedLetters}
            />
            <ButtonGrid
                letterGuessed={letterGuessedHandler}
                isShown={errorCount < maxErrors}
            ></ButtonGrid>
        </>
    )
}