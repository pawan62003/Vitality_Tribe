import axios from "axios";

import{ EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESSFULL, POST_EXERCISE_SUCCESSFULL } from "./actionTypes"
import { user } from "./Reducer";

export const getExercise = (dispatch:any)=>{
   
  dispatch({ type: EXERCISE_REQUEST });
  axios({
    method: 'get',
    url: `http://localhost:8080/exercise`
  })
    .then((res) => {
      dispatch({ type: EXERCISE_SUCCESSFULL, payload:res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EXERCISE_FAILURE,
      })
    });
}

export const addExercise = (data:user,dispatch:any)=>{
  dispatch({ type: EXERCISE_REQUEST });
  axios({
    method: 'post',
    url: `http://localhost:8080/dashboard/add`,
    data,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: POST_EXERCISE_SUCCESSFULL })
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EXERCISE_FAILURE,
      })
    });
}


 