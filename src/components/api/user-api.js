import axios from "axios";

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const jwtToken = localStorage.getItem("token");
      if (!jwtToken) {
        reject("Token not found!");
      }
      const res = await axios.get("userAPI", {
        headers: {
          Authorization: jwtToken,
        },
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.get("logoutAPI", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  } catch (error) {}
};

export const userRegistration = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newUser = await axios.get("registerAPI", {
        params: user,
      });
      resolve(newUser.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchProfileData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("inside fetchProfileData");
      const jwtToken = localStorage.getItem("token");
      const resp = await axios.get("userProfileAPI", {
        headers: {
          Authorization: jwtToken,
        },
      });
      console.log(resp);
      resolve(resp.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const fetchApplicationTrackingData = () => {
  return new Promise(async (resolve, reject) => {
    const jwtToken = localStorage.getItem("token");
    try {
      const response = axios.get("/applicationTrackingAPI", {
        headers: {
          Authorization: jwtToken,
        },
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
};

export const fetchJobApplications = (jobId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const jwtToken = localStorage.getItem("token");
      console.log("jobId", jobId);
      const response = await axios.get("jobApplicationsAPI", {
        params: {
          job_id: jobId,
        },
        headers: {
          Authorization: jwtToken,
        },
      });
      console.log(response.data);
      resolve(response.data);
    } catch (error) {
      reject(error.message);
    }
  });
};
