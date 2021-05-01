import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../carItem';
import styles from './styles';
import cars from './cars';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}

export default CarsList;