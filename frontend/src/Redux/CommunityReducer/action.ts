import axios from "axios";

import{ COMMUNITY_FAILURE, COMMUNITY_REQUEST, COMMUNITY_SUCCESSFULL,ADD_TO_COMMUNITY_SUCCESSFUL,GET_SINGLE_COMMUNITY_PRODUCT } from "./actionTypes"
import { user } from "./Reducer";

export const getCommunity = (dispatch:any)=>{
   
  dispatch({ type: COMMUNITY_REQUEST });
  axios({
    method: 'get',
    url: `http://localhost:8080/social`
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: COMMUNITY_SUCCESSFULL, payload:res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: COMMUNITY_FAILURE,
      })
    });
}

export const addToCommunity = (data:any,dispatch:any)=>{

  dispatch({ type: COMMUNITY_REQUEST });
  axios({
    method: 'post',
    url: `http://localhost:8080/social/add`,
    data,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: ADD_TO_COMMUNITY_SUCCESSFUL,payload :data })
      localStorage.setItem("userdetails",JSON.stringify(data))
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: COMMUNITY_FAILURE,
      })
    });
}

export const getCompareData = (userID:any,dispatch:any)=>{
  dispatch({ type: COMMUNITY_REQUEST });
  axios({
    method: 'get',
    url: `http://localhost:8080/social/single/${userID}`,
  })
    .then((res) => {
      console.log(res);
      dispatch({type:GET_SINGLE_COMMUNITY_PRODUCT,payload:res.data[0]})
      localStorage.setItem("comparedetais",JSON.stringify(res.data[0]))
    })
    .catch((err) => {
      dispatch({ type: COMMUNITY_FAILURE });
      console.log(err);
    });
}



 