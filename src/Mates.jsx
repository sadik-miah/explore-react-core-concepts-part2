import { useEffect, useState } from "react";
import Mate from "./Mate";

export default function Mates() {
    const [mates, setMates] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMates(data))
    }, [])

    return (
        <div>
            <h2>User : {mates.length}</h2>
            {
                mates.map(mate => <Mate mate={mate}></Mate>)
            }
        </div>
    )

}