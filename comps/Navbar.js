import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import NavbarStyles from '../compstyles/NavbarStyles';
import {Actions} from 'react-native-router-flux';

export default function Navbar(props) {

    let [home, setHome] = useState(true);
    let [discover, setDiscover] = useState(false);
    let [create, setCreate] = useState(false);
    let [notifications, setNotifications] = useState(false);
    let [more, setMore] = useState(false);

    let data = [
        {
            "img": null,
            "lbl": null,
            "page": "home",
            "hook": setHome,
        },
        {
            "img": null,
            "lbl": null,
            "page": "discover",
            "hook": setDiscover,
        },
        {
            "img": null,
            "lbl": null,
            "page": "createPost",
            "hook": setCreate,
        },
        {
            "img": null,
            "lbl": null,
            "page": "notifications",
            "hook": setNotifications,
        },
        {
            "img": null,
            "lbl": null,
            "page": "more",
            "hook": setMore,
        },
    ];
    function falseEverything() {
        setHome(false);
        setDiscover(false);
        setCreate(false);
        setNotifications(false);
        setMore(false);
    }

    if (home===true){
        data[0].img = <Image style={NavbarStyles.icon} source={require('../media/icon/home-selected.png')}/>;
        data[0].lbl = <Text style={NavbarStyles.txtSelected}>Home</Text>;
    } else {
        data[0].img = <Image style={NavbarStyles.icon} source={require('../media/icon/home.png')}/>;
        data[0].lbl = <Text style={NavbarStyles.txt}>Home</Text>;
    }

    if (discover===true){
        data[1].img = <Image style={NavbarStyles.icon} source={require('../media/icon/discover-selected.png')}/>;
        data[1].lbl = <Text style={NavbarStyles.txtSelected}>Discover</Text>;
    } else {
        data[1].img = <Image style={NavbarStyles.icon} source={require('../media/icon/discover.png')}/>;
        data[1].lbl = <Text style={NavbarStyles.txt}>Discover</Text>;
    }

    if (create===true){
        data[2].img = <Image style={NavbarStyles.icon} source={require('../media/icon/create-selected.png')}/>;
        data[2].lbl = <Text style={NavbarStyles.txtSelected}>Create</Text>;
    } else {
        data[2].img = <Image style={NavbarStyles.icon} source={require('../media/icon/create.png')}/>;
        data[2].lbl = <Text style={NavbarStyles.txt}>Create</Text>;
    }

    if (notifications===true){
        data[3].img = <Image style={NavbarStyles.icon} source={require('../media/icon/notification-selected.png')}/>;
        data[3].lbl = <Text style={NavbarStyles.txtSelected}>Notifications</Text>;
    } else {
        data[3].img = <Image style={NavbarStyles.icon} source={require('../media/icon/notification.png')}/>;
        data[3].lbl = <Text style={NavbarStyles.txt}>Notifications</Text>;
    }

    if (more===true){
        data[4].img = <Image style={NavbarStyles.icon} source={require('../media/icon/more-selected.png')}/>;
        data[4].lbl = <Text style={NavbarStyles.txtSelected}>More</Text>;
    } else {
        data[4].img = <Image style={NavbarStyles.icon} source={require('../media/icon/more.png')}/>;
        data[4].lbl = <Text style={NavbarStyles.txt}>More</Text>;
    }

    let MenuOptions = ({ind, img, lbl, page, hook}) => {
        return(
            <TouchableOpacity
                style={NavbarStyles.iconWrapper}
                onPress={()=>{
                    falseEverything();
                    hook(true);
                    Actions[page]();
                }}
            >
                {img}
                {lbl}
            </TouchableOpacity>
        )
    };

    if (props.OS==="android"){
        return(
            <View style={NavbarStyles.wrapper}>
                {
                    data.map((obj, ind)=>{
                        return(
                            <MenuOptions
                                key={ind}
                                img={obj.img}
                                lbl={obj.lbl}
                                page={obj.page}
                                hook={obj.hook}
                            />
                        )
                    })
                }
            </View>
        )
    }


}
