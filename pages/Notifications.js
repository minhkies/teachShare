import React from 'react';
import {View, Text} from 'react-native';

export default function Notifications(){
    return(
        <View>

{/* Title and Sub */}
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subtitle}>Good news come here first</Text>

{/* Notification for Users */}
            <Text style={styles.bodyletter}>
                <Image
                    style={styles.img}
                    source={require('../Img/appreciations.png')}
                />
                90 new appreciations for our posts
            </Text>
            <Text style={styles.bodyletter}>
                <Image
                    style={styles.img}
                    source={require('../Img/download.png')}
                />
                90 new downloads on your posts
            </Text>
            <Text style={styles.bodyletter}>
                <Image
                    style={styles.img}
                    source={require('../Img/comments.png')}
                />
                90 new comments on our posts
            </Text>
        </View>
    )
}

// Style for this Page

const styles = StyleSheet.create({
    title: {
      fontSize: 29,
      fontWeight: 'bold',
      marginTop: 35,
      marginLeft: 15,
    },
    subtitle: {
        fontSize: 8,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    bodyletter: {
        fontSize: 12,
        paddingTop: 10,

        alignItems:'center', 
        justifyContent:'center',
    },
    img: {
        paddingTop: 10,
        width: 25, 
        height: 25,
    },

  });