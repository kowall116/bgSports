import { StyleSheet } from 'react-native'

export const teaseStyles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#CCCCCC'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});