import * as constant from "../../constant"

const initState = {
    email: '',
    username: '',
    password: '',
    error:''
}

const userReducer = (state = initState, action) =>{
    switch (action.type) {
        case constant.USER_REGIST_FIELD:
            return state
    
        default:
           return state
    }
}

export default userReducer