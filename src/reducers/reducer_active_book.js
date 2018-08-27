//State parameter is not application state, only the state
//this reducer is repsonsible for
export default function(state = null, action) {
    //return new state
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    //return current state
    return state;
}