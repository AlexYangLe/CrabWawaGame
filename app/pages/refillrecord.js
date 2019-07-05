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
	    		<ImageBackground source={require('../images/header.png')} style={styles.head}>
    				
    			</ImageBackground>
    			
    			<ListView
		        dataSource={this.state.dataSource}
		        renderRow={this.renderRow}
		        contentContainerStyle={styles.record}/>
		          {/*<Text style={styles.textStyle}> {this.props.requestCode}</Text>*/}
		      </View>
    			
//  			<View style={styles.record}>
//  				<View style={styles.recordlist}>
//  					<View style={styles.content}>
//							<Text style={styles.contents}>充值金额</Text>
//  						<Text style={styles.contentc}>订单号</Text>
//  						<Text style={styles.contentx}>时间</Text>
//  					</View>
//  					<View style={styles.money}>
//  						<Text style={styles.moneynum}>+210yuan</Text>
//  					</View>
//  				</View>
//  			</View>
//  			<View style={styles.record}>
//  				<View style={styles.recordlist}>
//  					<View style={styles.content}>
//							<Text style={styles.contents}>充值金额</Text>
//  						<Text style={styles.contentc}>订单号</Text>
//  						<Text style={styles.contentx}>时间</Text>
//  					</View>
//  					<View style={styles.money}>
//  						<Text style={styles.moneynum}>+210yuan</Text>
//  					</View>
//  				</View>
//  			</View>
//	    	</View>
	    );
	}
	
	//单独的一个cell
  renderRow(rowData){
    return(
			<View style={styles.recordlist}>
				<View style={styles.content}>
					<Text style={styles.contents}>{rowData.price}</Text>
					<Text style={styles.contentc}>{rowData.icon}</Text>
					<Text style={styles.contentx}>{rowData.title}</Text>
				</View>
				<View style={styles.money}>
					<Text style={styles.moneynum}>+{rowData.price}</Text>
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
	money: {
		width: 200*width/640,
		height: 124*width/640,
		marginTop: 22*width/640,
	},
	moneynum: {
		color: '#febe59',
		textAlign: 'center',
		lineHeight: 124*width/640,
		fontSize: 24,
	},
	content: {
		width: width-284*width/640,
		height: 124*width/640,
		marginTop: 22*width/640,
		marginRight: 22*width/640,
	},
	contents: {
		color: '#000',
		lineHeight: 42*width/640,
		fontSize: 16,
	},
	contentc: {
		color: '#bcbcbc',
		lineHeight: 42*width/640,
		fontSize: 16,
	},
	contentx: {
		color: '#bcbcbc',
		fontSize: 16,
	},
});