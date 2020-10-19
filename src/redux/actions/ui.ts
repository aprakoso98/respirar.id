const actionUi = () => {
	return {
		type: 'GET_UI',
		payload: new Promise(resolve => {
			resolve({})
		})
	}
}

export default actionUi