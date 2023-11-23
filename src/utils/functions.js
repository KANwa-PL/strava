const REACT_APP_CLIENT_ID = "77577";
const REACT_APP_CLIENT_SECRET = "1d9016215ea3a224427a515d424bab9a7a7cbda8";

export const extractAuthorizationCode = (stringElement) => {
  return stringElement.split("&")[1].slice(5);
};

export const getAthlete = async (authorizationCode) => {
  const response = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authorizationCode}&grant_type=authorization_code`,
    {
      method: "POST",
    }
  );
  return response.json();
};

export const getActivites = async (accessToken) => {
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
};
