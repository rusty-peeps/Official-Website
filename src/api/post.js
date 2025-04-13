import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const subscribeToNewsletter = async (email) => {
  const response = await axios.post(`${BASE_URL}/newsletter`, { email });
  return response.data;
};

export const sendContactMessage = async (formData) => {
  const response = await axios.post(`${BASE_URL}/other/contact`, formData);
  return response.data;
};

export const submitCareerTraining = async (formData) => {
  const response = await axios.post(`${BASE_URL}/admissions`, formData);
  return response.data;
};
