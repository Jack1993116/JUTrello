const stared = (id,show) => dispatch => {
    if (show==false) {
        dispatch({type:'stared', stared:id})
    } else {
        dispatch({type:'nostared', stared:id})
    }

};

export default stared;