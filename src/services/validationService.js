import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const validateBusinessIdea = async (businessIdea) => {
  try {
    const response = await axios.post(`${API_URL}/validate`, {
      businessIdea,
      apiKey: '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'
    });
    return response.data;
  } catch (error) {
    console.error('Error validating business idea:', error);
    throw error;
  }
};