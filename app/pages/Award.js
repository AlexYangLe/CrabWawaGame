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
} from 'react-native'
import ApplySendGoods from './ApplySendGoods'
import UnApplySendGoods from './UnApplySendGoods'
import ScrollableTabView , {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'
import SafeAreaView from 'react-native-safe-area-view'
import HomeFlatListView from './HomeFlatListView'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class  Award extends Component{
  static navigationOptions=({navigation, screenProps})=>{
    return{
      header:null,
      //title:'Award',
  }
  }

  tabArr = [
    {columnName: '头条', requestCode: 'T1348647909107'},
    {columnName: '娱乐', requestCode: 'T1348648517839'}
  ];


  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={'rgba(255,255,255,0)'} translucent={true} animated={true} />
        <SafeAreaView style={styles.safeAreaStyle}>
          <View style={styles.headerViewStyle}> </View>
          <View style={styles.detailStyle}>
            <ScrollableTabView
              ref={'tabView'}
              renderTabBar={() => <DefaultTabBar style={{borderBottomWidth:0, paddingBottom:5, width:screenWidth * .9, height:45}} />}
              tabBarUnderlineStyle={{height:2, minWidth:Math.floor(screenWidth * .9 / 5), backgroundColor:'rgba(216,30,6,.8)'}}
              tabBarInactiveTextColor='#515151'
              tabBarActiveTextColor='#d81e06'
              tabBarTextStyle={{fontSize: 15}}
              onChangeTab={(ref) => {}}
              onScroll={(position) => {}}
              locked={false}
              initialPage={0}
            >
              <UnApplySendGoods tabLabel="已申请发货" navigation={this.props.navigation} />
              <ApplySendGoods tabLabel="未申请发货" navigation={this.props.navigation} />

            </ScrollableTabView>
          </View>
        </SafeAreaView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'column',
  },
  detailStyle:{
    flex:1,
    width:screenWidth,
    backgroundColor:'#f8f8f8',
  },
  safeAreaStyle:{
    //backgroundColor:'white',
    flex:1,
    backgroundColor:'#FECBDC',
    flexDirection:'column',
  },
  headerViewStyle:{
    backgroundColor:'#FECBDC',
    height:44,
    width:screenWidth,
  },
})