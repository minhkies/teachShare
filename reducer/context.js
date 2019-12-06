import React, {useReducer} from 'react';

let reducer = (state, action) =>{
    console.log("dispatched", action)
    switch (action.type){
        case "changeNav":
            return {
                ...state,
                route:action.route
            }
    }
};

const initState = {
    route:"home"
};

const RouteContext = React.createContext(initState);

function RouteProvider(props){
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <RouteContext.Provider value={{state, dispatch}}>
            {props.children}
        </RouteContext.Provider>
    )
}

export {RouteContext, RouteProvider}
