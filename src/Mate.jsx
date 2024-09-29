export default function Mate({ mate }) {
    console.log(mate);
    const { id, name, email, website } = mate;

    return (
        <div style={{ border: '2px purple solid' }}>
            <h2>id:{id}</h2>
            <h3>name: {name}</h3>
            <h4>email: {email}</h4>
            <p>website: {website}</p>
        </div>
    )
}