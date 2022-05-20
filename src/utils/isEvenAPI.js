import axios from "axios";

const IS_EVEN_API = "https://api.isevenapi.xyz/api/";

/**
 * @param {*} number
 *
 * @returns {Promise}
 */
const isEven = async (number) => {
  return await axios.get(`${IS_EVEN_API}iseven/${number}/`);
};

export default isEven;
