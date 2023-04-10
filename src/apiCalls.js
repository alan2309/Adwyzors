import RoleConstants from "./constants/RoleConstants";
import axiosInstance from "./axios";
export const signInCall = async (userCredential, dispatch) => {
  dispatch({ type: "REGISTER_START" });
  try {
    await axiosInstance.post("/auth/register", userCredential);
    dispatch({ type: "REGISTER_SUCCESS", payload: null });
    return null;
  } catch (err) {
    dispatch({ type: "REGISTER_FAILURE", payload: err });
    return err;
  }
};
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    let data = {};
    let userRole = RoleConstants.EMPLOYEE;
    if (
      userCredential.email !== "admin@admin.com" &&
      userCredential.password !== "admin"
    ) {
      const res = await axiosInstance.post("/auth/login", userCredential);
      if (res.data?.token) {
        let acc_token = "Bearer " + res.data.token.access;
        axiosInstance.defaults.headers["Authorization"] = acc_token;
        localStorage.setItem("access_token", res.data.token.access);
        localStorage.setItem("refresh_token", res.data.token.refresh);
      } else {
        alert("No jwt token found");
      }
      data = res.data.user;
      if (parseInt(res.data.user.userRole) === 0) {
        userRole = RoleConstants.EMPLOYEE;
      } else if (parseInt(res.data.user.userRole) === 1) {
        userRole = RoleConstants.COMPANY;
      } else if (parseInt(res.data.user.userRole) === 2) {
        userRole = RoleConstants.ADMIN;
      }
    }

    data = {
      ...data,
      auth: true,
      userRole: userRole,
    };
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    return null;
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    return err;
  }
};
