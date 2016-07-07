import { CALL_API } from '../middleware/fetchApiMiddleware'

export const SECTION_REQUEST = 'SECTION_REQUEST'
export const SECTION_SUCCESS = 'SECTION_SUCCESS'
export const SECTION_FAILURE = 'SECTION_FAILURE'

export const ARTICLE_REQUEST = 'ARTICLE_REQUEST'
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS'
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE'

export function fetchSectionData(team) {
	return {
		[CALL_API]: {
			endpoint: `https://www.bostonglobe.com/sports/${team}/section.json`,
			method: 'GET',
			types: [SECTION_REQUEST, SECTION_SUCCESS, SECTION_FAILURE]
		},
		team
	}
}

export function fetchArticleData(endpoint) {
	return {
		[CALL_API]: {
			endpoint: endpoint,
			method: 'GET',
			types: [ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE]
		}
	}
}