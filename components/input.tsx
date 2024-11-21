import React from 'react';
import {Text, TextInput, View} from 'react-native';

const InputComponent = ()  => {
    return (
        <View>
            <Text>Hello, I am...</Text>
            <TextInput
                style={{
                    justifyContent: 'center',
                    textAlign:'center',
                    alignItems: 'center',
                    height: 40,
                    borderColor: 'blue',
                    borderWidth:3,
                    borderRadius:10,
                    marginBlockStart:20,

                }}
                defaultValue="Name me!"
            />
        </View>
    )
}

export default InputComponent;