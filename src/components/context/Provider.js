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

    const SetInstanceType = types =>{
        Pagedispatch({
            type:PageType.SET_INSTANCE_TYPE,
            payload: types
        })
    }

    const SetEksPath = path =>{
        Pagedispatch({
            type:PageType.SET_EKS_BREADCRUMP_TYPE,
            payload: path
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
