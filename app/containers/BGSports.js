import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchSectionData } from '../actions/api'

import BGTeamPage from '../components/BGTeamPage'

class BGSports extends Component {

	componentDidMount() {
		this.props.fetchSectionData()
	}

	render() {
		return (
			<BGTeamPage {...this.props.section} />
		)		
	}
}

function mapStateToProps(state) {
	return {
		section: state.section
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchSectionData
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BGSports)