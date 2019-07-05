import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  AppRegistry,
  ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

var infoData = require('./../data/homeInfo.json');

export default class Catchrecord extends Component {
	constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1!== r2});
    this.state = {

      dataSource:ds.cloneWithRows(infoData.data)
      //dataSource: new ListView.DataSource({
      //  rowHasChanged:(r1, r2) => r1!== r2
      //})
    };
  }
	
	render() {
	    return (
	    	<View style={styles.container}>
	    		<ImageBackground source={require('./../../images/header.png')} style={styles.head}>
    				
    			</ImageBackground>
    			<ListView
		        dataSource={this.state.dataSource}
		        renderRow={this.renderRow}
		        contentContainerStyle={styles.record}/>
		          {/*<Text style={styles.textStyle}> {this.props.requestCode}</Text>*/}
	    	</View>
	    );
	}
	//单独的一个cell
  renderRow(rowData){
    return(
    	<View style={styles.recordlist}>
				<View style={styles.images}></View>
				<View style={styles.content}>
					<View style={styles.contents}>
		    			<Text style={styles.contentsL}>{rowData.title}</Text>
		    			<Text style={styles.contentsR}>{rowData.title}</Text>
	    			</View>
					<Text style={styles.contentc}>{rowData.title}</Text>
					<Text style={styles.contentx}>{rowData.title}</Text>
				</View>
			</View>
    )
  }
  //pushCarbToyDetial(rowData){
  //  alter(rowData.title);
  //}
  //加载数据
  componentDidMount() {
    this.getHomeInfoDataList()
  }
  getHomeInfoDataList= ()=> {
    let requestCode = this.props.requestCode;
    console.log(requestCode);
  }
}

//AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    alignItems: 'center',
	    backgroundColor: '#ffffff',
  	},
	head: {
		width: width,
	  	height: 130*width/640,
	},
	record: {
		width: width,
	},
	recordlist: {
		width: width-2*32*width/640,
		height: 168*width/640,
		borderBottomWidth: 2,
		borderColor: '#e5e5e5',
		marginHorizontal: 32*width/640,
		flexDirection: 'row',
	},
	images: {
		width: 124*width/640,
		height: 124*width/640,
		borderRadius: 8*width/640,
		backgroundColor: '#fecbcf',
		marginTop: 22*width/640,
	},
	content: {
		width: width-210*width/640,
		height: 124*width/640,
		marginTop: 22*width/640,
		marginLeft: 22*width/640,
	},
	contents: {
		flexDirection: 'row',
	},
	contentsL: {
		color: '#000',
		flex: 1,
		lineHeight: 42*width/640,
		fontSize: 16,
	},
	contentsR: {
		color: '#999999',
		flex:1,
		lineHeight: 42*width/640,
		textAlign: 'right',
		fontSize: 16,
	},
	contentc: {
		color: '#000',
		lineHeight: 42*width/640,
		fontSize: 16,
	},
	contentx: {
		color: '#878787',
		fontSize: 16,
	},
});