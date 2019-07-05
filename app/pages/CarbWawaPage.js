/**
 * Created by yanglele on 2018/7/10.
 */
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
  Modal,
  Slider,
} from 'react-native'


import Swiper from 'react-native-swiper'
import SafeAreaView from 'react-native-safe-area-view'
import ModalSimple from 'react-native-simple-modal'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class  CarbWawaPage extends Component{
  static navigationOptions={
    header:null,
  }
  constructor(props) {
    super(props);
    this.state = {
      wawaDetialShow:false,// 娃娃详情页
      settingShow:false,//设置页
      submitQueShow:false, //提交问题页
      submitQueSucShow:false, //提交问题成功页
      countDownImgShow:false, //倒计时
      currentPage:0,//倒计时页面

      carbWawaSucShow:false,//抓取成功页
      carbWawaFailShow:false, //抓取失败页
      operateBeginShow:true,//操作按钮预约操作
      operateCarbShow:false,//操作按钮页面显示

      carbSuccessShow:false,//抓取成功页面显示
      carbFialeShow:false,//抓取失败页面显示
      resultPageLeftTime:5,//结果页剩余时间

      appointMentBtnable:true, //预约按钮是否可用

      musicSoundNum:50,
      soundEffectNum:50,


      currentPageImage:'',//倒计时页面当前页图片名称
    };

  }
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
    //倒计时页面的图片名
    var ImageName = "img_0"+this.state.currentPage+'.png';
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaStyle}>
          <View style={styles.liveViewStyle}>
            {/*上面导航栏，显示返回和人数*/}
            <View style={styles.navigatorViewStyle}>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.goBack()}}>
                <View style={{width: 40, height:40,backgroundColor:'red', marginLeft: 5}} />
              </TouchableOpacity>
              <View style={{width: 108, height:40,backgroundColor:'rgba(255,255,255,0.3)', borderRadius:15,marginRight:15}}></View>
            </View>
            {/*侧边栏显示设置按钮*/}
            <View style={{width: 50 ,
                          height: 205,
                          backgroundColor:'rgba(0,0,0,0)',
                          marginTop:15,
                          marginLeft:screenWidth-60,
                          flexDirection:'column',
                          justifyContent:'space-between'}}>

              <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                this.setState({
                  wawaDetialShow:true,
                })
              }}>
                <View style={{width: 50,
                            height:37,
                            backgroundColor:'red',
                            borderTopLeftRadius:15,
                            borderBottomLeftRadius:15
                            }}>
                  {/*//按钮1*/}
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                this.setState({
                  settingShow:true,
                })
              }}>
                <View style={{width: 50,
                            height: 50,
                            backgroundColor:'red',
                            }}>
                  {/*//按钮2*/}
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.showCountDownImageShow()}}>
                <View style={{width: 50,
                            height: 50,
                            backgroundColor:'red',
                            }}>
                  {/*//按钮3*/}
                </View>
              </TouchableOpacity>

              {/*wawa detail show*/}
              <Modal
                animationType='slide' //从底部划入
                transparent={true}   //不透明
                visible={this.state.wawaDetialShow} //根据wawaDetialShow 决定是否显示
              >
                <View style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0.5)'
                }}>
                  <View style={{width:screenWidth*300/375,
                              height:screenWidth*320/375,
                              backgroundColor:'white',
                              borderRadius:8,
                              borderWidth:5,
                              borderColor:'#FCCBCB',
                              }}>
                    {/*关闭按钮*/}
                    <View style={{height:50,margin:0, backgroundColor:'#FE867E',}} >
                      <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end'}} activeOpacity={0.5} onPress={()=>{
                      this.setState({
                        wawaDetialShow:false,
                      })
                    }}>
                        <View style={{width: 40,
                                    height: 40,
                                    marginTop:0,
                                    backgroundColor:'#CE5930',
                                    borderRadius:20,
                                      }}>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/*wawa deyail */}
                    <View style={{flex:1,margin:0,backgroundColor:'rgba(0,0,0,0)', justifyContent:'center', alignItems:'center'}}>
                      <View style={{marginTop: 15,marginLeft:27, marginRight:27,marginBottom:15, backgroundColor:'rgba(0,0,0,0)'}}>
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
                          autoplayTimeout={5}
                          onIndexChanged={(index)=>{
                            if(index===2){
                              alert('index = 2')
                            }
                          }}>
                          {
                            this.swiperData.map((item, index) => {
                              return(
                                <View key={index} style={{flex:1,backgroundColor: '#2259A7'}}></View>
                              )
                              //return(
                              //  <TouchableOpacity activeOpacity={1} key={index} style={styles.swipeItem} onPress={() => this.props.navigation.push('NewsSearch', {keyword:item})}>
                              //    {/*                  <Image source={require("./../../assets/images/i_search.png")} resizeMode={'contain'} style={styles.headerSearchImage} />*/}
                              //    <Text style={styles.headerSearchText}>{item}</Text>
                              //  </TouchableOpacity>
                              //)
                            })
                          }
                        </Swiper>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>

              {/*设置页面*/}
              <Modal
                animationType='none' //从底部划入none slide fade
                transparent={true}   //不透明
                visible={this.state.settingShow} //根据wawaDetialShow 决定是否显示
              >
                <View style={{
                              flex:1,
                              //justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0)',
                              flexDirection:'column-reverse',
                }}>

                  <View style={{width:screenWidth-10,
                                height:screenHeight/2,
                                backgroundColor:'#FEF97E',
                                borderTopRightRadius:10,
                                borderTopLeftRadius:10,
                                alignItems:'center',
                                }}>
                    <View style={{backgroundColor:'rgba(0,0,0,0)', height: 20, width: screenWidth }} />
                    {/*设置音效*/}
                    <View style={{width: screenWidth-30,
                                  height:162*screenHeight/667,
                                  backgroundColor:'rgba(252,158,158,1)',
                                  borderRadius:5,
                                  borderWidth:3,
                                  borderColor:'#8f232e',

                    }}>
                      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:30, color:'white', borderStyle:'solid',marginLeft:20}}>音乐</Text>
                        <Slider style={{width:175*screenWidth/375, marginLeft:20}}
                                minimumValue={0}
                                maximumValue={100}
                                value={50}
                                step={1}
                                onSlidingComplete={(value)=>this.setState({musicSoundNum:value})}
                        />
                        <Text> {this.state.musicSoundNum}</Text>
                      </View>
                      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:30, color:'white', borderStyle:'solid',marginLeft:20}}>音效</Text>
                        <Slider style={{width:175*screenWidth/375, marginLeft:20}}
                                minimumValue={0}
                                maximumValue={100}
                                value={50}
                                step={1}
                                onSlidingComplete={(value)=>this.setState({soundEffectNum:value})}
                        />
                        <Text>{this.state.soundEffectNum}</Text>
                      </View>
                    </View>


                    {/*提交机器问题*/}
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        settingShow:false,
                                        submitQueShow:true,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' ,textAlign:'center'}}>提交机器问题</Text>
                      </View>
                    </TouchableOpacity>
                    {/*返回*/}
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        settingShow:false,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' , textAlign:'center'}}>返回</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
              </Modal>


              {/*提交问题*/}
              <Modal
                animationType='none' //从底部划入none slide fade
                transparent={true}   //不透明
                visible={this.state.submitQueShow} //根据wawaDetialShow 决定是否显示
              >
                <View style={{
                              flex:1,
                              //justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0)',
                              flexDirection:'column-reverse',
                }}>
                  {/*问题1*/}
                  <View style={{width:screenWidth-10,
                                height:screenHeight/2,
                                backgroundColor:'#FEF97E',
                                borderTopRightRadius:10,
                                borderTopLeftRadius:10,
                                alignItems:'center',
                                }}>
                    <View style={{backgroundColor:'rgba(0,0,0,0)', height: 40, width: screenWidth }} />
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        submitQueShow:false,
                                        submitQueSucShow:true,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' , textAlign:'center'}}>白屏</Text>
                      </View>
                    </TouchableOpacity>

                    {/*问题2*/}
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        submitQueShow:false,
                                        submitQueSucShow:true,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' , textAlign:'center'}}>卡顿</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        submitQueShow:false,
                                        submitQueSucShow:true,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' , textAlign:'center'}}>爪子卡死</Text>
                      </View>
                    </TouchableOpacity>
                    {/*问题3*/}
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        submitQueShow:false,
                                        submitQueSucShow:true,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{flex:1,fontSize: 25, fontWeight:'bold' ,textAlign:'center'}}></Text>
                      </View>
                    </TouchableOpacity>
                    {/*返回*/}
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{
                                      this.setState({
                                        submitQueShow:false,
                                      })

                    }}>
                      <View style={styles.submitqueViewItemStyle}>
                        <Text style={{fontSize: 25, fontWeight:'bold' , textAlign:'center'}}>返回</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
              </Modal>

              {/*提交问题成功*/}
              <Modal
                animationType='none' //从底部划入
                transparent={true}   //不透明
                visible={this.state.submitQueSucShow} //submitQueSucShow 决定是否显示

              >
                <View style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0.5)'
                }}>
                  <View style={{width:screenWidth*300/375,
                              height:screenWidth*320/375,
                              backgroundColor:'white',
                              borderRadius:8,
                              borderWidth:5,
                              borderColor:'#FCCBCB',
                              justifyContent:'center',
                              alignItems:'center',
                              }}>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={()=>{ this.setState({
                                        submitQueSucShow:false,
                                      })
                    }}>
                      <View style={{width: 130, height: 55, backgroundColor:'#FEFD83', borderRadius:10, borderWidth:3, borderColor:'#8F232E'}}></View>
                    </TouchableOpacity>

                  </View>
                </View>
              </Modal>


            </View>
          </View>
          {/*操作按钮布局*/}
          <View style={styles.optionViewStyle}>
            {
              this.renderOperate()
            }
          </View>


          {/*抓取成功页*/}
          <ModalSimple
            animationDuration={1}
            open={this.state.carbSuccessShow}
            closeOnTouchOutside={false}
            modalDidClose={this.CarbSuccessPageClose}
          >

          </ModalSimple>

          {/*抓取失败页*/}
          <Modal
            animationType='none'
            transparent={true}   //不透明
            visible={this.state.carbWawaFailShow} //submitQueSucShow 决定是否显示
          >
            <View style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0.5)'
                }}>
              <View style={{width:screenWidth*300/375,
                              height:screenWidth*320/375,
                              backgroundColor:'white',
                              borderRadius:8,
                              borderWidth:5,
                              borderColor:'#FCCBCB',
                              justifyContent:'center',
                              alignItems:'center',
                              }}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>{ this.setState({
                                        submitQueSucShow:false,
                                      })
                    }}>
                  <View style={{width: 130, height: 55, backgroundColor:'#FEFD83', borderRadius:10, borderWidth:3, borderColor:'#8F232E'}}></View>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>

          {/*倒计时页面*/}
        <ModalSimple
          animationDuration={1}
          open={this.state.countDownImgShow}
          closeOnTouchOutside={false}
          modalDidClose={this.SimpleModalClose}
        >
          <View style={{
                              flex:1,
                              justifyContent:'center',
                              alignItems:'center',
                              backgroundColor:'rgba(0, 0, 0, 0.5)'
                }}>
            <Image source={{uri:this.state.currentPageImage}} style={{width: screenWidth, height:80}}></Image>
          </View>
        </ModalSimple>
      </SafeAreaView>

      </View>

    )
  }
  showCountDownImageShow(){
    this.setState({
      countDownImgShow:true,
    });
    //设置图片初始值
    this.state.currentPageImage = "img_00.png";
    this.startTimer();
  }
  SimpleModalClose =()=>{
    clearInterval(this.timer1);
  }
  startTimer(){
    this.timer1 = setInterval(()=>{
      var activePage = 0;
      if(this.state.currentPage+1 > 5){
        this.setState({
          countDownImgShow:false,
          currentPage:1,
        })
      }else{
        activePage = this.state.currentPage+1;
      }

      this.setState({
        currentPage:activePage,
      })
      this.state.currentPageImage = "img_0"+activePage+'.png'

    }, 1000)
  }
  //唤醒显示抓取成功页方法
  awakeCarbSuccessPage(){
    this.setState({
      carbSuccessShow:true,
    })
    this.timer2 = setInterval(()=>{
      var activeTime = 5;
      if (this.state.resultPageLeftTime > 0 ){
        activeTime = this.state.resultPageLeftTime-1;
      }else{
        //超时之后，关闭页面，回到最初未预约状态
        this.setState({
          carbSuccessShow:false,//抓取成功也消失
          operateBeginShow:true,//操作按钮预约操作
          operateCarbShow:false,//操作按钮页面显示

        })
      }
      this.setState({
        resultPageLeftTime:activeTime,
      })
    })
  }

  //抓取成功页，页面消失
  CarbSuccessPageClose(){

  }
  renderOperate(){

    //操作按钮出现
    if(!this.state.operateBeginShow&&this.state.operateCarbShow){
      return(
        <View style={{flex:1}}>
          <View style={{flex: 1, flexDirection:'row'}}>
            <View style={{flex:8, flexDirection:'row', justifyContent:'center'}}>
              <View style={{width: 60*screenWidth/375, justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('left')}}>
                  <View style={{width: 60*screenWidth/375, height:65*screenWidth/375,backgroundColor:'red'}}></View>
                </TouchableOpacity>
              </View>

              <View style={{width: 60*screenWidth/375, justifyContent:'space-around'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('up')}}>
                  <View style={{width: 60*screenWidth/375, height:65*screenWidth/375,backgroundColor:'red'}}></View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('down')}}>
                  <View style={{width: 60*screenWidth/375, height:65*screenWidth/375,backgroundColor:'red'}}></View>
                </TouchableOpacity>
              </View>
              <View style={{width: 60*screenWidth/375, justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('right')}}>
                  <View style={{width: 60*screenWidth/375, height:65*screenWidth/375,backgroundColor:'red'}}></View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex:7 , alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('play')}}>
                <View style={{width: 140*screenWidth/375, height:55*screenWidth/375,backgroundColor:'red'}}></View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      )
    }else{}
    //初始界面，存在预约按钮
    return(
    <View style={styles.optionViewStyle}>
      <Text style={{fontSize:14,height: 15, marginTop:22, marginLeft:12,color:'black'}}>排队人数：</Text>
      <View style={{height:65*screenHeight/667,width:screenWidth,backgroundColor:'rgba(0,0,0,0)',position: 'absolute',marginTop:screenHeight/7-(65*screenHeight)/(2*667), justifyContent:'space-around',flexDirection:'row'}}>
        {/*按钮点击进入充值页面*/}
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('进入充值页面')}}>
          <View style={{width: 140*screenWidth/375, height:65*screenHeight/667,backgroundColor:'red'}}>

          </View>
        </TouchableOpacity>
        {/*按钮点击进入预约页面，按钮点击，之后按钮由预约变成排队*/}
          {
            this.renderAppointMentBtn()
          }
      </View>
    </View>

    )
  }
  //预约按钮点击之后改变
  renderAppointMentBtn() {
    if (this.state.appointMentBtnable) {
      return (
        <TouchableOpacity activeOpacity={0.5}
                          //disabled={this.state.appointMentBtnable}
                          onPress={()=>{
                            this.setState({
                              appointMentBtnable:false,
                            })
                          }}>
          <View
            style={{width: 140*screenWidth/375, height:65*screenHeight/667,backgroundColor:'blue',alignItems:'center', justifyContent:'center'}}>
            <Text style={{color: 'white',fontSize:25,fontWeight:('bold','900'),letterSpacing:5}}>预约</Text>
            <Text style={{color: 'white',fontSize:12,fontWeight:('bold','900'),marginTop:3}}>39/次</Text>
          </View>
          </TouchableOpacity>

      )
    }else{
      return (
        <TouchableOpacity activeOpacity={0.5}
                          //disabled={this.state.appointMentBtnable}
                          onPress={()=>{
                            this.setState({
                              appointMentBtnable:true,
                            })
                          }}>
          <View
            style={{width: 140*screenWidth/375, height:65*screenHeight/667,backgroundColor:'grey',alignItems:'center', justifyContent:'center'}}>
            <Text style={{color: 'white',fontSize:25,fontWeight:('bold','900'),letterSpacing:5}}>已预约</Text>
          </View>
          </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',

  },
  safeAreaStyle:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
  },
  //上半部分的页面
  liveViewStyle:{
    flex:7,
    backgroundColor:'#B8BB8C',
    margin:5,
  },
  navigatorViewStyle:{
    width:screenWidth,
    height:44,
    //backgroundColor:'yellow',
    backgroundColor:'rgba(0,0,0,0)',
    //justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  //提交问题页面部分
  //提交问题，每个问题Item的style
  submitqueViewItemStyle:{
    backgroundColor:'white',
    height:44,
    width:screenWidth-20,
    borderRadius:8,
    borderWidth:2,
    borderColor:'#FCDBE0',
    justifyContent:'center',

    marginLeft:10,
    marginRight:10,
    marginTop:10,
    alignItems:'center',
  },

  //下半部分的页面
  optionViewStyle:{
    flex:3,
    backgroundColor:'#FFBA90',
  }

})
