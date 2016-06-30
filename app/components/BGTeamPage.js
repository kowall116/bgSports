import React, { Component } from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'

import { listViewStyles } from '../styles/listView'
import { teaseStyles } from '../styles/tease'


export default class BGTeamPage extends Component {
	render() {
		const {
			isFetching,
			hasFetched,
			dataSource
		} = this.props

		if(isFetching) {
			return this.renderLoadingView()
		}

		return (
			<ListView
				dataSource={dataSource}
				renderRow={this.renderTease}
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
		const label = tease.type && tease.type === 'ad' ? 'AD': tease.headlines.headline
		return(
			<View style={teaseStyles.container}>
				<Text style={teaseStyles.title}>{label}</Text>
			</View>
		)
	}
}