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

       case PageType.SET_INSTANCE_TYPE:
       return{
           ...state,
           Eks:{
            type: action.payload
        }
       }

       default:
           return state;
   }
}

export default PageReducer