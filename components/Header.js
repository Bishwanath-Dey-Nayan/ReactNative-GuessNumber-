import React from 'react';
import {StyleSheet ,Text, View} from 'react-native';

const Header = props =>
{
  return (
      <View style={sytles.header}>
          <Text style={sytles.headerTitle}>{props.title}</Text>
      </View>
  )
}

const sytles = StyleSheet.create({
header:{
    width:'100%',
    height:90,
    paddingTop:35,
    backgroundColor:'#f7287b',
    alignItems:'center',
    justifyContent:'center'
    
},
headerTitle:{
    color:'black',
    fontSize:18
}
});

export default Header;