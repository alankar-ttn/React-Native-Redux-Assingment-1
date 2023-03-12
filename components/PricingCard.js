import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PricingCard = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const data = useSelector(
    state => state.cart,
  );

  useEffect(() => {
    let price = 0;
    data.forEach(item => price += (item.price * item.qty))
    setSubTotal(price)
    setTotal(price + 18)
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery Charges</Text>
        <Text style={styles.text}>$18.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Sub Total</Text>
        <Text style={styles.text}>${subTotal}.00</Text>
      </View>
      <View style={[styles.row, styles.total]}>
        <Text style={[styles.text, styles.totalText]}>Total</Text>
        <Text style={[styles.text, styles.totalText]}>${total}.00</Text>
      </View>
    </View>
  );
};

export default PricingCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ddd',
    width: '90%',
    padding: 12,
    borderRadius: 12,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  total: {
    borderTopColor: '#aaa',
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 12,
  },
  totalText: {
    fontWeight: 'bold',
    color: '#444',
  },
});
