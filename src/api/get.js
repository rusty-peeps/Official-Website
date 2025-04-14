import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchSlotEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/slots`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
