import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    }
});