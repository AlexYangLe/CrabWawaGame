/**
 * Created by yanglele on 2018/6/28.
 */
import React, {Component} from 'react'
import {Image, StyleSheet, Alert} from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from './pages/Home'
import Award from './pages/Award'
import Me from './pages/Me'

const MainTabSelectedIcon = require("./images/i_home_foc.png");
const MainTabUnSelectedIcon = require("./images/i_home.png");
const MeTabUnSelectedIcon = require("./images/i_mine.png");
const MeTabSelectedIcon = require("./images/i_mine_foc.png");
const AwardTabUnSelectedIcon = require("./images/i_video.png");
const AwardTabSelectedIcon = require("./images/i_video_foc.png");

export default MainTab = TabNavigator({
  Home:{
    screen:Home,
    navigationOptions:({navigation, screenProps}) => ({
      //StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
      //设置StackNavigator属性
      header:null,
      headerTitle:'',
      headerStyle: styles.navigator,
      headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled:true,
      title:'Home',


      //设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel:'首页',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image
            source={focused ? MainTabSelectedIcon : MainTabUnSelectedIcon}
            style={styles.tabbarImage}
          />
        )
      }),
      //tabBarOnPress:(obj)=>{
      //  console.log('Home'+ obj);
      //  obj.jumpTo(Home)
      //},
    })
  },
  Award:{
    screen:Award,
    navigationOptions:({navigation, screenProps}) =>({
      //StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
      //设置StackNavigator属性
      header:null,
      headerTitle:'',
      headerStyle: styles.navigator,
      headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled:true,

      //设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel:'',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image
            source={focused ? AwardTabSelectedIcon : AwardTabUnSelectedIcon}
            style={styles.tabbarImage}
          />
        )
      }),
    })
  },
  Me:{
    screen:Me,
    navigationOptions:({navigation, screenProps}) =>({
      //StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
      //设置StackNavigator属性
      header:null,
      headerTitle:'',
      headerStyle: styles.navigator,
      headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled:true,

      //设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel:'',
      tabBarIcon:(({tintColor,focused}) => {
        return(
          <Image
            source={focused ? MeTabSelectedIcon : MeTabUnSelectedIcon}
            style={styles.tabbarImage}
          />
        )
      }),
    })
  }

},{
  tabBarPosition:'bottom',
  swipeEnabled:false,
  animationEnable:false,
  lazy:true,
  initialRouteName:'',
  backBehavior:'none',
  tabBarOptions:{
    //activeTintColor:'#d81e06', // label和icon的前景色 活跃状态下（选中）。
    //inactiveTintColor:'#515151', // label和icon的前景色 不活跃状态下(未选中)。
    //labelStyle:{
    //  fontSize: 12,
    //},
    showLabel:false,
    style:{
      height:44,
      backgroundColor:'#fef9cb'
    },
  }
})

const styles = StyleSheet.create({
  navigatorTitle:{
    fontSize:17,
    color:'white',
  },
  navigator:{
    //backgroundColor:'#d81e06',
    //flex:1,
    backgroundColor:'orange',
  },

  tabbarImage:{
    width:25,
    height:25,
    marginBottom:-3,
  },
})
