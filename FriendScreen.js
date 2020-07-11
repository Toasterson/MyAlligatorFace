import * as React from "react";
import {Button, Text, View} from "react-native";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from './FriendActions';

class FriendsScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Add friends here!</Text>

                {this.props.friends.possible.map((friend, index) => (
                        <Button
                            key={friend}
                            title={"Add " + friend}
                            onPress={() => this.props.addFriend(index)}
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

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
};
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addFriend,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);