import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { extractAuthorizationCode, getAthlete } from "../utils/functions";
import { useEffect, useState } from "react";
import { setAthlete } from "../reducers/athleteSlice";
import { setToken } from "../reducers/tokenSlice";

const Redirect = () => {
  // Variables
  const [isFetching, setIsFetching] = useState(true);
  const [authorizationCode, setAuthorizationCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Actions
  useEffect(() => {
    setAuthorizationCode(extractAuthorizationCode(window.location.href));
  });

  useEffect(() => {
    const authenticate = async () => {
      try {
        const athleteRequest = await getAthlete(authorizationCode);
        console.log(athleteRequest.access_token);
        dispatch(setAthlete(athleteRequest.athlete));
        dispatch(setToken(athleteRequest.access_token));
      } catch (error) {
        console.error(error.message);
      }
    };

    if (authorizationCode !== "") {
      authenticate();
    }

    setIsFetching(false);
  }, [authorizationCode]);

  useEffect(() => {
    if (isFetching === false) {
      navigate("/main", { replace: true });
    }
  }, [isFetching]);

  // View
  return <div>Loading...</div>;
};

export default Redirect;
