import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  AppRegistry,
  Div
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class Exchange extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<ImageBackground source={require('./../../images/header.png')} style={styles.head}>
    				
    			</ImageBackground>
    			
    			<View style={styles.listinput}>
    				<View style={styles.exchange}></View>
    			</View>
				<View style={styles.btn}></View>
				
	    	</View>
	    );
	}
}

//AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    alignItems: 'center',
	    backgroundColor: '#fffeec',
  	},
	head: {
		width: width,
	  	height: 130*width/640,
	},
	listinput: {
		width: width-2*72*width/640,
		height: 170*width/640,
		backgroundColor: '#8ffafe',
		borderRadius: 20*width/640,
		marginTop: 60*width/640,
	},
	exchange: {
		width: 382*width/640,
		height: 68*width/640,
		backgroundColor: '#ffffff',
		borderRadius: 5*width/640,
		borderWidth: 1,
		borderColor: '#fecbcf',
		marginTop: 50*width/640,
		marginLeft: 56*width/640,
	},
	btn: {
		width: width-2*72*width/640,
		height: 64*width/640,
		backgroundColor: '#fecbcf',
		borderRadius: 6*width/640,
		marginTop: 18*width/640,
	},
});