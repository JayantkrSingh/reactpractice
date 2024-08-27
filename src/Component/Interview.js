import { useEffect, useState } from "react";

const Interview = () => {
    const [count, setCount] = useState(0);
    const [val, setValue] = useState("");
    useEffect(() => {
        console.log("count ", count);       // 1 
        setValue(count);
    }, [count]);

    useEffect(() => {
        console.log("count ", count);       // 0
        console.log("val ", val);           // ""
    }, []);

    return (
        <div className="App">
            <button onClick={() => { setCount(count + 1); }} >
                Click123
            </button>
        </div>
    );
}
export default Interview;