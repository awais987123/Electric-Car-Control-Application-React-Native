import React,{useState} from 'react'
import {ScrollView, View, Text, ImageBackground, Image ,TouchableOpacity} from 'react-native'
import styles from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faFan, faKey, faLock, faToolbox, faUnlockAlt} from '@fortawesome/free-solid-svg-icons';
import Menu from '../../componenets/Menu/index';
export default function index() {
    const [locked, setLocked]=useState(false);
    const clickLock =()=>{
if(locked){
    setLocked(false);
}else{
    setLocked(true);
}
    };
    return (
        <View  style={styles.carContainer}>
        <ImageBackground 
        source={require("../../assets/background.png")}
        style={styles.Backgroundimage}

        />
        <View style={styles.header}>
        <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon}icon={faCog} size={24} />
            </TouchableOpacity>

            <Text style={styles.header_title}>My Model 3</Text>
            <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} 
            icon={faToolbox} size={24}/>
            </TouchableOpacity>
            </View>
<View style={styles.b_section}>
<Image 
source={require("../../assets/battery.png")}
style={styles.battery}
/>
<Text style={styles.b_text}>150 mi</Text>
</View>
<View>
</View>

<View style={styles.status}>
<Text style={styles.s_text}>
Parked
</Text>
</View>
<ScrollView>
<View style={styles.controls}>
<TouchableOpacity>
<View style={styles.controlButton}>
<FontAwesomeIcon style={styles.icon}icon={faFan} size={24} />
</View>
</TouchableOpacity>
<TouchableOpacity>
<View style={styles.controlButton}>
<FontAwesomeIcon style={styles.icon}icon={faKey} size={24} />
</View>
</TouchableOpacity>
<TouchableOpacity
onPress={clickLock}
>
<View style={styles.controlButton}>
<FontAwesomeIcon style={styles.icon}icon={locked? faLock: faUnlockAlt} size={24} />
</View>
</TouchableOpacity>
</View>
<Menu />
</ScrollView>
        </View>
    )
}
