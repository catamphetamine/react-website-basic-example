export const set = (value) => ({ type: 'SET', value })

export default (state = { value: 0 }, action) => {
	switch (action.type) {
		case 'SET':
			return {
				...state,
				value: action.value
			}
		default:
			return state
	}
}