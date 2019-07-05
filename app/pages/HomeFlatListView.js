/**
 * Created by yanglele on 2018/7/2.
 */
import React,{Component} from 'react'
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  ListView,
  Alert,
  Button,
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

var clos = 2;
var cellWH = 166*(screenWidth-2*8)/(375 - 2*8);
var vMargin = (screenWidth -cellWH * clos - 2*8)/(clos + 1);
var hMargin = 8;

var infoData = require('./../data/homeInfo.json');

export default class HomeFlatListView extends Component{

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

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.listBackStyle}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            contentContainerStyle={styles.listViewStyle}
          />
          {/*<Text style={styles.textStyle}> {this.props.requestCode}</Text>*/}
        </View>

      </View>
    )
  }
  //单独的一个cell
  renderRow(rowData){
    return(
      //onPress={()=>{ this.pushCarbToyDetial(rowData)}}
      <TouchableOpacity activeOpacity={0.5}
                        onPress={()=>{
                              this.props.navigation.navigate('CarbWawaPage',{
                              wawaInfo:rowData,
                          })
                        }}>
      <View style={styles.innerViewStyle}>
          {/*<Image source={{uri:rowData.icon}} style={styles.iconStyle}/>*/}
          <View style={styles.iconStyle} />
          <View style={styles.infoViewStyle}>
            {/*娃娃的名称*/}
            <Text style={styles.nameStyle}>{rowData.title}</Text>
            {/*每次抓去的金额*/}
            <View style={styles.goldViewStyle}>
              <Text>$</Text>
              <Text>{rowData.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue',
  },
  listBackStyle:{
    flex:1,
    backgroundColor:'orange',
    marginLeft:8,
    marginTop:8,
    marginRight:8,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    //position: 'absolute',
    //left:8,
    //top:8,
    //right:8,
  },
  listViewStyle:{
    //主轴方向
    flexDirection:'row',
    //多行显示
    flexWrap:'wrap',
  },
  innerViewStyle:{
    width:cellWH,
    height:cellWH,
    marginLeft:vMargin,
    marginTop:hMargin,
    alignItems:'center',
    borderRadius:8,
  },
  iconStyle:{
    width:cellWH,
    height:cellWH,
    backgroundColor:'red',
    borderRadius:8,
  },
  infoViewStyle:{
    height:50,
    width:cellWH,
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FE7E8D',
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
  },
  nameStyle:{
    height:15,
    width:100,
    fontSize:14,
    //position:'absolute',
    marginLeft:10,
    color:'white',

  },
  goldViewStyle:{
    width:46,
    height:30,
    borderRadius:15,
    backgroundColor:'white',
    marginRight:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  textStyle:{
    fontSize:35,
    color:'#f8f8f8',
  },
})

