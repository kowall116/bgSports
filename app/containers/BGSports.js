import React, {
  Component,
  View,
  Text
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BGTeamPage from '../components/BGTeamPage'

class BGSports extends Component {
	render() {
		<BGTeamPage />
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BGSports)