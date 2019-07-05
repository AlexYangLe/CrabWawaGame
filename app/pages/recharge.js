import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  SectionList,
  Image,
  ImageBackground,
  ListView,
} from 'react-native';
 
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

var infoData = require('./../data/homeInfo.json');

export default class Recharge extends React.Component {
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
      <View style={{ flex: 1, backgroundColor: '#efeff4' }}>
      	<ImageBackground style={styles.head}>
      		<View>
      			<Text style={styles.headback}>返回</Text>
      			<Text style={styles.headtext}>我的钱包</Text>
      		</View>
      		<ImageBackground style={styles.card}>
	      		<Text style={styles.headrest}>ID:10010</Text>
      		</ImageBackground>
      	</ImageBackground>
      	
	  		<ListView
	        dataSource={this.state.dataSource}
	        renderRow={this.renderRow}
	        contentContainerStyle={styles.rechargecon}/>
	          {/*<Text style={styles.textStyle}> {this.props.requestCode}</Text>*/}
	      </View>
      		
      		
      
    );
  }
  //单独的一个cell
  renderRow(rowData){
    return(
    	<View style={styles.lists}>
  			<Text style={styles.introduce}>{rowData.title}</Text>
  			<Text style={styles.money}>${rowData.price}</Text>
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
 
AppRegistry.registerComponent('App', () => Personal);
const styles = StyleSheet.create({
  container: {
    flex: 1,
//  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  head: {
  	width: width,
  	height: 342*width/640,
  	backgroundColor: '#fe7e8d',
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
  card: {
  	width:500*width/640,
  	height:80*width/640,
  	backgroundColor: 'orange',
		alignItems:'flex-end',
  	justifyContent: 'center',
  	backgroundColor: '#fff',
  	borderWidth: 3,
  	borderColor: '#922230',
  	borderRadius: 6*width/640,
  	paddingRight: 10*width/640,
  	alignSelf: 'center',
  },
  headrest: {
  	fontSize: 28*width/640,
  	color: '#000',
  },
  rechargecon: {
  	width:width-40*width/640,
  	marginHorizontal: 20*width/640,
  	backgroundColor: 'pink',
  	borderRadius: 20*width/640,
  	overflow: 'hidden',
  	marginTop: 10*width/640,
  	//主轴方向
    flexDirection:'row',
    //多行显示
    flexWrap:'wrap',
  },
  lists: {
  	width: width/2-60*width/640,
  	height: 100*width/640,
  	backgroundColor: 'yellow',
  	marginHorizontal: 20*width/640,
  	marginVertical: 20*width/640,
  	borderRadius: 10*width/640,
  	flexDirection:'row',
//	shadowColor: '#000',
//	shadowOffset: {width: 0, height: 5},
//	shadowOpacity: 50,
//	shadowRadius: 10*width/640,
  },
  introduce: {
  	flex: 2,
  	height: 80*width/640,
  	borderWidth: 1,
  	borderColor: '#F3CE14',
  	borderRadius: 10*width/640,
  	backgroundColor: '#fff',
  	textAlign: 'center',
  	lineHeight: 80*width/640,
  	marginVertical: 10*width/640,
  	marginLeft: 10*width/640,
  	fontSize: 24*width/640,
  },
  money: {
  	flex: 1,
  	color: '#000',
  	fontSize: 30*width/640,
  	textAlign: 'center',
  	lineHeight: 100*width/640,
  }
});