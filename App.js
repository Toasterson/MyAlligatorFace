import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendScreen";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import friendReducer from './FriendReducer';

const Stack = createStackNavigator();

const store = createStore(friendReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    };
  }
  addFriend(index) {
    const {
      currentFriends,
      possibleFriends,
    } = this.state
    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="Friends" component={FriendsScreen} />
            </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;