import { DECREMENT, INCREMENT, RESET } from "../Constants/counterConstant"

export const IncrementCounter = ()=>{
    return {
        type :INCREMENT,
    }
}

export const decrementCounter = ()=>{
    return {
        type :DECREMENT,
    }
}
export const resetCounter = ()=>{
    return {
        type :RESET,
    }
}