import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => (
    <View style={styles.topo}>
        <Text style={styles.txtTitle}>Calculadora 1.0</Text>
    </View>
)

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196f3',
        padding: 10,
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 25,
        color: '#FFF',
    }
})