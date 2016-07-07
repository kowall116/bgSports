import {
	ARTICLE_REQUEST,
	ARTICLE_SUCCESS,
	ARTICLE_FAILURE
} from '../actions/api'

const initialArticleState = {
	articleData: {},
	fetched: false
}

export default function article(state = initialArticleState, action) {
	switch(action.type) {
		case ARTICLE_REQUEST:
			return Object.assign({}, state, {
				fetched: false
			})
		case ARTICLE_SUCCESS:
			console.log(action)
			return Object.assign({}, state, {
				articleData: action.payload,
				fetched: true
			})
		default:
			return state
	}
}