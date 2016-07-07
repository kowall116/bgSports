import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchArticleData } from '../actions/api'

import { routes } from '../constants/routes'

import { listViewStyles } from '../styles/listView'
import { teaseStyles } from '../styles/tease'


class BGTeamPage extends Component {
	render() {
		const { team } = this.props
		const {
			isFetching,
			hasFetched,
			data,
			dataSource
		} = this.props.section

		if(isFetching) {
			return this.renderLoadingView()
		}

		return (
			<ListView
				dataSource={dataSource}
				renderRow={this.renderTease.bind(this)}
				style={listViewStyles.container}
			/>
		)
	}

	renderLoadingView() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>
          Loading...
        </Text>
			</View>
		)
	}

	renderTease(tease) {

		if(tease.type === 'ad') {
			return (
				<View style={teaseStyles.container}>
					<Text style={teaseStyles.title}>AD</Text>
				</View>
			)
		}

		return(
			<TouchableOpacity style={teaseStyles.container} onPress={this.onPress.bind(this, tease)}>
				{(tease.lead.thumbnail 
					? (
						<Image
							style={teaseStyles.thumbnail}
							source={{uri: 'https:' + tease.lead.thumbnail}}
						/>
					) : null
				)}
				<View style={teaseStyles.rightContainer}>
					{(tease.headlines.overline
						? (
							<Text style={teaseStyles.overline}>{tease.headlines.overline.toUpperCase()}</Text>
						) : null
					)}
					<Text style={teaseStyles.title}>{tease.headlines.headline}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	onPress(tease) {
		let endpoint = tease.href.replace('.html', '.json')
		endpoint = endpoint.replace('http', 'https')
		this.props.fetchArticleData(endpoint)
		this.props.navigator.push(routes[1])
	}
}

function mapStateToProps(state) {
	return {
		team: state.team,
		section: state.section
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchArticleData
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BGTeamPage)