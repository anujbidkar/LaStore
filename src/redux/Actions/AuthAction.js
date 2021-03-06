import axios from "axios";
import {
  USER_REGISTER,
  SIGNIN,
  ERROR_MESSAGE,
  GET_USER_DETAILS,
  NEWS_LETTER_SUBSCRIBE
} from "../ActionType";
import { toast } from "../../components/Toast/Toast";
import { url } from "../../config";

export const signUpAction = (data) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${url}/api/users/register`,
      data,
    });
    toast.success(res.data.message);
    dispatch({ type: USER_REGISTER, payload: true });
    return res;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const signInAction = (data) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${url}/api/users/login`,
      data,
    });
    dispatch({ type: GET_USER_DETAILS, payload: res.data.data.userDetails });
    localStorage.setItem("user", JSON.stringify(res.data.data.userDetails));
    localStorage.setItem("token", res.data.data.token);
    toast.success(res.data.message);
    return res;
  } catch (error) {
    console.log(error.response.data);
    toast.error(error.response.data.message);
    dispatch({ type: ERROR_MESSAGE, payload: error.response.data.message });
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  const getUserDetailsFromLocalStorage = JSON.parse(
    localStorage.getItem("user")
  );
  if (getUserDetailsFromLocalStorage) {
    dispatch({
      type: GET_USER_DETAILS,
      payload: getUserDetailsFromLocalStorage,
    });
  }
};

export const newsLetterSubscribe = (email) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${url}/api/users/newslettersubscription`,
      data: { email }
    });
    toast.success(res.data.message);
    dispatch({ type: NEWS_LETTER_SUBSCRIBE, payload: true });
    return res;
  } catch (error) {
    toast.error(error.response.data.message);
  }
}
