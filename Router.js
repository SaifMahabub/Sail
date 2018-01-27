import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Recipient from './Recipient';
import Sender from './Sender';
import Home from './Home';


const RouterComponent = () => {
    return (
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} title="Select Role" />
            <Scene key="receive" component={Recipient} title="You have received..." />
            <Scene key="send" component={Sender} title="Send a message..." />
          </Scene>
        </Router>
    );
};

export default RouterComponent;
