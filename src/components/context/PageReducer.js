/** @format */

import PageType from "./setstate/Createmod";

const PageReducer = (state, action) => {
  switch (action.type) {
    case PageType.CREATE_MOD:
      return {
        ...state,
        page: {
          num: action.payload,
        },
      };

    case PageType.SET_INSTANCE_TYPE:
      return {
        ...state,
        Eks: {
          type: action.payload,
        },
      };

    case PageType.SET_INSTANCE_DETAILS:
      return {
        ...state,
        EksDetails: action.payload,
      };

    case PageType.SET_EKS_BREADCRUMP_TYPE:
      return {
        ...state,
        EksBreadCrumpPath: [...state.EksBreadCrumpPath, action.payload],
      };

    case PageType.SET_FORMS_PAGE_NO:
      return {
        ...state,
        EksFileState: {
          forms: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PageReducer;
