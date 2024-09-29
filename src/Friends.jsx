export default function Friends({ friend }) {
    // console.log(friend);
    const { name, age, id } = friend;
    return (
        <div className="friend-style">
            <div>
                <h3>name: {name}</h3>
                <h4>age : {age}</h4>
                <p>id: {id}</p>
            </div>
        </div>
    )

}