const logout = () => {
	localStorage.removeItem('token');
	dispatch({type:'logout'})
}

export default logout;