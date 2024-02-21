import { createStore } from "redux";

const INITIAL_VAL   ={counter:0,
privacy:false}
const counterReduser=(store=INITIAL_VAL, action)=>{
    if(action.type === 'INCREMENT'){
        return {...store,counter: store.counter +1,}
    }
    else if (action.type === "DECREMENT"){
        return {...store,counter: store.counter -1}

    }
    else if (action.type === "ADDITION"){
        return {...store,counter: store.counter + Number(action.payload.num)}

    }
    else if (action.type === "SUBSTRACTION"){
        return {...store,counter: store.counter - Number(action.payload.num)}

    }
    else if (action.type === "PRIVACY"){
        return {...store,privacy:!store.privacy}

    }
    
    return store;

}
const counterStore=createStore(counterReduser)
export default counterStore;