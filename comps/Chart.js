import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import ChartStyles from '../compstyles/ChartStyles';
import charts from '../stores/ChartStore';

export default function Chart({style}) {
    
    function renderOptions() {
        return charts.map((obj, ind)=> {
            return (
                <TouchableOpacity style={[ChartStyles.rect, {backgroundColor: obj.color}]}
                                  key={ind}
                                  onPress={() => {
                                      HandleClick(i)
                                  }}>
                    <Text style={ChartStyles.txt}>
                        {obj.label}
                    </Text>
                </TouchableOpacity>
            )
        });
    }

    let HandleClick = (i) => {

    };

    return (
        <View style={[ChartStyles.view, style]}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={ChartStyles.scrollView}>
                {renderOptions()}
            </ScrollView>
        </View>
    )
}
