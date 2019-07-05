/**
 * Created by yanglele on 2018/7/3.
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ListView,
  Navigator,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';

var unApplyData = require('./../data/UnApplySendInfo.json');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default class ApplySendGoods extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1 !== r2
      }),
      selectMap: new Map(),

    }
  }

  //取数据
  componentDidMount() {
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(unApplyData.data)
    })
  }

  render(){
    let temp = [...this.state.selectMap.values()];
    let isChecked = temp.length === this.state.dataSource._cachedRowCount;

    console.log(temp,'.........');
    return(
      <View style={{flex: 1}}>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </View>
    )
  }

  renderRow = (rowData, sectionId,rowID) => {
    let map = this.state.selectMap;
    let isChecked = map.has(parseInt(rowID));
    var imageArray = rowData.title;
    return(
      <View style={styles.cellInnerViewStyle}>
        <Text style={styles.cellIDTextStyle}>ID:{rowData.ID}</Text>
        <Text style={styles.cellTimeTextStyle}>Time:{rowData.time}</Text>
        <Text style={styles.celltitleTextStyle}>Name:{rowData.title}</Text>
        <View style={styles.scrollOutViewStyle}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            //style={{flexDirection:'row'}}
            contentContainerStyle={{margin:5}}
          >
            {
              this.renderAllImage(imageArray)
            }
          </ScrollView>

        </View>
        <View style={{width: screenWidth, height: 1,backgroundColor:'#ECEBED', marginTop:2}}/>
      </View>
    )

  }
  renderAllImage=(imageArray)=>{
    var allImage = [];
    //for (var i = 0; i < imageArray.length; i++){
    //  var imageItem = imageArray[i];
    //  allImage.push(
    //    <Image key={i} source={{uri:imageItem.image}} style={{width:80, height: 80, padding:3, borderRadius: 8 }}></Image>
    //  )
    //}
    for (var i = 0; i < 10; i++){
      allImage.push(
        <View key={i} style={{width:60, height: 60, borderRadius:8, marginRight:5, backgroundColor:'red'}}></View>
      );
    }
    return allImage;
  }

}

const styles = StyleSheet.create({
  cellInnerViewStyle:{
    width:screenWidth,
    height:150,
    backgroundColor:'white',
  },
  cellIDTextStyle:{
    color:'black',
    //position:'absolute',
    marginTop:10,
    marginLeft:15,
  },
  cellTimeTextStyle:{
    color:'black',
    //position:'absolute',
    marginTop:5,
    marginLeft:15,
  },
  celltitleTextStyle:{
    color:'black',
    //position:'absolute',
    marginTop:5,
    marginLeft:15,
  },
  scrollOutViewStyle:{
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    //marginBottom:10,
    //backgroundColor:'orange',
    height:70,
  },
  scrollViewStyle:{
    flexDirection:'row',
    alignItems:'center',
  },


})