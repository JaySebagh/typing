import Color from './color.js'
import './sass/theme.sass'

const Theme = () => {
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
                <Color red = "17" green = "17" blue = "17" alpha = "1" /> {/*bg*/}
                <Color red = "241" green = "190" blue = "176" alpha = "1" /> {/*stats*/}
                <Color red = "43" green = "43" blue = "43" alpha = "1" /> {/*box*/}
                <Color red = "51" green = "51" blue = "51" alpha = "1" /> {/*placeholder*/}
                <Color red = "68" green = "68" blue = "68" alpha = "1" /> {/*curr word*/}
                <Color red = "241" green = "190" blue = "176" alpha = "1" /> {/*good word*/}
                <Color red = "249" green = "139" blue = "136" alpha = "1" /> {/*wrong word*/}
                <Color red = "43" green = "43" blue = "43" alpha = "1" /> {/*input*/}
                <Color red = "241" green = "190" blue = "176" alpha = "1" /> {/*redo*/}
            </div>
        </div>
    )
}

export default Theme