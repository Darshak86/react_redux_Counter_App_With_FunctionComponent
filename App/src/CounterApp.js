import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from '../redux/actions/actions';

const CounterApp = (props) => {
  const value = useSelector(state => state.counterReducer.counter);
  
  const dispatch = useDispatch();

  return <View style={styles.container}>
      <View style={{ flexDirection: "row", width: 200, justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => dispatch(decrease())}>
          <Text style={{ fontSize: 20 }}>Minus</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>
          {value}
        </Text>
        <TouchableOpacity onPress={() => dispatch(increase())}>
          <Text style={{ fontSize: 20 }}>Plus</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

export default CounterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
