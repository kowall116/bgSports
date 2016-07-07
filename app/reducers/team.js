import { SET_TEAM } from '../actions/team'

export default function team(state = 'redsox', action) {
	switch(action.type) {
		case SET_TEAM:
			return action.team
		default:
			return state
	}
}