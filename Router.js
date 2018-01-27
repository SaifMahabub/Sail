import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Recipient from './Recipient';
import Sender from './Sender';
import App from './App';


const RouterComponent = () => {
    return (
        <Router>
          <Scene key="root">
            <Scene key="home" component={App} title="Select Role" />
          </Scene>

          <Scene key="recipient">
            <Scene key="receive" component={Recipient} title="You have received..." />  
          </Scene>

          <Scene key="sender">
            <Scene key="send" component={App} title="Send a message..." />
          </Scene>







        </Router>
    );
};

export default RouterComponent;
