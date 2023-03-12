import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ItemCard from '../components/ItemCard';
import PricingCard from '../components/PricingCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ItemCard image="apple" name="Apple" />
      <ItemCard image="orange" name="Orange" />
      <ItemCard image="strawberry" name="Strawberry" />
      <PricingCard />
      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  continueBtn: {
    backgroundColor: 'red',
    width: '80%',
    padding: 12,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  continueBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
