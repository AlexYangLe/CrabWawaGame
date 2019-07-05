import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  AppRegistry,
  TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class Address extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<ImageBackground source={require('./../../images/header.png')} style={styles.head}>
    				
    			</ImageBackground>
    			
    			<View style={[ styles.listinputstyle, styles.listinput]}>
    				<Text style={styles.listinputl}>hello</Text>
    				<TextInput style={styles.listinputr} underlineColorAndroid='transparent'>987654321</TextInput>
    			</View>
    			<View style={[styles.listinput, styles.listinputstyle]}>
    				<Text style={styles.listinputl}>hello</Text>
    				<TextInput style={styles.listinputr} underlineColorAndroid='transparent'>987654321</TextInput>
    			</View>
    			<View style={[styles.listinput, styles.listinputstyle]}>
    				<Text style={styles.listinputl}>hello</Text>
    				<TextInput style={styles.listinputr} underlineColorAndroid='transparent'>当时发生的符合技术的股份合计</TextInput>
    			</View>
    			<View style={[styles.listinput, styles.listinputstyle]}>
    				<Text style={styles.listinputl}>hello</Text>
    				<TextInput style={styles.listinputr} underlineColorAndroid='transparent'>fdshfdshfkjhs</TextInput>
    			</View>
    			<View style={[ styles.listinputstyle, styles.listinput1]}>
    				<View style={styles.btn}></View>
    			</View>
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
	listinputstyle: {
		width: width,
		borderWidth: 1,
		borderColor: '#e5e5e7',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		marginVertical: 10*width/640,
	},
	listinput: {
		height: 68*width/640,
		borderRadius: 20*width/640,
	},
	listinput1: {
		height: 100*width/640,
		borderRadius: 25*width/640,
	},
	listinputl: {
		color: '#000',
		flex: 2,
		lineHeight: 68*width/640,
		marginLeft: 38*width/640,
	},
	listinputr: {
		height: 68*width/640,
		color: '#a8a8a8',
		flex: 8,
	},
	btn: {
		width: width-2*32*width/640,
		backgroundColor: '#fe7ea2',
		marginHorizontal: 32*width/640,
		marginVertical: 16*width/640,
		borderRadius: 6*width/640,
	},
});