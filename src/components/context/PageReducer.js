import PageType from './setstate/Createmod'

const PageReducer = (state,action) => {
   switch (action.type) {
       case PageType.CREATE_MOD:
       return{
           ...state,
           page:{
               num: action.payload
           }
       }
       default:
           return state;
   }
}

export default PageReducer