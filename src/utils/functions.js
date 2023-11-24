const REACT_APP_CLIENT_ID = "77577";
const REACT_APP_CLIENT_SECRET = "1d9016215ea3a224427a515d424bab9a7a7cbda8";
const REDIRECT_URL = "http://localhost:3000/redirect";
const SCOPE = "activity:read_all,profile:read_all,activity:write";

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
export const getAthlete = async (authorizationCode) => {
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
      `http GET "https://www.strava.com/api/v3/athlete/activities`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log("Error while getting athlete data: " + error);
  }
};
