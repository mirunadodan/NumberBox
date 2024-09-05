import "./Boxes.css";
import { useState } from "react";

export default function NumberBox() {
    const [number, setNumber] = useState(0);
    function changeNumber () {
        setNumber(Math.floor(Math.random()*100)+1);
    }
    return (
        <div className="numberBoxes" onClick={changeNumber}>{number}</div>
    )
}