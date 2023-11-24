import { useSelector } from "react-redux";
import { getActivites } from "../utils/functions";

const Main = () => {
  // Variables
  const athlete = useSelector((store) => store.athlete.athlete);
  const token = useSelector((store) => store.token);

  //Actions
  const retrieveActivities = (token) => {
    getActivites(token.access_token);
  };

  console.log(token);

  // View
  return athlete === undefined ? (
    <div>Retrieving data...</div>
  ) : (
    <div>
      <p>Hi, {athlete.firstname}!</p>
      <p>Your token {token.access_token}</p>
    </div>
  );
};

export default Main;
