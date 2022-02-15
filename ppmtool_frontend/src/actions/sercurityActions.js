import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const createNewUser = (newUser,history) =>async dispatch =>{
    try {
        await axios.post("/api/member/register", newUser);
        history.push("/login");
        dispatch({
          type: GET_ERRORS,
          payload: {}
        });
        
      } catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
};
export const updateUser = (User,history,username) =>async dispatch =>{
  try {
      await axios.patch("/api/member/edit", User);
      history.push(`/profile/${username}`);
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
};
// export const login = LoginRequest => async dispatch => {
//     try {
//       // post => Login Request
//       const res = await axios.post("/api/member/login", LoginRequest);
//       // extract token from res.data
//       const { token } = res.data;
//       // store the token in the localStorage
//       localStorage.setItem("jwtToken", token);
//       // set our token in header ***
//       setJWTToken(token);
//       // decode token on React
//       const decoded = jwt_decode(token);
//       // dispatch to our securityReducer
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: decoded
//       });
//     } catch (err) {
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     }
//   };