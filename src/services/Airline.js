import axios from 'axios';

export const getArrivalData = (val) => {
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);

  const fiveMinutesBefore = secondsSinceEpoch - val.minutes * 60 * 1000;

  return axios.get(
    `https://opensky-network.org/api/flights/arrival?airport=${val.airport}&begin=${fiveMinutesBefore}&end=${secondsSinceEpoch}`
  );
};

export const getDepartureData = (val) => {
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);

  const fiveMinutesBefore = secondsSinceEpoch - val.minutes * 60 * 1000;

  return axios.get(
    `https://opensky-network.org/api/flights/departure?airport=${val.airport}&begin=${fiveMinutesBefore}&end=${secondsSinceEpoch}`
  );
};
