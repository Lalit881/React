
const num = 0;

export const reducerFun =(state=num,action)=>{

    switch(action.type)
    {
        case "inc":
            return state+1;//0+1
            case "dec":
            return state-1;//0-1
            default:
            return state;//0
    }

}