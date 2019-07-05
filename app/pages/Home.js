/**
 * Created by yanglele on 2018/6/28.
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
  StatusBar,
  Button,
} from 'react-native'

import {StackNavigator, TabNavigator} from 'react-navigation'
import ScrollableTabView , {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'
import Swiper from 'react-native-swiper'
import SafeAreaView from 'react-native-safe-area-view'
import HomeFlatListView from './HomeFlatListView'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class  Home extends Component{
  static navigationOptions={
    //header:null,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  tabArr = [
    {columnName: '头条', requestCode: 'T1348647909107'},
    {columnName: '娱乐', requestCode: 'T1348648517839'},
    {columnName: '科技', requestCode: 'T1348649580692'},
    {columnName: '手机', requestCode: 'T1348649654285'},
    {columnName: '冰雪运动', requestCode: 'T1486979691117'},
    {columnName: '云课堂', requestCode: 'T1421997195219'},
    {columnName: '游戏', requestCode: 'T1348654151579'},
    {columnName: '旅游', requestCode: 'T1348654204705'},
    {columnName: '二次元', requestCode: 'T1481105123675'},
    {columnName: '轻松一刻', requestCode: 'T1350383429665'},
    {columnName: '体育', requestCode: 'T1348649079062'}
  ];

  swiperData = [
    '华为不看好5G',
    '陶渊明后人做主播',
    '尔康制药遭处罚',
    '卢恩光行贿一案受审',
    '盖茨力挺扎克伯格',
    '大连特大刑事案件',
    '高校迷香盗窃案',
    '少年被批评后溺亡',
    '北京工商约谈抖音'
  ];


  render(){
    return(
      <View style={styles.container}>

        {/* 头部 */}
        <SafeAreaView style={styles.headerContainer}>
          {/* 状态栏 */}
          {/*<StatusBar backgroundColor='#fecbdc' translucent={true} animated={true} />*/}
          <View style={styles.headerViewStyle}></View>
          <View style={styles.swipeImage}>
            <Swiper
              horizontal={true}
              autoplay={true}
              showsPagination={true}
              scrollEnabled={true}
              dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              paginationStyle={{
                        bottom: 10, left: null, right: 10
                    }}
              autoplayTimeout={5}>{
              this.swiperData.map((item, index) => {
                return(
                  <TouchableOpacity activeOpacity={1} key={index} style={styles.swipeItem} onPress={() => this.props.navigation.push('NewsSearch', {keyword:item})}>
                    {/*                  <Image source={require("./../../assets/images/i_search.png")} resizeMode={'contain'} style={styles.headerSearchImage} />*/}
                    <Text style={styles.headerSearchText}>{item}</Text>
                  </TouchableOpacity>
                )
              })
            }

            </Swiper>
          </View>
          {/*详情页*/}
          <View style={styles.detailStyle}>
            <ScrollableTabView
              ref={'tabView'}
              renderTabBar={() => <ScrollableTabBar style={{borderBottomWidth:0, paddingBottom:5, width:screenWidth * .9, height:45}} />}
              tabBarUnderlineStyle={{height:2, minWidth:Math.floor(screenWidth * .9 / 5), backgroundColor:'rgba(216,30,6,.8)'}}
              tabBarInactiveTextColor='#515151'
              tabBarActiveTextColor='#d81e06'
              tabBarTextStyle={{fontSize: 15}}
              onChangeTab={(ref) => {}}
              onScroll={(position) => {}}
              locked={false}
              initialPage={0}
            >
              {
                this.tabArr.map(item => {
                  return(
                    <HomeFlatListView
                      key={item.columnName}
                      tabLabel={item.columnName}
                      requestCode={item.requestCode}
                      navigation={this.props.navigation}
                     />
                  )
                })
              }
            </ScrollableTabView>
          </View>
          <Button
            title="Go detial"
            onPress={()=>this.props.navigation.navigate('Detail')} />
        </SafeAreaView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F8F8F8',
    position: 'relative',
    flexDirection:'column',
  },
  headerContainer:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#FECBDC',
    //backgroundColor:'#f8f8f8',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerViewStyle:{
    //backgroundColor:'#FECBDC',
    height:44,
    width:screenWidth,
    backgroundColor:'#333999',
  },
  swipeImage:{
    flex:1,
    width:screenWidth,
    height: 194*screenWidth/375,
    backgroundColor:'#FECBDC',
  },
  detailStyle:{
    flex:2,
    width:screenWidth,
    backgroundColor:'#f8f8f8',
  },
  headerLogo:{
    width:45,
    height:45,
  },
  //headerSearchContainer:{
  //  width: screenWidth * 0.7,
  //  height: 33,
  //  borderRadius: 18,
  //  backgroundColor: 'rgba(255,255,255,.3)'
  //},
})