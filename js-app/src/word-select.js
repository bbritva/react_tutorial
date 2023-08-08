import { useState } from "react";

export default function WordSelect({wordSelected, isShown}) {
    const [secretWord, setSecretWord] = useState('')
    
    
    return isShown && (
        <div>
            <input
             type="text"
             onChange={(e) => setSecretWord(e.target.value)}
             />
             <button 
                onClick={e => wordSelected(secretWord)}
            >
                Set word
            </button>
        </div>
    )
}