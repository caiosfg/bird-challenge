import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.primary,
    },
    icon: {
        height: 24,
        width: 24
    }
})