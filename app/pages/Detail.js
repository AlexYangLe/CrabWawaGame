/**
 * Created by yanglele on 2018/7/2.
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
  Button,
} from 'react-native'

import Swiper from 'react-native-swiper'
import TimerMixin from 'react-timer-mixin'
import ModalSimple from 'react-native-simple-modal'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class  Detail extends Component{
  static navigationOptions={
    header:null,
  }
  //mixins:[TimerMixin]
  constructor(props) {
    super(props);
    this.state = {
      showImage:false,
      currentPage:0,
    };
  }

  render(){
    var ImageName = "img_0"+this.state.currentPage+'.png';
    return(
        <View style={styles.container}>
          <Button title="定时器切换图片"
                  onPress={()=>{this.showImage()}} />
          {/*提交问题成功*/}
          <ModalSimple
            animationDuration={1}
            open={this.state.showImage}
            closeOnTouchOutside={false}
            //modalDidOpen={alert('open1111')}
            modalDidClose={this.modalClose}
          >
            <View style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0.5)'
                }}>
              <Image source={{uri:ImageName}} style={{width: screenWidth, height:80}}></Image>
            </View>
          </ModalSimple>
        </View>

    )
  }
  showImage(){
    this.setState({
      showImage:true,
    })
    this.startTimer();
  }
  modalClose =()=>{
    alert('clear Timer');
    clearInterval(this.timer);

  }
  startTimer(){
    this.timer = setInterval(()=>{
      var activePage = 0;
      if(this.state.currentPage > 3){
        //alert('active page ');
        this.setState({
          showImage:false,
        })
      }else{
        activePage = this.state.currentPage+1;
      }

      this.setState({
        currentPage:activePage,
      })

    }, 1000)
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
})