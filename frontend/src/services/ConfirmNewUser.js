import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const ConfirmNewUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/confirmAccount`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};

export default ConfirmNewUser;
