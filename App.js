import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Signin from './src/screens/auth/Signin';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import config from "./config";

const App = () => {
  const {webClientId, iosClientId} = config;

    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: webClientId,
        offlineAccess: true,
        iosClientId: iosClientId,
      });
    }, []);

    return (
      <SafeAreaView>
        <Signin/>
      </SafeAreaView>
    )
}

export default React.memo(App)