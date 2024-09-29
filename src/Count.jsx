import { useState } from "react"

export default function Count() {
    const [Count, setCount] = useState(0);
    const handleButton = () => {
        const newCount = Count + 1;
        setCount(newCount);
    }
    const reduceBtn = () => {
        setCount(Count - 1);
    }
    return (
        <div style={{ border: '2px red solid', padding: '10px' }}>
            <h2>Counter : {Count}</h2>
            <button style={{ backgroundColor: 'purple', color: 'white' }} onClick={handleButton}>Add</button>
            <button style={{ backgroundColor: 'purple', color: 'white' }} onClick={reduceBtn}>Reduce</button>
        </div>
    )
}