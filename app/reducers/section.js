import {
	SECTION_REQUEST,
	SECTION_SUCCESS,
	SECTION_FAILURE
} from '../actions/api'

const initialSectionState = {
  isFetching: false,
  hasFetched: false
}

export default function section(state = initialSectionState, action) {
	switch(action.type) {
		case SECTION_REQUEST:
			return Object.assign({}, state, { isFetching: true })
		case SECTION_SUCCESS:
			return Object.assign({}, state, { isFetching: false, hasFetched: true })
		default:
			return state
	}
}