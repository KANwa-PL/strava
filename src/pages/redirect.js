import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { extractAuthorizationCode, getAthlete } from "../utils/functions";
import { useEffect } from "react";
import { setAthlete } from "../reducers/athleteSlice";
import { setToken } from "../reducers/tokenSlice";

const Redirect = () => {
  // Variables
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Actions
  useEffect(() => {
    navigate("/main", { replace: true });
  });

  const authenticate = async () => {
    try {
      const authorizationCode = extractAuthorizationCode(window.location.href);
      const athleteRequest = await getAthlete(authorizationCode);
      dispatch(setAthlete(athleteRequest.athlete));
      dispatch(
        setToken({
          access_token: athleteRequest.access_token,
          refresh_token: athleteRequest.refresh_token,
          token_type: athleteRequest.token_type,
        })
      );
    } catch (error) {
      return console.error(error.message);
    }
  };

  authenticate();

  // View
  return <div>Loading...</div>;
};

export default Redirect;
