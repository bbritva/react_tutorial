import LetterGrid from "./letter-grid"
import ButtonGrid from "./button-grid"

export default function GameBoard({secretWord}) {
    return (
        <>
            <LetterGrid
                secretWord={secretWord}
                guessedLetters={['a', 'r']}
            />
            <ButtonGrid></ButtonGrid>
        </>
    )
}