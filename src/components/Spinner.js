import React from 'react';
import LottieView from 'lottie-react-native';


const Spinner = () => {
    return (
        <LottieView source={require('../lottie/loading.json')} 
        autoPlay loop
        style={{width: '50%'}}
            />
    );
  };

  export default Spinner