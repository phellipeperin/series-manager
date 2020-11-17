import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

interface Route {
    key: string;
    title: string;
    icon: string;
    component: object;
}

const Footer = ({ routes }) => {
    const [index, setIndex] = useState(0);
    const sceneMap = {};
    routes.forEach((route: Route) => {
        sceneMap[route.key] = route.component;
    });
    const renderScene = BottomNavigation.SceneMap(sceneMap);

    return (
        <BottomNavigation
            shifting
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Footer;
