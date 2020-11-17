import React from 'react';
import { List } from 'react-native-paper';

import SeriesSeasonView from './SeriesSeasonView';

const SeriesView = () => {
    const seasonList = [{id: 1}, {id: 2}, {id: 3}];

    return (
        <>
            <List.AccordionGroup>
                {seasonList.map((season) => (
                    <SeriesSeasonView number={season.id} />
                ))}
            </List.AccordionGroup>
        </>
    );
};

export default SeriesView;
