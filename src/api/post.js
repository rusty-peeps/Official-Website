import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/newsletter`, { email });
    return response.data;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/other/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
};

export const submitCareerTraining = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admissions`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting career training form:", error);
    throw error;
  }
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
