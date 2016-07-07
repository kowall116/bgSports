import { StyleSheet } from 'react-native'

export const teaseStyles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    position: 'relative'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  overline: {
  	fontSize: 20,
  	textAlign: 'left',
  	color: '#979797'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 130,
    height: 73,
    marginRight: 10,

  }
});