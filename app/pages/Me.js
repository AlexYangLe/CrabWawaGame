import React, { Component } from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  SectionList,
  Image,
  ImageBackground,
  TouchableOpacity,
  navigate
} from 'react-native';



var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class Personal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#efeff4',}}>
      	<ImageBackground style={styles.head}>
      		<Text style={styles.headtext}>我的背包</Text>
      		<ImageBackground style={styles.card}>
	      		<Text style={styles.headname}>Alapha</Text>
	      		<Text style={styles.headid}>ID:10010</Text>
      		</ImageBackground>
      		
      	</ImageBackground>
      	<View style={[styles.list, styles.iconmargin]}>
					<Text style={[styles.content, styles.fonts]}>Gold Medal of the remaining</Text>
					<Image source={require('../images/yellow_bj.png')} style={styles.icon} />
					<Text style={[styles.content, styles.fonts2]}>2926 to Top Up.</Text>
					<Image source={require('../images/header.png')} style={styles.icon} />
				</View>
				<View style={[styles.lists, styles.iconmargin]}>
					<TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.push('Refillrecord')}>
						<View style={styles.contents}>
							<Text style={styles.con}>My notes</Text>
							<Image source={require('../images/header.png')} style={styles.icons} />
						</View>
					</TouchableOpacity>
					<View style={styles.contents}>
						<Text style={styles.con}>my doll</Text>
						<Image source={require('../images/header.png')} style={styles.icons} />
					</View>
					<View style={styles.contents}>
						<Text style={styles.con}>Top up</Text>
						<Image source={require('../images/header.png')} style={styles.icons} />
					</View>
					<View style={styles.contents}>
						<Text style={styles.con}>Addess management</Text>
						<Image source={require('../images/header.png')} style={styles.icons} />
					</View>
				</View>
				<View style={[styles.lists, styles.iconmargin]}>
					<View style={styles.contents}>
						<Text style={[styles.con, styles.con1]}>Invite a friend to a reward.</Text>
						<Text style={styles.con2}>Every one in ...</Text>
						<Image source={require('../images/header.png')} style={styles.icons} />
					</View>
					<View style={styles.contents}>
						<Text style={styles.con}>Enter invitation code</Text>
						<Image source={require('../images/header.png')} style={styles.icons} />
					</View>
				</View>
				<View style={[styles.list, styles.iconmargin]}>
					<Text style={[styles.content, styles.fonts3]}>Contact</Text>
					<Text style={[styles.content, styles.fonts4]}>@ line ID: @ ffa9374j</Text>
				</View>
      </View>
    );
  }
 
}
 
//AppRegistry.registerComponent('App', () => Personal);
const styles = StyleSheet.create({
  container: {
    flex: 1,
//  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeff4',
  },
  head: {
  	width: width,
  	height: 342*width/640,
  	backgroundColor: '#fe7e8d',
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
  card: {
  	width:330*width/640,
  	height:100*width/640,
  	backgroundColor: 'orange',
  	alignItems:'center',
  	justifyContent: 'center',
  	alignSelf: 'center',
  },
  headname: {
  	fontSize: 40*width/640,
  	color: '#8F232E',
  },
  headid: {
  	fontSize: 30*width/640,
  	color: '#FE7E8D',
  },
  list: {
  	width: width,
  	height: 100*width/640,
  	backgroundColor: '#ffffff',
  	borderBottomWidth: 1,
  	borderColor: '#e2e1e4',
  	flexDirection: 'row',
  	paddingHorizontal: 26*width/640,
  	marginBottom: 16*width/640,
  	flexDirection: 'row',
  },
  content: {
  	width: width,
  	height: 100*width/640,
  	textAlignVertical: 'center',
  	backgroundColor: "#fff",
  	color: '#000',
  	fontSize: 15,
  	borderBottomWidth: 1,
  	borderColor: '#e2e1e4' ,
  },
  fonts: {
  	fontSize: 20*width/640,
  	flex: 8,
  },
  fonts2: {
  	fontSize: 24*width/640,
  	flex: 5,
  },
  lists: {
  	width: width,
  	backgroundColor: '#ffffff',
  	marginBottom: 16*width/640,
  },
  contents: {
  	width: width-2*26*width/640,
  	height: 72*width/640,
  	marginHorizontal: 26*width/640,
  	borderBottomWidth: 1,
  	borderColor: '#e2e1e4',
  	flexDirection: 'row',
  },
  con: {
  	lineHeight: 72*width/640,
  	flex: 13,
  	fontSize: 24*width/640,
  	color: '#000',
  },
  con1: {
  	flex: 8,
  },
  con2: {
  	lineHeight: 72*width/640,
  	flex: 5,
  	fontSize: 20*width/640,
  	color: '#ccc',
  },
  icons: {
  	height: 50*width/640,
  	flex: 1,
  	marginTop: 11*width/640,
  },
  icon: {
  	height: 50*width/640,
	flex: 1,
  	marginTop: 25*width/640,
  },
  fonts3: {
  	fontSize: 24*width/640,
  	flex: 3,
  },
  fonts4: {
  	fontSize: 20*width/640,
  	flex: 9,
  	color: '#ccc',
  },
  last: {
  	backgroundColor: 'rgba(0,0,0,0)',
  	height: 12,
  }
});