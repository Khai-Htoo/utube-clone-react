import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': 'b82febafa8msh4d77cb2bf2a34d8p1c9859jsn76b9d973c419',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };
export const fetchData = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}/`,options)
    return data;
}