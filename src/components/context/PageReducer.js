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
            text: action.payload.text,
            href: action.payload.href,
        }
       }

       case PageType.SET_EKS_BREADCRUMP_TYPE:
       return{
           ...state,
           EksBreadCrumpPath:{
            type: action.payload
         }
       }

       default:
           return state;
   }
}

export default PageReducer