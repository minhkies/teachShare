import React from 'react';
import { ScrollView } from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import Card from '../comps/Card';
import posts from '../stores/PostStore';

export default function Home() {
    function renderPosts() {
        return posts.map(data => {
            return <Card data={data} style={HomeStyles.card}/>
        })
    }
    
    return (
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <PageTitle
                title={"Home"}
                msg={"This homepage is tailored for you!"}
            />
            <SearchBar/>
            <SubjectsFilter style={HomeStyles.filter}/>
            {renderPosts()}
        </ScrollView>
    )
}
