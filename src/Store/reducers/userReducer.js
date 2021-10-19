const initialState = {
state:[],
name: '',
me:'',
isLoggedIn: false,
};


const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN_INFO":
            return {
                ...state,
                name: `${action.payload.data.firstName} ${action.payload.data.lastName}`
              }
             case "ME":
                 return{
                     ...state,
                     me: action.payload.data
                 } 
           
                 case 'setIsLoggedIn': 
                 return {
                     ...state,
                     isLoggedIn: action.payload
                 } 
       
            default:
                return state;
    }
}
export default userReducer;