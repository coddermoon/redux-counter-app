import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todoReducer from "../Reducer/todosReducer";



const todostore = createStore(todoReducer,applyMiddleware(thunk))

export default todostore;