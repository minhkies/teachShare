import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CardStyles from '../compstyles/CardStyles';
import UserAvatar from './UserAvatar';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider
} from 'react-native-popup-menu';

const CardIconLikeCount = 1;
const CardIconViewCount = 2;
const CardIconShareCount = 3;
const CardIconCommentCount = 4;

export default function Card({data, style}) {

    const CardIcon = ({type, text}) => {
        function getIcon(type) {
            if (type === CardIconViewCount) {
                return require("../media/icon/view.png");
            }

            if (type === CardIconLikeCount) {
                return require("../media/icon/like.png");
            }

            if (type === CardIconShareCount) {
                return require("../media/icon/share.png");
            }

            if (type === CardIconCommentCount) {
                return require("../media/icon/comment.png");
            }
        }

        return (
            <View style={CardStyles.cardIconWrapper} >
                <Image style={CardStyles.cardIconImg} source={getIcon(type)}/>
                <Text style={CardStyles.cardIconTxt}>{text}</Text>
            </View>
        )
    };

    return(
        <MenuProvider>
        <View style={[CardStyles.container, style]}>
            <View style={CardStyles.cardTitleContainer}>
                <UserAvatar user={data.user}/>
                <Text style={CardStyles.cardTitleTxt}>{data.user.name}</Text>
                <Menu>
                    <MenuTrigger>
                        <Image style={CardStyles.cardTitleBtnImg} 
                               source={require("../media/icon/moreVertical.png")}/>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                        <MenuOption onSelect={() => alert(`View Profile`)} text="View Profile" />
                        <MenuOption onSelect={() => alert(`Report`)} text="Report" />
                    </MenuOptions>
                </Menu>
            </View>
            
            <Image style={CardStyles.img} source={{url: data.img}} />
            <Text style={CardStyles.titleTxt}>{data.title}</Text>
            <Text style={CardStyles.description}>{data.description}</Text>
            <Text style={CardStyles.content}>{data.content}</Text>

            <View style={CardStyles.cardIconsWrapper}>
                <CardIcon type={CardIconLikeCount} text={data.likeCount}/>
                <CardIcon type={CardIconViewCount} text={data.viewCount}/>
                <CardIcon type={CardIconShareCount} text={data.shareCount}/>
                <CardIcon type={CardIconCommentCount} text={data.commentCount}/>
                <Text style={CardStyles.CardIconTime}>{data.createdTime}</Text>
            </View>
        </View>
        </MenuProvider>
    )
}
