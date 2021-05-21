/** @format */

import React, { useState, createContext, useReducer } from "react";
import PageReducer from "./PageReducer";
import ModInitialState from "./initialstate/Modselect";
import PageType from "./setstate/Createmod";

export const DataContext = createContext({
  ...ModInitialState,
});

export const DataProvider = (props) => {
  const [PageState, Pagedispatch] = useReducer(PageReducer, ModInitialState);

  const CreatePageState = (no) => {
    Pagedispatch({
      type: PageType.CREATE_MOD,
      payload: no,
    });
  };

  const SetInstanceType = (types) => {
    Pagedispatch({
      type: PageType.SET_INSTANCE_TYPE,
      payload: types,
    });
  };

  const SetInstanceDetails = (data) => {
    Pagedispatch({
      type: PageType.SET_INSTANCE_DETAILS,
      payload: data,
    });
  };

  const SetEksPath = (path) => {
    console.log(path);
    Pagedispatch({
      type: PageType.SET_EKS_BREADCRUMP_TYPE,
      payload: path,
    });
  };

  const SetFormsPage = (page) => {
    Pagedispatch({
      type: PageType.SET_FORMS_PAGE_NO,
      payload: page,
    });
  };

  return (
    <DataContext.Provider
      value={{
        PageState,
        CreatePageState,
        SetInstanceType,
        SetEksPath,
        SetFormsPage,
        SetInstanceDetails,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
