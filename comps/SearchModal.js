import React from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import SearchBar from './SearchBar';

export default function SearchModal({visible, setVisible}) {
    return(
        <Modal
            coverScreen={true}
            isVisible={visible}
        >
            <SearchBar/>
        </Modal>
    )
}
