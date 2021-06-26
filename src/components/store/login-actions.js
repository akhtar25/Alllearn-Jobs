import axios from "axios";

export const userLogin = (dataObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(dataObj);
      const res = await axios.get("loginAPI", { params: dataObj });
      console.log(res);
      resolve(res.data);

      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.tokenId);
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
