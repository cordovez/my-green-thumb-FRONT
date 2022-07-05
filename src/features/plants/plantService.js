import axios from "axios";

const API_URL = "http://localhost:4000/plants/";

const createPlant = async (plantData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, plantData, config);
  return response.data;
};

const plantService = { createPlant };

export default plantService;
