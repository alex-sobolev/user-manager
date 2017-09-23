const selectUser = user => {
    console.log(`you selected user: ${user.first}`);

    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

const actions = {
    selectUser
}

export default actions;
