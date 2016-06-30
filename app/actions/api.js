import { CALL_API } from 'redux-api-middleware'

export const SECTION_REQUEST = 'SECTION_REQUEST'
export const SECTION_SUCCESS = 'SECTION_SUCCESS'
export const SECTION_FAILURE = 'SECTION_FAILURE'

export function fetchSectionData(team) {
	return {
		[CALL_API]: {
			endpoint: 'http://www.bostonglobe.com/sports/redsox/section.json',
			method: 'GET',
			types: [SECTION_REQUEST, SECTION_SUCCESS, SECTION_FAILURE]
		}
	}
}