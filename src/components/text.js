import { useState, useRef } from "react";
import './sass/text.sass'
const randomWords = require('random-words');

const Text = () => {
    const [paragraph, setParagraph] = useState("");
    const [size, setSize] = useState();

    const handleParagraphSize = (count) => {
        setSize(count);
        setParagraph(randomWords(size).join(" "));
    };

    const handleRedo = (size) => {
        handleParagraphSize(size);
    };

    let letters = paragraph.split("");
    console.log(letters)

    // used to check input value while in the handleKeyDown function
    // https://bobbyhadz.com/blog/react-get-input-value
    const inputRef = useRef(null);

    const element = document.querySelector(".paragraph");

    let i = 0;
    const handleChange = (e) => {
        // grab the last letter in the input
        const lastLetter = e.target.value.slice(-1)
        // check if the current input letter matches the current paragraph letter
        if(lastLetter === letters[i]){
            element.innerHTML =  '<span style="color: #228B22' + '">' + letters[i] + '</span>';
            console.log(letters[i])
            // reset input to blank if the current paragraph letter is a space
            if(lastLetter === " " && letters[i] === " ") e.target.value = ""
            i++
        } else {
            console.log("mistake")
            i++
        }
    }

    const handleKeyDown = (e) => { if(e.keyCode === 8 && inputRef.current.value !== "") i -= 2 }

    console.log(paragraph)
    return(
        <div className = "textControl">
            <div className = "sizeButtons">
                <button className="size" onClick={() => handleParagraphSize(10)}>10</button>
                <button className="size" onClick={() => handleParagraphSize(25)}>25</button>
                <button className="size" onClick={() => handleParagraphSize(50)}>50</button>
                <button className="size" onClick={() => handleParagraphSize(75)}>75</button>
                <button className="size" onClick={() => handleParagraphSize(100)}>100</button>
            </div>
            <div className="paragraph">
                {paragraph}
            </div>
            <div>
                <input
                    ref={inputRef}
                    className="typeBox"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                /><button className="redo" onClick = {() => handleRedo(size)}>REDO</button>
            </div>
        </div>
    )
}

export default Text;