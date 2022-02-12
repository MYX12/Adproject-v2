import axios from "axios";
import {GET_MEMBER} from "./types";

// export const createProject = (project, history) => async dispatch => {
//   try {
//     await axios.post("/api/project", project);
//     history.push("/dashboard");
//     dispatch({
//       type: GET_ERRORS,
//       payload: {}
//     });
//   } catch (err) {
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     });
//   }
// };

export const getMembers = id => async dispatch => {
  const res = await axios.get(`/api/member/${id}`);
  dispatch({
    type: GET_MEMBER,
    payload: res.data
  });
};

// export const getProject = (id, history) => async dispatch => {
//   const res = await axios.get(`api/project/${id}`);
//   dispatch({
//     type: GET_PROJECT,
//     payload: res.data
//   });
// };

// export const deleteProject = id => async dispatch => {
//   if (
//     window.confirm(
//       "Are you sure? This will delete the project and all the data related to it"
//     )
//   ) {
//     await axios.delete(`/api/project/${id}`);
//     dispatch({
//       type: DELETE_PROJECT,
//       payload: id
//     });
//   }
// };