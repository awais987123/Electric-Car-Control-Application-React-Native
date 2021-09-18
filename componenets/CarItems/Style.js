import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
carContainer:{
    width:"100%",
    height:"100%",
    backgroundColor:"yellow",
},
header:{
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
},
header_title :{
color:"white",
fontSize:16,
fontWeight:"bold",
justifyContent:"center",
alignItems:"center",

},
icon:{
    color:"white",
},
Backgroundimage:{
height:"100%",
width:"100%",
resizeMode:"cover",
position:"absolute",
},
b_section:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
},
battery:{
    height:26,
    width:70,
    marginRight:12,

},
b_text:{
    color:"white",
    fontSize:35,
    fontWeight:"bold",

},
status:{
    alignItems:"center",
},
s_text:{
color:"white",
fontSize:15,
fontWeight:"bold",
},
controls:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:120,
},
controlButton:{
    borderWidth:1,
    borderColor:"white",
    borderRadius:50,
    padding:10,
    marginLeft:25,
}
})

export default styles;