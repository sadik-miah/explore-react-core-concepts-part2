export default function Post({ post }) {
    // console.log(post);
    const { userId, title, body } = post;
    return (
        <div style={{ border: '2px purple solid' }}>
            <h2>userId : {userId}</h2>
            <h3>Title : {title}</h3>
            <p>{body}</p>
        </div>
    )
}