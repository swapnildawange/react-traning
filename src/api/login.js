import axios from "axios";
export const userLogin = (req, res) => {
  axios.post(`${process.env.API_URL}/api/v1/auth/login`, req.body);
};
