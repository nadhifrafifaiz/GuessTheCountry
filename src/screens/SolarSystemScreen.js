import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';



const SolarSystemScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'pink' }}>
            <Text style={{ color: 'red' }} >Solar System</Text>

            <View style={{ flexDirection: 'row', alignItems:'center', backgroundColor:'salmon' }}>
                <Image source={require('../../assets/images/earth.png')}
                    style={{ width: 100, height: 100 }} />

                <View>
                    <Text>Earth</Text>
                    <Text>The third in the solar system  in the solar system  in the solar system in the solar system in the solar system</Text>
                </View>


            </View>


        </View>
    )
};
export default SolarSystemScreen;