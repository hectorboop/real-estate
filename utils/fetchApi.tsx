import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'd3b92a025bmsh632769481413ec9p1cc594jsnfaba71db908d',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
};
