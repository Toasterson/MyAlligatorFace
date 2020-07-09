import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MyAlligatorFaceContext = React.createContext('0')

class HomeScreen extends React.Component {
  static contextType = MyAlligatorFaceContext;
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>We have {this.context.currentFriends.length} friends!</Text>
        <Button
            title="Add some friends"
            onPress={() => this.props.navigation.navigate('Friends')}
          />
      </View>
    );
  }
}

class FriendsScreen extends React.Component {
  static contextType = MyAlligatorFaceContext;
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add friends here!</Text>
        
        {this.context.possibleFriends.map((friend, index) => (
           <Button
            key={friend}
            title={"Add "+friend}
            onPress={() =>
              this.context.addFn(index)
            }
            />
          )
        )}
        
        <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
      </View>
    );
  }
}

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <MyAlligatorFaceContext.Provider value={{currentFriends: this.state.currentFriends, possibleFriends: this.state.possibleFriends, addFn: (index) => this.addFriend(index)}}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Friends" component={FriendsScreen} />
          </Stack.Navigator>
        </MyAlligatorFaceContext.Provider>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}

export default App;