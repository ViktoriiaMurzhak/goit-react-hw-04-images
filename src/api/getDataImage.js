import axios from 'axios';

export const getImage = async params => {
  const { data } = await axios.get('https://pixabay.com/api/', { params });

  return data;
};
