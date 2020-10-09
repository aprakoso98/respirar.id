import { useLayoutEffect, useState } from "react"

const useWindowSize = () => {
	const [size, setSize] = useState([0, 0, false])
	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight, window.innerWidth < 720])
		}
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])
	return size
}

export default useWindowSize