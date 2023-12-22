import moment from "moment";

/**
 * Variables
 */
const today = moment().unix();
const oneMonthAgo = moment().subtract(1, "month").unix();
const REACT_APP_CLIENT_ID = "77577";
const REACT_APP_CLIENT_SECRET = "cef5a0596d8b1da5e4c976eeab5aa77857eeb164";
const REDIRECT_URL = "http://localhost:3000/redirect";
const SCOPE = "activity:read,profile:read_all,activity:write";

/**
 * Extracts authorization code from redirect URL.
 * @param {*} stringElement
 * @returns string
 */
export const extractAuthorizationCode = (stringElement) => {
  return stringElement.split("&")[1].slice(5);
};

/**
 * Navigates to Strava's authentication interface. Strava user is requested to assign specific scope of privileges.
 */
export const getLogin = () => {
  window.location = `https://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}/exchange_token&approval_prompt=force&scope=${SCOPE}`;
};

/**
 * Fetches athlete data as specified in the authorization code. The extent depends on assigned scope of privileges.
 * @async
 * @param {string} authorizationCode
 * @returns
 */
export const getData = async (authorizationCode) => {
  try {
    const response = await fetch(
      `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authorizationCode}&grant_type=authorization_code`,
      {
        method: "POST",
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error while getting athlete data: " + error);
  }
};

/**
 *Fetches authenticated user's acitvities.
 * @param {string} accessToken
 * @returns
 */
export const getActivites = async (accessToken) => {
  try {
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?before=${today}?after=${oneMonthAgo}?per_page=30`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((data) => data.json());
    return response;
  } catch (error) {
    console.log("Error while getting athlete data: " + error);
  }
};

export const updateActivity = async (id, accessToken) => {
  try {
    const response = await fetch(
      `https://www.strava.com/api/v3/activities/${id}"`,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error while updating activity: " + error);
  }
};

export const createActivity = async (
  accessToken,
  activity_name,
  type,
  sport_type,
  start_date_local,
  elapsed_time,
  description,
  distance
) => {
  try {
    const response = await fetch(
      `https://www.strava.com/api/v3/activities name=${activity_name} type=${type} sport_type=${sport_type} start_date_local=${start_date_local} elapsed_time=${elapsed_time} description=${description} distance=${distance} trainer=0 commute=0`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error while posting new activity: " + error);
  }
};
