const API_KEY_QUANDL = 'HDB-BuKoDWEJZxkUk2yA';
/**
  * Get data gold from Quandl API
  */
export function getDataGold(dispatch) {
  dispatch({ type: 'LOAD_DATA_GOLD' });
  let date = new Date();
  date.setDate(date.getDate() - 20);
  fetch(`https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_EUR.json?api_key=${API_KEY_QUANDL}&start_date=${date.toISOString()}`)
  .then((resp) => resp.json())
  .then((jsonResponse) => {
    const { data } = jsonResponse.dataset;
    dispatch({ type: 'LOAD_DATA_GOLD_SUCCESS', data });
  });
}