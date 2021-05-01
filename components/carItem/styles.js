import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('screen').height,
    },
    title: {
        width: '100%',
        marginTop: '30%',
        alignItems: 'center',
    },
    subtitles: {
        fontSize: 16,
        color: '#5c5e62',
        paddingLeft: 9,
    },
    nameCar: {
        fontSize: 40,
        fontWeight: '500',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    subtitlesCTA: {
        textDecorationLine: 'underline',
    }

});

export default styles;