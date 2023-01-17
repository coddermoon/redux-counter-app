import { DECREMENT, INCREMENT, RESET } from "../Constants/counterConstant"

export const IncrementCounter = ()=>{
    return {
        type :INCREMENT,
    }
}

const decrementCounter = ()=>{
    return {
        type :DECREMENT,
    }
}
const resetCounter = ()=>{
    return {
        type :RESET,
    }
}