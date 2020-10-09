import { useState } from 'react'

const useStateObject = (initState?: object) => {
	const [state, setState] = useState(initState || {})
	return [state as typeof initState, (newValue: object) => {
		setState({ ...state, ...newValue })
	}, (override: object) => {
		setState(override)
	}] as const
}



const useStateArray = (initState: any[] = []) => {
	const [state, setState] = useState(initState)
	return [state, (newValue: any, indexOrPush: number | boolean) => {
		let newState = state.slice()
		if (typeof indexOrPush === 'boolean' && indexOrPush) {
			newState.push(newValue)
		} else if (typeof indexOrPush === 'number') {
			newState[indexOrPush] = newValue
		}
		setState(newState)
	}, (override: any[]) => {
		setState(override)
	}] as const
}

export { useStateObject, useStateArray }