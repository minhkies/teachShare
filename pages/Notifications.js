import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from '../styles/NotificaitionsStyles';

function NotificationItem(props) {
    const style = {
        ...styles.notiListItem,
    };

    if (props.active) {
        style.borderStyle = 'solid';
        style.borderWidth = 1;
        style.borderColor = 'tomato';
    }

    let imageSource;
    if (props.type === 'appreciations') {
        imageSource = require('../Img/appreciations.png');
    } else if (props.type === 'download') {
        imageSource = require('../Img/download.png');
    } else if (props.type === 'comments') {
        imageSource = require('../Img/comments.png');
    }
    
    return(
        <TouchableOpacity style={style} onPress={() => props.onPress(props.id)}>
            <Image
                style={styles.img}
                source={imageSource}
            />
            <Text style={styles.bodyletter}>{props.body}</Text>
        </TouchableOpacity>
    );
}

function Notifications(){
    const [selectedId, setSelectedId] = useState('');
    
    const notifications = [
        {
            id: '1',
            body: '90 new appreciations for our posts',
            type: 'appreciations',
        },
        {
            id: '2',
            body: '90 new download for our posts',
            type: 'download',
        },
        {
            id: '3',
            body: '90 new comments for our posts',
            type: 'comments',
        },
    ];

    const onPress = (id) => {
        setSelectedId(id);
    };
    
    return(
        <ScrollView style={styles.container}>
{/* Title and Sub */}
            <View style={styles.header}>
                <Text style={styles.title}>Notifications</Text>
                <Text style={styles.subtitle}>Good news come here first</Text>
            </View>

{/* Notification for Users */}
            <View style={styles.notiList}>

                <FlatList
                    data={notifications}
                    renderItem={({ item }) => (
                        <NotificationItem
                            active={selectedId === item.id}
                            body={item.body}
                            id={item.id}
                            type={item.type}
                            onPress={onPress}
                        />
                    )}
                    keyExtractor={item => item.id}
                />

            </View>
        </ScrollView>
    )
}


export default Notifications;