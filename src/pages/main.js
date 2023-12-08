import { useDispatch, useSelector } from "react-redux";
import { setActivites } from "../reducers/activitySlice";
import { useEffect } from "react";

const Main = () => {
  // Variables
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const activitiesStatus = useSelector((state) => state.athlete.status);
  const activities = useSelector((state) => state.athlete.activities);

  //Actions
  useEffect(() => {
    dispatch(setActivites());
  });

  // View
  return (
    <div>
      <p>Hi, {token.athlete.firstname}!</p>
      <p>Activity: {activities}</p>
    </div>
  );
};

export default Main;
