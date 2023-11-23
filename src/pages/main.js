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

  console.log("MAIN");
  // View
  return (
    <div>
      <p>Hi, {athlete.firstname}!</p>
    </div>
  );
};

export default Main;
