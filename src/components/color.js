import { useState } from "react";
import { ChromePicker } from "react-color";
import './sass/color.sass';

const Color = (props) => {
    const style = props.rgba
    const [rgba, setRgba] = useState({
        r: style.r,
        g: style.g,
        b: style.b,
        a: style.a,
    }), { r, g, b, a } = rgba;

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(curr => !curr)
    const handleClose = () => {
        setToggle(false);
        props.onColorUpdate(rgba);
    }

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