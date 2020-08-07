import React from 'react';
import { View, ImageBackground, Text} from 'react-native';

import GiveClassesBgImages from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses(){
    return (
    <View style={styles.container}>
        <ImageBackground resizeMode='contain' style={styles.content} source={GiveClassesBgImages}>
            <Text style={styles.title}>Quer ser um proffy?</Text>
        </ImageBackground>
    </View>
    );
}

export default GiveClasses;