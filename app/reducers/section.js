import { ListView } from 'react-native'

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
  hasFetched: false,
  sectionData: {}
}

export default function section(state = initialSectionState, action) {
	switch(action.type) {
		case SECTION_REQUEST:
			return Object.assign({}, state, { 
				isFetching: true
			})
		case SECTION_SUCCESS:
			return Object.assign({}, state, { 
				isFetching: false, 
				hasFetched: true,
				dataSource: state.dataSource.cloneWithRows(action.payload.content),
				sectionData: action.payload
			})
		case SECTION_FAILURE:
			return Object.assign({}, state, { 
				isFetching: false
			})
		default:
			return state
	}
}