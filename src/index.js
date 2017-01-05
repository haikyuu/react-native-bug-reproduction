import React, {Component} from 'react';
import { View, Image, Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const logoWidth = width - (width * 0.2);
const logoHeight = logoWidth * 0.4516;

const SLogoImage = styled(Image)`
  width: ${logoWidth};
  height: ${logoHeight};
`;

// const Logo = ({ ...rest }) => {
//   console.log("rest: ", rest)
//   return(
//   <Image
//     source={require('./geofence.gif')}
//     // {...rest}
//   />
// )};
class Logo extends React.Component {
  render () {
    console.log("this.props: ", this.props)
    return (
      <SLogoImage
        source={require('./geofence.gif')}
        {...this.props}
      />
    )
  }
}
const ALogo = Animated.createAnimatedComponent(Logo);

class HomeScene extends Component {
  constructor(props){
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 1 }
    ).start()
  }

  render() {
    return (
      <View>
        <ALogo style={{ opacity: this.state.fadeAnim }} />
      </View>
  )

  }
}

export default HomeScene;
