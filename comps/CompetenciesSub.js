import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import options from '../data/CoreCompetenciesData';

export default function CompetenciesSub(props){
  return(
      <Modal isVisible={true} coverScreen={true}>
            <Text>Communication</Text>
            <View>
                {
                    options[0].subCategory.map((obj, i)=>{
                        return(
                        <TouchableOpacity>
                            <Text>{obj.sub}</Text>
                        </TouchableOpacity>
                        )
                    })
                }
            </View>
      </Modal>
  )
};
