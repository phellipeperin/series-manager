import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
    return (
        <Appbar>
            <Appbar.Content title='Series Manager' />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar>
    )
};

export default AppBar;
