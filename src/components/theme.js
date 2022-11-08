import { useState } from 'react';
import Color from './Color.js';
import './sass/theme.sass';

const Theme = () => {
    const [bgColor, setBgColor] = useState({                    r: "17",     g: "17",    b: "17",    a: "1"});
    const [statsColor, setStatsColor] = useState({              r: "241",    g: "190",   b: "176",   a: "1"});
    const [boxColor, setBoxColor] = useState({                  r: "43",     g: "43",    b: "43",    a: "1"});
    const [placeholderColor, setPlaceholderColor] = useState({  r: "51",     g: "51",    b: "51",    a: "1"});
    const [currWordColor, setCurrWordColor] = useState({        r: "68",     g: "68",    b: "68",    a: "1"});
    const [goodWordColor, setGoodWordColor] = useState({        r: "241",    g: "190",   b: "176",   a: "1"});
    const [wrongWordColor, setWrongWordColor] = useState({      r: "249",    g: "139",   b: "136",   a: "1"});
    const [inputColor, setInputColor] = useState({              r: "43",     g: "43",    b: "43",    a: "1"});
    const [redoColor, setRedoColor] = useState({                r: "241",    g: "190",   b: "176",   a: "1"});

    const updateBgColor = (rgba) => setBgColor(rgba)
    const updateStatsColor = (rgba) => setStatsColor(rgba)
    const updateBoxColor = (rgba) => setBoxColor(rgba)
    const updatePlaceholderColor = (rgba) => setPlaceholderColor(rgba)
    const updateCurrWordColor = (rgba) => setCurrWordColor(rgba)
    const updateGoodWordColor = (rgba) => setGoodWordColor(rgba)
    const updateWrongWordColor = (rgba) => setWrongWordColor(rgba)
    const updateInputColor = (rgba) => setInputColor(rgba)
    const updateRedoColor = (rgba) => setRedoColor(rgba)

    console.log(bgColor, statsColor)

    return(
        <div className = "colorBox">
            <div className = "textContainer">
                <p>Background: </p>
                <p>Stats: </p>
                <p>Box: </p>
                <p>Placeholder: </p>
                <p>Current Word: </p>
                <p>Correct Word: </p>
                <p>Incorrect Word: </p>
                <p>Input: </p>
                <p>Redo: </p>
            </div>
            <div className = "colorContainer">
                <Color onColorUpdate = {updateBgColor} rgba = {bgColor} />
                <Color onColorUpdate = {updateStatsColor} rgba = {statsColor} />
                <Color onColorUpdate = {updateBoxColor} rgba = {boxColor} />
                <Color onColorUpdate = {updatePlaceholderColor} rgba = {placeholderColor} />
                <Color onColorUpdate = {updateCurrWordColor} rgba = {currWordColor} />
                <Color onColorUpdate = {updateGoodWordColor} rgba = {goodWordColor} />
                <Color onColorUpdate = {updateWrongWordColor} rgba = {wrongWordColor} />
                <Color onColorUpdate = {updateInputColor} rgba = {inputColor} />
                <Color onColorUpdate = {updateRedoColor} rgba = {redoColor} />
            </div>
        </div>
    )
}

export default Theme