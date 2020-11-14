import { useState } from 'react'

type stateType = MyObject<unknown>

export const useToggle = (init: boolean = false): [boolean, (set?: boolean) => void] => {
	const [toggle, setToggle] = useState(init)
	return [toggle, (set) => setToggle(set !== undefined ? set : !toggle)]
}

export const useStateObject = <S extends stateType>(initState: S): [S, (newValue: S) => void, (newValue: S) => void] => {
	const [state, setState] = useState(initState)
	return [
		state,
		(newValue: S) => {
			setState({ ...state, ...newValue })
		},
		(newState: S) => {
			setState(newState)
		}
	]
}

export const useStateArray = <S>(initialValue: S[] = []): [
	S[],
	(state: S | S[], indexOrPush?: boolean | number) => void,
	(override: S[]) => void
] => {
	const [state, setState] = useState(initialValue || [])
	return [state, (valueOrIndex: number | S | S[], indexOrPush?: boolean | number) => {
		let newState = state.slice()
		if (Array.isArray(valueOrIndex)) {
			newState = [...newState, ...valueOrIndex]
		} else if (typeof valueOrIndex === 'number') {
			newState.splice(valueOrIndex, 1)
		} else {
			if (typeof indexOrPush === 'number') {
				newState[indexOrPush] = valueOrIndex
			} else {
				newState.push(valueOrIndex)
			}
		}
		setState(newState)
	}, (override: S[]) => setState(override)]
}