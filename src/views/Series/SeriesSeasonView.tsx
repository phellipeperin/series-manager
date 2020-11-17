import React from 'react';
import { List, Text } from 'react-native-paper';

import SeriesEpisodeView from './SeriesEpisodeView';

const SeriesSeasonView = ({ number }) => {
    const episodeList = [{}, {}, {}, {}, {}, {}];
    
    return (
        <List.Accordion
            id={number}
            title={`Season ${number}`}
        >
            {episodeList.map((episode, index) => (
                <SeriesEpisodeView number={index + 1} />
            ))}
        </List.Accordion>
    );
};

export default SeriesSeasonView;
