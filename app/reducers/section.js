import { ListView } from 'react-native'
import { json } from '../data/fakeSectionData'

import {
	SECTION_REQUEST,
	SECTION_SUCCESS,
	SECTION_FAILURE
} from '../actions/api'

const initialSectionState = {
	dataSource: new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  }),
  isFetching: false,
  hasFetched: false
}

console.log(json)

export default function section(state = initialSectionState, action) {
	switch(action.type) {
		case SECTION_REQUEST:
			return Object.assign({}, state, { 
				isFetching: true
			})
		case SECTION_SUCCESS:
			return Object.assign({}, state, { 
				isFetching: false, 
				hasFetched: true 
			})
		case SECTION_FAILURE:
			return Object.assign({}, state, { 
				isFetching: false, 
				hasFetched: true, 
				dataSource: state.dataSource.cloneWithRows(json['content'])
			})
		default:
			return state
	}
}