import { useState } from "react";
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

    console.log(paragraph)
    return(
        <div className = "textControl">
            <div className = "sizeButtons">
                <button className = "size" onClick = {() => handleParagraphSize(10)}>10</button>
                <button className = "size" onClick = {() => handleParagraphSize(25)}>25</button>
                <button className = "size" onClick = {() => handleParagraphSize(50)}>50</button>
                <button className = "size" onClick = {() => handleParagraphSize(75)}>75</button>
                <button className = "size" onClick = {() => handleParagraphSize(100)}>100</button>
            </div>
            <div className = "paragraph">
                {paragraph}
            </div>
            <div>
                <input className = "typeBox"/><button className = "redo" onClick = {() => handleRedo(size)}>REDO</button>
            </div>
        </div>
    )
}

export default Text;