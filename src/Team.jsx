import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleReduce = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Players : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}