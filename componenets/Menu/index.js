import React from 'react';
import { View, Text, TouchableOpacity,ImageBackground, Image,  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from '../../componenets/Menu/Style';
import items from './items';
export default function index() {
    return (
        <View style={styles.menuItems}>
        {items.map(item => (
            <TouchableOpacity key={item.id}>
                <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24}/>
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>{item.title}</Text>
                        {item.subTitle && (
                            <Text style={styles.subTitle}>{item.subTitle}</Text>
                        )}
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon} icon={ faChevronRight } size={24}/>
                </View>
            </TouchableOpacity>
        ))}
    </View>
    )
}
