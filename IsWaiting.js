import React, { Component } from 'react';
import {
    Animated,
    View
} from 'react-native';

export default class isTyping extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.footerAnimation();
  }

  footerAnimation() {
    this.animate1();
    this.animate2();
    this.animate3();
  }

  animate1() {
     const self = this;
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 1000
        }
      ).start(() => {
        self.animatedValue.setValue(0);
      });
  }

  animate2() {
    const self = this;
     Animated.timing(
       this.animatedValue2,
       {
         toValue: 1,
         duration: 1000,
         delay: 200
       }
     ).start(() => {
       self.animatedValue2.setValue(0);
     });
  }

  animate3() {
    const self = this;
     Animated.timing(
       this.animatedValue3,
       {
         toValue: 1,
         duration: 1000,
         delay: 400
       }
     ).start(() => {
       self.animatedValue3.setValue(0);
       self.footerAnimation();
     });
  }

  render() {
    const animatedStyle =
    {
      transform: [{
        translateY: this.animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -20, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
    };
    const animatedStyle2 =
    {
      transform: [{
        translateY: this.animatedValue2.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -20, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
    };
    const animatedStyle3 =
    {
      transform: [{
        translateY: this.animatedValue3.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -20, 0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
    };
    return (
        <View
          style={{
            flexDirection: 'row',
            height: 20,
            alignItems: 'flex-end',
            marginTop: 27,
          }}
        >
          <Animated.View
            style={[{
              backgroundColor: '#fff',
              width: 18,
              height: 18,
              borderRadius: 18 / 2,
              marginLeft: 16
            }, animatedStyle]}
          />
          <Animated.View
            style={[{
              backgroundColor: '#fff',
              opacity: 0.6,
              width: 18,
              height: 18,
              borderRadius: 18 / 2,
              marginLeft: 12
            }, animatedStyle2]}
          />
          <Animated.View
            style={[{
              backgroundColor: '#fff',
              opacity: 0.3,
              width: 18,
              height: 18,
              borderRadius: 18 / 2,
              marginLeft: 12
            }, animatedStyle3]}
          />
        </View>
    );
  }

}
