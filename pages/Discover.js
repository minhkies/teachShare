import React from 'react';
import {ScrollView, Text} from 'react-native';
import PageTitle from '../comps/PageTitle';
import SearchBar from '../comps/SearchBar';
import Chart from '../comps/Chart';
import Card from '../comps/Card';
import DiscoverStyles from '../styles/DiscoverStyles';
import posts from '../stores/PostStore';

export default function Discover(){
    
    function renderCards() {
        return posts.map(data => {
            return <Card data={data} style={DiscoverStyles.card}/>
        })
    }

    return(
        <ScrollView style={DiscoverStyles.container}>
            <PageTitle
                title={"Discover"}
                msg={"Knowledge is infinite!"}
            />
            <SearchBar/>
            <Text style={DiscoverStyles.text}>teachShare Chart</Text>
            <Chart style={DiscoverStyles.chart} />
            <Text style={DiscoverStyles.text}>Discover other projects</Text>
            {renderCards()}
        </ScrollView>
    )
}
