import * as React from "react";
import {Button, Text, View} from "react-native";
import {connect} from 'react-redux';

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>We have {this.props.friends.current.length} friends!</Text>
                <Button
                    title="Add some friends"
                    onPress={() => this.props.navigation.navigate('Friends')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
};

export default connect(mapStateToProps)(HomeScreen);