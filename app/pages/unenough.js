import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  AppRegistry,
  ListView,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


export default class Unenough extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<View style={styles.content}>
	    			<View style={{backgroundColor: '#fbebf5' , height: 77*width/640 , borderBottomWidth: 5*width/640, borderColor: '#7e0b19'}}></View>
	    			<View style={styles.text}></View>
	    			<View style={styles.btn}>
	    				<Text style={[styles.one,styles.com]}>免费获取</Text>
	    				<Text style={[styles.two,styles.com]}>去充值</Text>
	    			</View>
	    		</View>
	    		<View style={styles.close}></View>
		    </View>
	    );
	}
}
const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    alignItems: 'center',
	    backgroundColor: 'rgba(0,0,0,.65)',
  	},
  	content: {
  		width: 500*width/640,
  		height: 530*width/640,
  		backgroundColor: '#fffeec',
  		borderWidth: 7*width/640,
  		borderColor: '#fb7989',
  		borderRadius: 16*width/640,
  		overflow: 'hidden',
  		position: 'absolute',
  		top: 250*width/640,
  	},
  	btn: {
  		flexDirection: 'row',
  		position: 'absolute',
  		bottom: 6*width/640,
  	},
  	com: {
  		width: 235*width/640,
  		height: 100*width/640,
  		borderRadius: 12*width/640,
  		borderWidth: 1,
  		color: '#fff',
  		fontSize: 40*width/640,
  		lineHeight: 100*width/640,
  		textAlign: 'center',
  		marginLeft: 5*width/640,
  	},
  	one: {
  		backgroundColor: '#feb885',
  		borderColor: '#fdad72',
  	},
  	two: {
  		backgroundColor: '#fe8594',
  		borderColor: '#fd7383',
  	},
  	close: {
  		width: 70*width/640,
  		height: 70*width/640,
  		borderRadius: 35*width/640,
  		backgroundColor: '#ffdc6b',
  		overflow: 'hidden',
  		position: 'absolute',
  		top: 240*width/640,
  		right: 60*width/640,
  	}
});