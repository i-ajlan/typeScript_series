import { ReactElement, createContext, useReducer, useCallback } from "react";



type childrenType = {children: ReactElement | ReactElement[]}
type stateType = number;
type actionType = {
  type: keyof typeof  actionList,
}
const initState = 0;

const actionList = {
  INCREMENT:"increment",
  DECREMENT:"decrement"
}

const reducer = (state:stateType, action:actionType):stateType => {
  switch(action.type){
    case actionList.INCREMENT:
      return state + 1;
    case actionList.DECREMENT:
      return state - 1;
    default:
      throw new Error("wrong action List type");
  }
}
export const CountProvider=({children}:childrenType):ReactElement=>{
    const[state, dispatch] = useReducer(reducer, initState);

    const decrement = useCallback((): void =>dispatch({type:actionList.DECREMENT as keyof typeof actionList}), []);

    const increment = useCallback(():void =>dispatch({type:actionList.INCREMENT as keyof typeof actionList}),[]);

    return <countContext.Provider value={{state, decrement, increment}}>
        {children}
    </countContext.Provider>

} 




type ContextType = {
    state: stateType,
    decrement:() => void,
    increment:() => void
}

const countContext = createContext<ContextType>({state:0,decrement:()=>{},increment:()=>{}});

export default countContext;