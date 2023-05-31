import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';


import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./src/store/todo/selectors";
import { fetchTodoRequest } from "./src/store/todo/actions";





import {
  getAddData,
  getAddPending,
  getAddError
} from "./src/store/AddRecord/selectors";
import { fetchAddRequest } from "./src/store/AddRecord/actions";


import {
  get_data,
  pending_data,
  error_data
} from "./src/store/GetData/selectors";
import { fetchGetRequest } from "./src/store/GetData/actions";

import SoundPlayer from 'react-native-sound-player'

import { readFile } from "react-native-fs";
import { RNCamera, FaceDetector } from 'react-native-camera';


export default function App() {

  const dispatch = useDispatch();

  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  const get_Add_data = useSelector(getAddData);


  useEffect(() => {
    // fetchAudio()
    FetchAudioTextToSpeech()
  }, []);

  const FetchAudioTextToSpeech = () => {
    fetch(`https://roadsightapp.azurewebsites.net/api/townStatistics/text-to-speech`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "inputText": "Inder" })
    })

      .then((response) => response.blob())
      .then((blob) => {

        // console.log(blob)
        var fileURL = URL.createObjectURL(blob);
        console.log(fileURL)
        // const base64String = readFile(fileURL, "base64");

        // console.log(base64String)

        

       
      })

  }


  const fetchAudio = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "inputText": "Inder" })
    };
    let url = 'https://roadsightapp.azurewebsites.net/api/townStatistics/text-to-speech';

    return fetch(url, requestOptions)
      .then(res => {

        // const url = window.URL.createObjectURL(new Blob([res]));

        console.log(res)
        console.log("RESPONSE ", res._bodyBlob._data)

        console.log("ELSE ", res._bodyBlob._data.blobId)
        console.log("ELSE ", res._bodyBlob._data.name)
        console.log("ELSE ", res._bodyBlob._data.offset)
        console.log("ELSE ", res._bodyBlob._data.size)
        console.log("ELSE ", res._bodyBlob._data.type)




      })
  }


  const get_data = () => {

    dispatch(fetchTodoRequest());
  }




  const add_data = () => {

    let a = "inder"
    let b = "RN";
    console.log("get_Add_data : ", get_Add_data)
    dispatch(fetchAddRequest());
  }
  const get_data_new_api = () => {
    console.log("get_call")
    dispatch(fetchGetRequest())
  }

  return (

    <SafeAreaView style={styles.mainContainer}>

      <TouchableOpacity
        onPress={() => get_data()}
      >
        <Text>GET API</Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={{
          marginTop: 50
        }}
        onPress={() => add_data()}
      >
        <Text>POST API</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          marginTop: 50
        }}
        onPress={() => get_data_new_api()}
      >
        <Text>GET API NEW PATTERN</Text>
      </TouchableOpacity>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

