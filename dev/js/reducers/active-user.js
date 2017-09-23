export default function(state=null, action) {
    console.log('state from active-user-reducer', state);
    console.log('action from activer-user-reducer', action);
    switch(action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }

    return state;
}
