import { getLogin } from "../utils/functions";
const Home = () => {
  // Variables

  // Actions
  const handleLogin = () => {
    getLogin();
  };

  // View
  return (
    <div>
      <h1>Home</h1>
      <div>Please connect to use your data.</div>
      <button onClick={handleLogin}>Connect with Strava</button>
    </div>
  );
};

export default Home;
