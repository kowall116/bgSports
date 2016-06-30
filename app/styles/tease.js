import { StyleSheet } from 'react-native'

export const teaseStyles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#CCCCCC'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 130,
    height: 73,
    marginRight: 10
  }
});