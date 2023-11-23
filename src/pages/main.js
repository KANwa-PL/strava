import { useSelector } from "react-redux";
import { getActivites } from "../utils/functions";

const Main = () => {
  // Variables
  const athlete = useSelector((store) => store.athlete);
  const token = useSelector((store) => store.token);

  //Actions
  // const handleClick = () => {};
  const retrieveActivities = (token) => {
    getActivites(token.access_token);
  };

  // View
  return (
    <div>
      <p>Hi, {athlete.firstname}!</p>
    </div>
  );
};

export default Main;
