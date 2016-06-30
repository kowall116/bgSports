import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  Image
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
		// console.log(tease)

		if(tease.type === 'ad') {
			return (
				<View style={teaseStyles.container}>
					<Text style={teaseStyles.title}>AD</Text>
				</View>
			)
		}

		return(
			<View style={teaseStyles.container}>
			{(tease.lead.thumbnail 
				? (
					<Image
						style={teaseStyles.thumbnail}
						source={{uri: 'https:' + tease.lead.thumbnail}}
						onLoad={() => {console.log('LOADED')}}
					/>
				) : null
			)}
				<View style={teaseStyles.rightContainer}>
					<Text style={teaseStyles.title}>{tease.headlines.headline}</Text>
				</View>
			</View>
		)
	}
}