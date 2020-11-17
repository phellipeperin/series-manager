import React, { useState } from 'react';
import { Checkbox, List } from 'react-native-paper';

const SeriesEpisodeView = ({ number }) => {
    const [checked, setChecked] = useState(false);
    
    return (
        <>
            <List.Item
                title={`Episode ${number}`}
                left={props => <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />}
            />
        </>
    );
};

export default SeriesEpisodeView;
