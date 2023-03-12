import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, delItem} from '../redux/actions';

const ItemCard = props => {
  const {name, image} = props;
  const counter = useSelector(
    state => state.cart.filter(item => item.name === image)[0].qty,
  );
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addItem({name: image}));
  };

  const del = () => {
    dispatch(delItem({name: image}));
  };

  const ItemImage = () => {
    if (image === 'apple') {
      return (
        <Image
          source={require('../assets/img/apple.png')}
          style={styles.image}
        />
      );
    } else if (image === 'orange') {
      return (
        <Image
          source={require('../assets/img/orange.png')}
          style={styles.image}
        />
      );
    } else if (image === 'strawberry') {
      return (
        <Image
          source={require('../assets/img/strawberry.png')}
          style={styles.image}
        />
      );
    }
  };

  return (
    counter > 0 && (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ItemImage />
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.cardHeading}>{name}</Text>
              <Text>$2.50/Kg</Text>
            </View>
            <View>
              <Text>Tuesday, 12 Jan</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.textContainer, {marginLeft: -40}]}>
            <View style={styles.qtnContainer}>
              <TouchableOpacity style={styles.qtnIconContainer} onPress={add}>
                <Icon name="add-circle-outline" color="#999" size={36} />
              </TouchableOpacity>
              <Text style={styles.qtnText}>{counter}</Text>
              <TouchableOpacity style={styles.qtnIconContainer} onPress={del}>
                <Icon name="remove-circle-outline" color="#999" size={36} />
              </TouchableOpacity>
            </View>
            <View style={styles.deleteIcon}>
              <Icon name="trash-outline" color="#f00" size={20} />
            </View>
          </View>
        </View>
      </View>
    )
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    height: 136,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  image: {
    height: '100%',
    width: '40%',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 8,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  qtnText: {
    fontSize: 20,
    paddingHorizontal: 12,
  },
  qtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtnIconContainer: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteIcon: {
    alignSelf: 'flex-end',
  },
});
