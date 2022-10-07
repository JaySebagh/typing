import { useState } from "react";
import { SketchPicker } from "react-color";

const Color = () => {
    const [rgba, setRgba] = useState({
        r: "211",
        g: "39",
        b: "245",
        a: "0.8"
    })

    const { r, g, b, a } = rgba;
    
    const [save, setSave] = useState();

    return(
        <div>
            <div
                style = {{
                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                    width: 50,
                    height: 20
                }}
            ></div>
            <SketchPicker onChange = {(color) => setRgba(color.rgb)} color = { rgba }/>
            R {save[0]} - G {save[1]} - B {save[2]} - A {save[3]}
            <button onClick = {() => setSave([r, g, b, a])}>Save Color</button>
        </div>
    );
};

export default Color;