import { useState } from 'react'

const useStateObject = <S>(initState: S) => {
	const [state, setState] = useState(initState || {})
	return [state as typeof initState, (newValue: S) => {
		setState({ ...state, ...newValue })
	}, (override: S) => {
		setState(override)
	}]
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