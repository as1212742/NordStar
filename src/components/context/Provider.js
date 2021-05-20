import React ,{useState, createContext, useReducer} from 'react';
import PageReducer from './PageReducer'
import ModInitialState from './initialstate/Modselect'
import PageType from './setstate/Createmod'

export const DataContext = createContext({
    ...ModInitialState
});

export const DataProvider  = (props) => {
    
    const [PageState, Pagedispatch] = useReducer(PageReducer,ModInitialState)

    const CreatePageState = no =>{
        Pagedispatch({
            type:PageType.CREATE_MOD,
            payload: no
        })
    }
    return (
       <DataContext.Provider value={{
          PageState,
          CreatePageState
       }}>
           {props.children}
       </DataContext.Provider>
    ) 
}