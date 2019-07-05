/**
 * Created by yanglele on 2018/6/28.
 */
import MainTab from './TabNavigator'
/*

 --- 路由配置 ---

 * 所有组件都必须在这里注册
 * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
 * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/

const RouteConfig ={
  MainTab:{
    screen:MainTab,
  },
  //需要隐藏导航栏
  //DemoDetail:{
  //  screen:DemoDetail,
  //  navigationOptions:({navigation}) => ({header: nil, gesturesEnabled:true})
  //},

}

export default RouteConfig;
