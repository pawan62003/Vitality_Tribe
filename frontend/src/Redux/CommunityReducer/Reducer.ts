
import{ COMMUNITY_FAILURE, COMMUNITY_REQUEST, COMMUNITY_SUCCESSFULL } from "./actionTypes"
interface MyObject {
    isError: boolean;
    isloading: boolean;
    data: any[]; 
  }
const init:MyObject = {
    isError:false,
    isloading:false,
    data:[]
}

export interface user{
    userID:string,
      user:string,
   name : string,
   Energy : number,
   time : number,
   Fat : number,
   Netcarbs : number,
   Protien : number,
   caloriesburnt : number,
   caloriesremaining : number,
   caloriesconsumed : number,
}
export interface type{
   type : string,
   payload ?: Array<user>
}

export const Reducer = (state=init,{type,payload}:type) => {
    switch(type){
        case COMMUNITY_REQUEST:
            return { ...state, isloading: true,isError:false};
            case COMMUNITY_FAILURE:
            return { ...state, isloading: false,isError:true };
        case COMMUNITY_SUCCESSFULL:
            return { ...state, isloading: false, data: payload };
        
         default: return state
   }
  
}


