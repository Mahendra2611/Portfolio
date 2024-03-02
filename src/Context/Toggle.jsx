import { createContext, useReducer } from "react";
const initialState = {dark:true}
const toggleTheme = createContext(initialState)

// const toggleProvider = ({children})=>{
//     const [action,dispatch] = useReducer(togglefunc,initialState);
//     const toggle = ()=>{
//         dispatch(
//             {
//                 type:"TOGGLE",
//                 id:false,
//             }
//         )
//     }
//     return (
//         <toggleTheme.Provider value={}>{children}</toggleTheme.Provider>
//     )

// }