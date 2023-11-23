const Home = () => {
  // Variables
  const redirectURL = "http://localhost:3000/redirect";
  const scope = "read";

  // Actions
  const handleLogin = () => {
    window.location = `https://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectURL}/exchange_token&approval_prompt=force&scope=${scope}`;
  };

  // View
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Connect with Strava</button>
      <div>Please connect to use your data.</div>
    </div>
  );
};

export default Home;
