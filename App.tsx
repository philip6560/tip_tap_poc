import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {Editor} from './src/editor';

export default function App() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Editor />
    </View>
  );
}
