import axios from "axios";

export const sendSms = async (payload) => {
  try {
    const res = await axios.post('/api/verify/test_sending', payload);
    return res; // res.data will contain the actual response body
  } catch (err) {
    return err.response.data; // You can handle the error outside
  }
}