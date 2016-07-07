import React, { Component } from 'react'
import {
	ScrollView,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { routes } from '../constants/routes'

import { articleStyles } from '../styles/article'


class BGArticlePage extends Component {
	render() {
		const { 
			fetched,
			articleData
		} = this.props.article

		if(!fetched) {
			return (
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>
	          Loading...
	        </Text>
				</View>
			)
		}

		const content = articleData.content.map((paragraph, index) => {

			if(paragraph.type !== 'p') {
				return null
			}

			const text = paragraph.content.replace(/(<([^>]+)>)/ig,"")

			return (
				<Text key={index} style={{padding: 10, flexDirection: 'row'}}>{text}</Text>
			)
		})

		return (
			<ScrollView style={{flex: 1, flexDirection: 'column'}}>
				<View style={articleStyles.imageWrapper}>
					<Image
						style={articleStyles.image}
						source={{uri: 'https:' + articleData.lead.href}}
					/>
				</View>
				<View style={{flexDirection: 'column'}}>
					{content}
				</View>
			</ScrollView>
		)
	}
}

function mapStateToProps(state) {
	return {
		article: state.article
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BGArticlePage)