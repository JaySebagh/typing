import { useState } from "react";
import { ChromePicker } from "react-color";
import './sass/color.sass';

const Color = (props) => {
    const [rgba, setRgba] = useState({
        r: props.red,
        g: props.green,
        b: props.blue,
        a: props.alpha,
    }), { r, g, b, a } = rgba;

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(curr => !curr), handleClose = () => setToggle(false);

    const styles = {
        color: {
            width: '50px',
            height: '20px',
            backgroundColor: `rgba(${r},${g},${b},${a})`,
            border: '2px solid white'
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