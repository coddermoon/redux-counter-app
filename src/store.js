import { createStore } from "redux";
import counterReducer from "./services/Reducer/counterReducer";

const store = createStore(counterReducer)

export default store