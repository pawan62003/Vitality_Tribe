import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {Reducer as SignupReducer} from "./RegisterReducer/Reducer"
import {Reducer as ExerciseReducer} from "./ExerciseReducer/Reducer"
import {Reducer as FoodReducer} from "./FoodReducer/Reducer"
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

const RootReducer = combineReducers({
  SignupReducer,
  ExerciseReducer,
  FoodReducer
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof RootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>