import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';

export default function Home(){
    return(
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <PageTitle
                title={"Home"}
                msg={"This homepage is tailored for you!"}
            />
            <SearchBar/>
            <SubjectsFilter/>
        </ScrollView>
    )
}
