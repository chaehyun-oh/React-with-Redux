function ProfileCard({ title, handle, image }) {
    // const title = props.title;
    // const handle = props.handle;

    // const { title, handle } = props;
    // console.log(title, handle);
    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;