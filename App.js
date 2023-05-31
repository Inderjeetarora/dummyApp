import React from 'react';
import {View} from 'react-native';
import OpenCVCamera from "./src/native/OpenCVCamera";
const App = () => {
return (
<View style={{flex: 1}}>
<OpenCVCamera />
</View>
);
};
export default App;