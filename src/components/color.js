import { useState } from "react";
import { ChromePicker } from "react-color";

const Color = () => {
    const [rgba, setRgba] = useState({
        r: "211",
        g: "39",
        b: "245",
        a: "1",
    }), { r, g, b, a } = rgba;

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(curr => !curr), handleClose = () => setToggle(false);

    const styles = {
        color: {
            width: '50px',
            height: '20px',
            backgroundColor: `rgba(${r},${g},${b},${a})`
        },
        popup: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
    }

    return(
        <div>
            <div onClick = {() => handleClick()}>
                <div style = { styles.color }/>
            </div>
            {
                toggle ?
                        <div style={ styles.popup }>
                            <div
                                style={ styles.cover }
                                onClick={() => handleClose()}
                            />
                            <ChromePicker color={ rgba } onChange={(color) => setRgba(color.rgb)} />
                        </div>
                : null
            }
        </div>
    );
};

export default Color;