import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const subscribeToNewsletter = async (email) => {
  console.log("Sending email:", email);
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

export const createSlotOrder = async (amount) => {
  try {
    const response = await axios.post(`${BASE_URL}/slots/order`, {
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating slot order:", error);
    throw error;
  }
};

export const bookSlotApi = async (slotData) => {
  try {
    const response = await axios.post(`${BASE_URL}/slots/book`, slotData);
    return response;
  } catch (error) {
    console.error("Error booking slot:", error);
    throw error;
  }
};
