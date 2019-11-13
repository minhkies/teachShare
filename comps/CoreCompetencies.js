import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import options from '../data/CoreCompetenciesData';


export default function CoreCompetenciesSelections() {
    let [selected, setSelected] = useState([false, false, false]);
    let initSelect;
    let tempStyles = [];
    let [selectedStyles, setSelectedStyles] = useState([CoreCompetenciesStyles.btnCommunication, CoreCompetenciesStyles.btnThinking, CoreCompetenciesStyles.btnSocial]);
    let [clicked, setClicked] = useState(false);
    let [currentCore, setCurrentCore] = useState();
    let [currentSub, setCurrentSub] = useState();
    let [currentPopup, setCurrentPopup] = useState(0);
    // let clicked=false;
    let CoreCompetencies = ({name, i}) => {
        return (
            <TouchableOpacity
                style={[CoreCompetenciesStyles.btn, selectedStyles[i]]}
                onPress={() => {
                    if (selectedStyles[i]===options[i].styles[0]){
                        setCurrentCore(i);
                        setClicked(!clicked);
                        setCurrentPopup(1);
                    } else {
                        ColorChange(i);
                    }
                }}
            >
                <Text style={selectedStyles[i]}>{name}</Text>
            </TouchableOpacity>
        );
    };

    function ColorChange(i) {
        initSelect = selected;
        initSelect[i] = !initSelect[i];
        setSelected(initSelect);
        for (let x = 0; x < selected.length; x++) {
            selected[x] ? (tempStyles[x] = options[x].styles[1]) : tempStyles[x] = options[x].styles[0];

        }
        setSelectedStyles(tempStyles);
    }

    let ShowPopup = () => {
        if (typeof (currentCore) == 'number') {
            return (
                <Modal
                    isVisible={clicked}
                    coverScreen={true}
                    style={CoreCompetenciesStyles.modalPopup}
                >
                    <PopupContent
                        screen = {currentPopup}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setClicked(!clicked);
                        }}
                    >
                        <Text>CLOSE</Text>
                    </TouchableOpacity>
                </Modal>
            );
        } else {
            return null;
        }
    };

    let PopupContent = ({screen}) => {
        if (screen===1){
            return(
                <View style={CoreCompetenciesStyles.popupContentWrapper}>
                    <View style={CoreCompetenciesStyles.popupHeadingWrapper}>
                        <Text style={CoreCompetenciesStyles.popupHeading}>{options[currentCore].name}</Text>
                        <Text style={CoreCompetenciesStyles.popupDesc}>Please select a sub-competency</Text>
                    </View>
                    <View style={CoreCompetenciesStyles.popupSelectionsWrapper}>
                        {
                            options[currentCore].subCategory.map((obj, ind) => {
                                return (
                                    <TouchableOpacity
                                        style={[CoreCompetenciesStyles.popupSubCoreBtn, selectedStyles[currentCore]]}
                                        onPress={()=>{
                                            setCurrentPopup(2);
                                            setCurrentSub(ind);
                                        }}
                                    >
                                        <Text
                                            style={selectedStyles[currentCore]}
                                        >{obj.sub}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </View>
            )
        } else {
            return(
                <View style={CoreCompetenciesStyles.popupContentWrapper}>
                    <View style={CoreCompetenciesStyles.popupHeadingWrapper}>
                        <Text style={CoreCompetenciesStyles.popupHeading}>{options[currentCore].subCategory[currentSub].sub}</Text>
                        <Text style={CoreCompetenciesStyles.popupDesc}>Please select a profile level</Text>
                    </View>
                    <View style={CoreCompetenciesStyles.popupSelectionsWrapper}>
                        {
                            options[currentCore].subCategory[currentSub].profiles.map((obj, ind) => {
                                return (
                                    <TouchableOpacity
                                        style={[CoreCompetenciesStyles.popupProfileSelectionsWrapper, options[currentCore].styles[0]]}
                                        onPress={()=>{
                                            ColorChange(currentCore);
                                            setClicked(!clicked);
                                        }}
                                    >
                                        <View style={[CoreCompetenciesStyles.popupProfileLevels, options[currentCore].styles[1]]}>
                                            <Text style={CoreCompetenciesStyles.popupProfileLevelsTxt}>{obj.level}</Text>
                                        </View>
                                        <Text style={CoreCompetenciesStyles.popupProfileDesc}>{obj.desc}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </View>
            )
        }

    };

    return (
        <View style={CoreCompetenciesStyles.wrapper}>
            {
                options.map((obj, i) => {
                    return (
                        <CoreCompetencies
                            key={i}
                            name={obj.name}
                            i={i}
                        />
                    );
                })
            }
            <ShowPopup/>
        </View>
    );
}
