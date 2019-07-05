/**
 * Created by yanglele on 2018/7/4.
 */

import React, {Component} from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  ListView,
  ScrollView,
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
import SafeAreaView from 'react-native-safe-area-view'
import AddressArray from './../data/Address.json'
//下拉选择框
import ModalDropdown from 'react-native-modal-dropdown'

export default class ShoppingCar extends Component{
  static navigationOptions={
    header:null,
    //headerStyle:{
    //  headerTitle:'shoppingCar',
    //  backgroudColor:'orange',
    //  headerTintColor:'orange',
    //}
  }
  //const {navigation} = this.props;
  //var applyGoodsArr = navigation.getParam('applyGoodsArr');

  constructor(props) {
    super(props);
    //var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!== r2 });
    this.state = {
      //dataSource:ds.cloneWithRows(this.applyGoodsArr)
      //dataSource: new ListView.DataSource({
      //  rowHasChanged:(r1, r2) => r1 !== r2
      //}),
      goodsListArray:[],
      addressArray:[],
      selectIndex:0,

    }


  }

  componentDidMount(){
    const {navigation} = this.props;
    var applyGoodsArr = navigation.getParam('applyGoodsArr');
    var addressArray = AddressArray.data;
    //console.log('shoppingCar');
    //console.log(applyGoodsArr);
    //console.log('addressArray');
    //console.log(addressArray);
    this.setState({
      //dataSource:this.state.dataSource.cloneWithRows(applyGoodsArr),
      goodsListArray:applyGoodsArr,
      addressArray:addressArray,
    })
  }

  render(){

    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <View style={styles.headerViewStyle}></View>
          <ScrollView
            showsVerticalScrollIndicator={true}
            bounces={false}
            style={{flex:1, backgroundColor:'#EFEFF4'}}>
            <View style={styles.mainViewStyle}>
              <Text style={styles.choseAddTitleStyle}>选择地址,你的地址是多少</Text>
              {
                this.renderAddress()
              }

              //申请发货的娃娃列表信息
              {
                this.renderGoodsInfoView()
              }
              {/*<ListView
               dataSource={this.state.dataSource}
               renderRow={this.renderRow}
               contentContainerStyle={styles.listViewStyle}
               />*/}
              {
                  this.postSpend()
              }
              {/*尾部的显示*/}
              {
                this.renderFootView()
              }

            </View>
          </ScrollView>
        </SafeAreaView>

      </View>

    )
  }

  renderAddress=() => {
    //获取地址列表之后，判断地址列表是否存在，存在显示地址栏，可以点击去改变地址
    if (this.state.addressArray.length > 0){
      var defaultAdd = this.state.addressArray[this.state.selectIndex].Address;
      var addressArr = [];
      for (var i = 0; i < this.state.addressArray.length;i++){
        addressArr.push(this.state.addressArray[i].Address);
      }
      return(
        <ModalDropdown
          options={addressArr}
          style={styles.addrssInfoVStyle}
          defaultValue={defaultAdd}
          dropdownStyle={styles.dropDownStyle}
          textStyle={styles.dropDownTextStyle}
          dropdownTextStyle={styles.dropDownTextStyle}
          onSelect={(idx, value) => this.selectAddressIndex(idx,value)}
          //renderRow={this.dropDownRenderRow.bind(this)}
        />


      /*<TouchableOpacity activeOpacity={0.5} onPress={()=>{this.choseAnotherAddress()}}>
          <View style={styles.addrssInfoVStyle}>*/
            /*<Image></Image> View 暂代Image的位置*/
            /*<View style={styles.addressImageStyle} />
            <Text style={styles.addInfoTextStyle}>{this.state.addressArray[0].Address}</Text>
          </View>
        </TouchableOpacity>*/
      )
    }else{
      return(
        <View style={styles.addAddressViewStyle}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.addAddress()}}>
            <View style={styles.addAddressBtnStyle}>
              <Text>新增地址</Text>
            </View>
            <Text  style={styles.addAddressPromptStyle}>jiligualajiligualajiliguala</Text>
          </TouchableOpacity>
        </View>

      )
    }

  }
  renderGoodsInfoView(){
    var allGoodsInfoArr = [];
    for (var i = 0; i < this.state.goodsListArray.length; i++){
      var goodsInfoTmp = this.state.goodsListArray[i];
      allGoodsInfoArr.push(
        <View  key={i} style={styles.listCellViewStyle}>
          <View style={styles.goodsIconStyle}/>
          <View style={styles.goodDetailInfoStyle}>
            <Text style={styles.nameTextStyle}>Name:{goodsInfoTmp.title}</Text>
            <Text numberOfLines={3} style={styles.goodsIDTextStyle}>ID:{goodsInfoTmp.ID}</Text>
          </View>
        </View>
      )
    }
    return allGoodsInfoArr;
  }

  renderRow= (rowData, sectionId, rowID) =>{
    return(
      <View style={styles.listCellViewStyle}>
        <View style={styles.goodsIconStyle}/>
        <View style={styles.goodDetailInfoStyle}>
          <Text style={styles.nameTextStyle}>Name:{rowData.title}</Text>
          <Text numberOfLines={3} style={styles.goodsIDTextStyle}>ID:{rowData.ID}</Text>
        </View>
      </View>
    )
  }
  //选择新地址
  choseAnotherAddress(){
    alert('更改地址');
  }
  //新增新地址
  addAddress(){
    alert('新增地址');
  }
  postSpend(){
    //娃娃的个数大于2个的时候是免邮的，小于2个的时候是存在邮费的
    if(this.state.goodsListArray.length > 1){
      return(
        <View style={{width:screenWidth, height: 80, backgroundColor:'white', marginTop:15}}>
          <View style={styles.postalFreeViewStyle}>
            <View style={styles.postalFreeInnerViewStyle}>
              <Text style={{fontSize:18, marginLeft:15, }}>Shopping</Text>
              <Text style={{fontSize:16, marginTop:2, color:'grey'}}> Free Shipping on delivery of two or more</Text>
            </View>
            <View style={{marginTop:2 }}>
              <Text style={{fontSize:20, marginRight:2,textAlign:'right'}}> Free deliver</Text>
            </View>
          </View>
        </View>

    )
    }else{
      return(
        <View style={{width:screenWidth, height: 80, backgroundColor:'white', marginTop:15}}>
          <View style={styles.postalFreeViewStyle}>
            <View style={styles.postalFreeInnerViewStyle}>
              <Text style={{fontSize:18, marginLeft:15, }}>Shopping</Text>
              {/*<Text style={{fontSize:16, numberOfLines:3, marginTop:2, color:'grey', width:280}}> Free Shipping on delivery of two or more</Text>*/}
            </View>
            <View style={{marginTop:2 }}>
              <Text style={{fontSize:20, marginRight:2,textAlign:'right'}}> ¥45 </Text>
            </View>
          </View>
        </View>
      )
    }
  }

  dropDownRenderRow(rowData, rowID, highlighted){
    return(
      <TouchableOpacity activeOpacity={1}>
        <View style={{width:screenWidth-20, height:30}}>
          <Text style={{fontSize:17, marginLeft:5,marginTop:1}}>{rowData}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  renderFootView(){
    if(this.state.addressArray.length > 0){
      //有地址的时候显示下面提示和按钮
      //textAlign:'center' 文本居中
      return(
        <View style={styles.footViewShowStyle}>
          <Text style={{color:'#C3C3C6', fontSize: 15, marginTop:15, width: screenWidth*.9}}> After confirmation will be delivered wthin 5 working days</Text>
          <Text style={{color:'#C3C3C6', fontSize: 15, marginTop:2, width: screenWidth*.9}}> Under the same ID,send 2 prizes up to free shipping.</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.alreadSendGoods()}}>
            <View style={{width: screenWidth*.85, height: 50,backgroundColor:'#C07EFE', borderRadius: 8, marginTop:20}}></View>
          </TouchableOpacity>
        </View>
      )
    }else{
      //没有地址的时候，下面的提示和按钮隐藏

    }
  }
  alreadSendGoods(){
    alert("已发货");
  }

  //选择地址
  selectAddressIndex(idx, value){
    this.setState({
      selectIndex:idx,
    })
  }

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'orange',
  },
    safeAreaViewStyle:{
    flex:1,
    backgroundColor:'white',
  },
    headerViewStyle:{
    height:44,
    width:screenWidth,
    backgroundColor:'green',
  },
    mainViewStyle:{
    flex:1,
    backgroundColor:'#EFEFF4',
    flexDirection:'column',
  },
    choseAddTitleStyle:{
    fontSize:18,
    color:'#8F8E93',
    margin:3,
  },
  //存在地址的时候,可以选择地址
  addrssInfoVStyle:{
    width:screenWidth-20,
    height:60,
    backgroundColor:"white",
    //justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:3,
    //borderWidth:1,
    backgroundColor:'white',
    marginLeft:10,
    marginBottom:10,

  },
  dropDownStyle:{
    width:screenWidth-20,
    height:180,
    fontSize:17,
    //borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 3,
    marginTop:10,
  },
  dropDownTextStyle:{
    fontSize:17,
    //textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft:10,
  },
  dropDownTextStyle:{
    fontSize:17,
    marginLeft:5,
    marginTop:1
  },
  addressImageStyle:{
    width:30,
    height:30,
    backgroundColor:'red',
    marginLeft:20,
  },
  addInfoTextStyle:{
    fontSize:18,
    color:'black',
    marginLeft:5,
  },
  //不存在地址的时候，需要新增地址
  addAddressViewStyle:{
    width:screenWidth,
    height:120,
    backgroundColor:'white',
    //justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  addAddressBtnStyle:{
    width:screenWidth*.8,
    height:55,
    backgroundColor:'#8BE2FE',
    borderRadius:8,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
  },
  addAddressPromptStyle:{
    textAlign:'center',
    fontSize:18,
    color:'grey',
  },
  //list 布局
  listViewStyle:{
    marginTop:15,
  },
  listCellViewStyle:{
    width:screenWidth,
    height:80,
    backgroundColor:'white',
    //justifyContent:'center',
    alignItems:'center',
    marginBottom:1,
    flexDirection:'row',
  },
  goodsIconStyle:{
    width:60,
    height:60,
    backgroundColor:'orange',
    marginLeft:20,
    borderRadius:5,
  },
  goodDetailInfoStyle:{
    marginLeft:10,
    width:270,
    //backgroundColor:'green',
  },
  nameTextStyle:{
    fontSize:16
  },
  goodsIDTextStyle:{
    fontSize:16,
    color:'#929296',

  },
  //邮费cell
  postalFreeViewStyle:{
    width:screenWidth,
    height:70,
    backgroundColor:'white',
    marginTop:15,
  },
  postalFreeInnerViewStyle:{
    width:screenWidth,
    backgroundColor:'white',
    flexDirection:'row',
  },
  footViewShowStyle:{
    backgroundColor:'#EFEFF4',
    //justifyContent:'center',
    alignItems:'center',
  }



})