import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTokens } from "../reducers/tokenSlice";

const Redirect = () => {
  // Variables
  const authorizationStatus = useSelector((state) => state.token.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Actions
  if (authorizationStatus === "idle") {
    dispatch(getTokens());
  } else if (authorizationStatus === "fulfilled") {
    navigate("/main", { replace: true });
  }

  // View
  return authorizationStatus === "idle" ? (
    <div>Retrieving data...</div>
  ) : (
    <div>
      <div>Loading data...</div>
    </div>
  );
};

export default Redirect;
