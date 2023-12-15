import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const RegisterNewUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/createUser`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default RegisterNewUser;
