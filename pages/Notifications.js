import React from 'react';
import {View, ScrollView} from 'react-native';
import NotificationsTags from '../comps/NotificationsTag';
import PageTitle from '../comps/PageTitle';
import NotificationsStyles from "../styles/NotificationsStyles"

export default function Notifications() {
    let example = [
        {
            type: "appreciate",
            data: "25"
        },
        {
            type: "download",
            data: "30"
        },
        {
            type: "comment",
            data: "40"
        },
        {
            type: "reply",
            data: "Solaleh Roumi"
        }
    ];

    return(
        <ScrollView style={NotificationsStyles.wrapper}>
            <PageTitle
                title={"Notification"}
                msg={"Good news come here first"}
            />
        {
            example.map((obj, i) => {
                return(
                    <NotificationsTags
                        key={i}
                        type={obj.type}
                        data={obj.data}
                    />
                )
            })
        }
        </ScrollView>
    )
}
