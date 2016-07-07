import React, { Component } from 'react'
import {
  View,
  Text,
  Navigator
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchSectionData } from '../actions/api'

import { routes } from '../constants/routes'

import BGTeamPage from '../components/BGTeamPage'
import BGArticlePage from '../components/BGArticlePage'

class BGSports extends Component {

	componentDidMount() {
		this.props.fetchSectionData('redsox')
	}

	render() {
		return (
			<Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          this.renderScene(route, navigator)
        }
      />
			
		)		
	}

	renderScene(route, navigator) {
		switch(route.title) {
			case 'Team Page':
				return (
					<BGTeamPage navigator={navigator} />
				)
			case 'Article Page':
				return (
					<BGArticlePage navigator={navigator}/>
				)
			default:
				return (
					<Text>Hmmm...something went wrong</Text>
				)
		}
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