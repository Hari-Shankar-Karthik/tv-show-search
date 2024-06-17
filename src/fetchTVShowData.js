import axios from "axios";

const baseURL = "https://api.tvmaze.com";

const fetchTVShowData = async (searchFor, searchKeyword) => {
  const response = await axios.get(`${baseURL}/search/${searchFor}`, {
    params: {
      q: searchKeyword,
    },
  });
  return response.data;
};

export default fetchTVShowData;
