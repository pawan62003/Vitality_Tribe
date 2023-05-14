import axios from "axios";

import{ COMMUNITY_FAILURE, COMMUNITY_REQUEST, COMMUNITY_SUCCESSFULL } from "./actionTypes"
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




 