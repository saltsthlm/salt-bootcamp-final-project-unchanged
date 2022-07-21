import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, user } = useAuth0();

  return (
    <div>
      <h1>Contact Me</h1>
      <img src={user.picture} alt={user.name}/>
      <h2>{user.name}</h2>
      <p>Username: {user.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </div>
  );
};

export default Profile;