import { useCallback, useRef, useState } from "react";

const useLongPress = (
	onLongPress: () => void,
	onClick?: () => void,
	{ shouldPreventDefault = true, delay = 250 } = {}
) => {
	const [longPressTriggered, setLongPressTriggered] = useState(false);
	const timeout = useRef();
	const target = useRef();

	const start = useCallback(
		event => {
			if (shouldPreventDefault && event.target) {
				event.target.addEventListener("touchend", preventDefault, {
					passive: false
				});
				target.current = event.target;
			}
			// @ts-ignore
			timeout.current = setTimeout(() => {
				// @ts-ignore
				onLongPress(event);
				setLongPressTriggered(true);
			}, delay);
		},
		[onLongPress, delay, shouldPreventDefault]
	);

	const clear = useCallback(
		(event, shouldTriggerClick = true) => {
			timeout.current && clearTimeout(timeout.current);
			// @ts-ignore
			shouldTriggerClick && !longPressTriggered && onClick(event);
			setLongPressTriggered(false);
			if (shouldPreventDefault && target.current) {
				// @ts-ignore
				target.current.removeEventListener("touchend", preventDefault);
			}
		},
		[shouldPreventDefault, onClick, longPressTriggered]
	);

	return {
		// @ts-ignore
		onMouseDown: e => start(e),
		// @ts-ignore
		onTouchStart: e => start(e),
		// @ts-ignore
		onMouseUp: e => clear(e),
		// @ts-ignore
		onMouseLeave: e => clear(e, false),
		// @ts-ignore
		onTouchEnd: e => clear(e)
	};
};

// @ts-ignore
const isTouchEvent = event => {
	return "touches" in event;
};

// @ts-ignore
const preventDefault = event => {
	if (!isTouchEvent(event)) return;

	if (event.touches.length < 2 && event.preventDefault) {
		event.preventDefault();
	}
};

export default useLongPress;