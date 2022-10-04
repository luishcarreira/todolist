import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24
    },

    logo: {
        width: 110.34,
        height: 32,
        marginTop: 70
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 36,
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },

    button: {
        width: 56, 
        height: 56,
        borderRadius: 5,
        backgroundColor: THEME.COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },

    count: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    labelCreated: {
        color: THEME.COLORS.PRIMARY,
        fontSize: THEME.FONT_SIZE.SM,
        fontWeight: 'bold',
    },

    labelConclued: {
        color: THEME.COLORS.SECUNDARY,
        fontSize: THEME.FONT_SIZE.SM,
        fontWeight: 'bold',
    }, 

    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 48
    }
});