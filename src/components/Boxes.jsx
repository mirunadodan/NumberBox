import NumberBox from "./NumberBox";
import "./Boxes.css";

export default function Boxes() {
    let boxes=[];
    for (let i=0; i<30; i++) {
        boxes.push(<NumberBox/>)
    }
    return (
        <div className="boxes"> {boxes} </div>
    )
}