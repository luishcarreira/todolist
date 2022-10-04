import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 2,
  },

  nameDecoration: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    textDecorationLine: 'line-through',
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 24
  }
});