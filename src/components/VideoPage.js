import { View, Text, StyleSheet } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import React from 'react'

const VideoPage = () => {

  return (
    <View>
      <Text style={styles.headerText}>Mi experiencia</Text>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'v8vXvXlvfJ0'}
      />
    </View>
  )
}

export default VideoPage


const styles = StyleSheet.create({
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
      fontWeight: 'bold',
    },
  });
