import axios from "axios";

import{ FOOD_FAILURE, FOOD_REQUEST, FOOD_SUCCESSFULL, POST_FOOD_SUCCESSFULL } from "./actionTypes"
import { user } from "./Reducer";

export const getFood = (dispatch:any)=>{
   
  dispatch({ type: FOOD_REQUEST });
  axios({
    method: 'get',
    url: `http://localhost:8080/food`
  })
    .then((res) => {
      dispatch({ type: FOOD_SUCCESSFULL, payload:res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FOOD_FAILURE,
      })
    });
}

export const addFood = (data:user,token:string,dispatch:any)=>{
  const headers = {
    Authorization:`Bearer ${token}`
  };
  dispatch({ type: FOOD_REQUEST });
  axios({
    method: 'post',
    url: `http://localhost:8080/dashboard/add`,
    data,
    headers:headers,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: POST_FOOD_SUCCESSFULL })
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FOOD_FAILURE,
      })
    });
}



 