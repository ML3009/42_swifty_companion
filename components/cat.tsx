import React from 'react';
import {Text} from 'react-native';

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    const name = 'Héra'
    return (
        <Text>Hello, I am your Cat {props.name} !</Text>
    )
};

export default Cat;