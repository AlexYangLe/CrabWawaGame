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
} from 'react-native';


import {StackNavigator, TabNavigator} from 'react-navigation'
var unApplyData = require('./../data/UnApplySendInfo.json');
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default class UnApplySendGoods extends Component{
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!=r2});
    this.state = {

      dataSource: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1 !== r2
      }),
      isChecked:false,
      selectMap: new Map(),
      goodsListInfoArray:[],
    }

  }

  //耗时操作
  componentDidMount() {

    this.loadDataFromNet();

  }
  //取数据
  loadDataFromNet(){
    this.dealWithData(unApplyData);
  }

  dealWithData(infoData){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(infoData.data),
      goodsListInfoArray:infoData.data
    })
  }

  render(){
    let temp = [...this.state.selectMap.values()];
    //let isChecked = temp.length === this.state.dataSource._cachedRowCount;
    console.log(temp, '......');
    return(
      <View style={{flex: 1,  alignItems:'center'}}>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
          style={styles.listViewStyle}
        />
        {
          this.renderApplySendGoods()
        }
      </View>
    )
  }

  renderRow = (rowData, sectionId, rowID) => {

    //let map = this.state.selectMap;
    //let isChecked = map.has(parseInt(rowID));
    console.log(parseInt(rowID));
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.selectItem(parseInt(rowID), rowData)}}>
        <View style={styles.listCellViewStyle}>
          {/*<Image source={isChecked ? require("../img/mine/ic_select.png") :
           require("../img/mine/ic_unselect.png")}/>*/}
          <View style={styles.selectStateStyle}></View>
          <View style={styles.goodsIconStyle}/>
          <View style={styles.goodDetailInfoStyle}>
            <Text>{rowData.title}</Text>
            <Text>{rowData.ID}</Text>
            <Text>{rowData.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  selectItem = (key, value) => {

    this.setState({
      isChecked: !this.state.isChecked,
    }, () => {
      console.log('isChecked2 ' + isChecked + ' ' + key);
      let map = this.state.selectMap;
      let isChecked = map.has(key);
      if (isChecked) {
        map.delete(key, value) // 再次点击的时候,将map对应的key,value删除
      } else {
        map.set(key, value) // 勾选的时候,重置一下map的key和value
      }
      console.log('map size  ' + map.size);
      console.log('map2' + map.values);
      this.setState({selectMap: map})
    })
  }
  applySendGoods(){
    //alert('准备发货');
    var applyGoodsArr = [];

    for(let goodsInfo of this.state.selectMap.values()){
      console.log('goods info ' + goodsInfo);
      applyGoodsArr.push(goodsInfo);
    }
    console.log('applyGoodsArrs' + applyGoodsArr);
    if(applyGoodsArr.length > 0){
      this.props.navigation.navigate('ShoppingCar',{
        applyGoodsArr:applyGoodsArr,
      })
    }else{
      alert("请选择商品");
    }

  }
  renderApplySendGoods(){
    if(this.state.goodsListInfoArray.length > 0)
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.applySendGoods()}}>
        <View style={styles.applySendBtnStyle}></View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  listViewStyle:{
    marginBottom:5,
  },
  cellInnerViewStyle:{
    width:screenWidth,
    height:65,
    backgroundColor:'orange',
    //position:'relative'
    //主轴方向
    flexDirection:'row',
  },
  listCellViewStyle:{
    width: screenWidth,
    height:60,
    backgroundColor:'white',
    marginBottom:1,
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'center'
  },
  selectStateStyle:{
    width:20,
    height:20,
    backgroundColor:'red',
    marginLeft:30,
  },
  goodsIconStyle:{
    width:50,
    height:50,
    backgroundColor:'orange',
    marginLeft:10,
    borderRadius:5,
  },

  goodDetailInfoStyle:{
    width:260,
    marginLeft:10,
  },
  applySendBtnStyle:{
    width:screenWidth*.9,
    height:50,
    backgroundColor:'#FE7ECC',
    marginBottom:2,
    borderRadius:8,
  },
})