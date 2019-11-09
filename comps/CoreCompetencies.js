import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import options from '../data/CoreCompetenciesData';
import CompetenciesSub from './CompetenciesSub';


export default function CoreCompetenciesSelections() {
    let [selected, setSelected] = useState([false, false, false]);
    let initSelect;
    let tempStyles = [];
    let [selectedStyles, setSelectedStyles] = useState([CoreCompetenciesStyles.btnCommunication, CoreCompetenciesStyles.btnThinking, CoreCompetenciesStyles.btnSocial]);
    let CoreCompetencies = ({name, i}) => {
        return (
            <TouchableOpacity
                style={[CoreCompetenciesStyles.btn, selectedStyles[i]]}
                onPress={()=>{
                    CompetenciesSub(i);
                    // ColorChange(i);
                }}
            >
                <Text style={selectedStyles[i]}>{name}</Text>
            </TouchableOpacity>
        );
    };

    function ColorChange(i) {

        initSelect=selected;
        initSelect[i] = !initSelect[i];
        setSelected(initSelect);
        for (let x=0; x<selected.length; x++){
            selected[x] ? tempStyles[x] = options[x].styles[1] : tempStyles[x] = options[x].styles[0]
        }
        setSelectedStyles(tempStyles);
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
        </View>
    );
}
