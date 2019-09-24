/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: Math.round(Dimensions.get('window').width),
      height: Math.round(Dimensions.get('window').height) * 0.425
    };
  }

  render() {
    const { width, height } = this.state;
    const screenWidth =  Math.round(Dimensions.get('window').width), screenHeight =  Math.round(Dimensions.get('window').height);
    return (
      <View style={styles.container}>
      <VideoPlayer
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={data => console.log(data)} // Callback when remote video is buffering
        onError={e => console.warn(e)} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        // controls
        filter={'CIPhotoEffectChrome'}
        filterEnabled={true}
        minLoadRetryCount={5}
        muted={false}
        paused={false}
        pictureInPicture={true}
        poster={
          'https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'
        }
        resizeMode={"contain"}
        volume={1}
        posterResizeMode={"contain"}
        fullscreen
        // fullscreenOrientation={"landscape"}
        // onEnterFullscreen={() => this.setState({
        //   height: screenHeight
        // })}
        // onExitFullscreen={() => this.setState({
        //   height: screenHeight * 0.45
        // })}
        toggleResizeModeOnFullscreen
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
   flex: 1
  },
});

export default App;
