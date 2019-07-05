import React, { Component } from 'react';
import {
	TouchableOpacity,
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

export default class Manage extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<ImageBackground source={require('./../../images/header.png')} style={styles.head}>
	    			<Text style={styles.headback}>返回</Text>
    				<Text style={styles.headtext}>地址管理</Text>
    			</ImageBackground>
    			
    			<View style={styles.listinput}>
    				<View style={styles.listinputs}>
	    				<Text style={styles.listinputl}>hello</Text>
	    				<Text style={styles.listinputr}>987654321</Text>
    				</View>
    				<View style={styles.listinputx}>
    					<Text style={styles.listinputc}>hello</Text>
    				</View>
    				<View style={styles.doublebtn}>
    					<TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('删除按纽')}}>
    						<Text style={styles.btnstyle}>删除</Text>
    					</TouchableOpacity>
    					<TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('修改按纽')}}>
    						<Text style={styles.btnstyle}>修改</Text>
    					</TouchableOpacity>
    				</View>
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
	    position: 'relative',
  	},
	head: {
		width: width,
  	height: 150*width/640,
	},
	headback: {
  	position: 'absolute',
  	left: 20*width/640,
  	color: '#fff',
  	width: 80*width/640,
  	height: 80*width/640,
  	lineHeight: 80*width/640,
  	fontSize: 26*width/640,
  },
	headtext: {
  	width: width,
  	height: 80*width/640,
  	lineHeight: 80*width/640,
  	color: '#fff',
  	fontSize: 50*width/640,
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
	listinput: {
		width: width,
		height: 200*width/640,
		borderWidth: 1,
		borderColor: '#e5e5e7',
		backgroundColor: '#ffffff',
		marginTop: 10*width/640,
	},
	listinputs: {
		width:  width-2*32*width/640,
		height: 68*width/640,
		flexDirection: 'row',
	},
	listinputl: {
		height: 68*width/640,
		color: '#2b2b2b',
		flex: 1,
		lineHeight: 68*width/640,
		marginLeft: 38*width/640,
	},
	listinputr: {
		height: 68*width/640,
		color: '#959495',
		flex: 1,
		lineHeight: 68*width/640,
		textAlign: 'right',
	},
	listinputx: {
		width:  width-2*32*width/640,
		height: 46*width/640,
		borderBottomWidth: 1,
		borderColor: '#e1e1e1',
		marginLeft: 32*width/640,
	},
	listinputc: {
		height: 46*width/640,
		color: '#9d9d9d',
	},
	btn: {
		width: width-2*32*width/640,
		height: 68*width/640,
		backgroundColor: '#fe7ea8',
		marginHorizontal: 32*width/640,
		marginVertical: 16*width/640,
		position: 'absolute',
		bottom: 0,
		borderRadius: 6*width/640,
	},
	doublebtn: {
		flexDirection: 'row-reverse',
	},
	btnstyle: {
		backgroundColor: '#a29bff',
		paddingHorizontal: 20*width/640,
		color: '#ffffff',
		height: 52*width/640,
		lineHeight: 52*width/640,
		marginTop: 14*width/640,
		borderRadius: 26*width/640,
		marginRight: 18*width/640,
	},
});