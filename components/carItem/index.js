import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import StyledButton from '../styledButton';
import styles from './styles';

const CarItem = (props) => {

    const { name, tagLine, image, tagLineCTA } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.title}>
                <Text style={styles.nameCar}>{name}</Text>
                <Text style={styles.subtitles}>{tagLine} {' '}
                    <Text style={styles.subtitlesCTA}>{tagLineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom order was pressed")
                    }}
                />
                <StyledButton
                    type="secondary"
                    content={"Existing inventory"}
                    onPress={() => {
                        console.warn("Existing inventory was pressed")
                    }}
                />
            </View>

        </View>
    );
}

export default CarItem;