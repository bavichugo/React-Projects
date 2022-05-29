import Projects from "./Projects";

const UserCard = () => {
  return (
    <div>
      <img
        alt="profile"
        src="https://avatars.githubusercontent.com/u/61711023?v=4"
      />
      <h1>Profile Name</h1>
      <Projects />
    </div>
  );
};

export default UserCard;
