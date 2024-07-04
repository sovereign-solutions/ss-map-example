import React from 'react';
import { View, LogBox, StatusBar, Text as RNText } from 'react-native';
import { Text, Map } from 'ss-map';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { SearchService } from 'ss-map'
// MapboxGL.setAccessToken('pk.eyJ1IjoidGhhbmdkdCIsImEiOiJja3FhbWFuYzEwOGNxMndxN2N5aXhueTcxIn0.fT1mYkCCZZ9EIka_JMFtww');
// MapboxGL.setTelemetryEnabled(false);
LogBox.ignoreAllLogs(true);
// StatusBar.setBarStyle('dark-content');
const MyBase = () => {
  // MapboxGL.addCustomHeader('Authorization', 'bearer eZTGGh50AalxurIPK_AVaFZ1l9scBGD9HTtw_uL9ILMSGSpkY8UDxMAp3bTGfVVL8OQftLCmQ6e8Ut-FhAOk12z8gj1u_-Zlp_1Cv_L6s7IKqBkWzJZR8ct2O0o0VFG_q6p-nlDEHQQnM8UP7CTB3vGj58NB5DcEtW4YGvRArunyP3cvOM5kOJ4tIDt1ZZIsltxmuxBGn5O-oOn4tl-0CUIwDFq4R0t3U1dJiAfLVbSeww3UxV-29K3LgLv6A9jUcXcyC-X0YnXkJPlBkx3HU2f7v4Li9KqYjj4JlT1gwIlDcyM0ElzcnQggbZfK3ImHGQSQAYBDHhim3Rs0eNXlVzFbxqPJvu-jB-1-JOCv6J5OSzRHStV2CD389fvCuKBkJEl0kmydL0_u53Wf1wTPzcyMPGPzKWykwPaIPBKgLcIGs_zLeulC2eXErH89stVSLOo2ZQ');
  return (
    <View style={{ flex: 1 }}>
      <Text title={'hello2'} />
      {/* <RNText>hello</RNText> */}
      <Map.AllProvider >              
        <Map
          overrideParams={{ RELATIVE_URL: 'https://testing.grow-matic.com' }}
          zoomLevel={14}
          type={2}
          hideUserLocation={false}
          floatingMyLocation
          mapKey={ 'bearer eZTGGh50AalxurIPK_AVaFZ1l9scBGD9HTtw_uL9ILMSGSpkY8UDxMAp3bTGfVVL8OQftLCmQ6e8Ut-FhAOk12z8gj1u_-Zlp_1Cv_L6s7IKqBkWzJZR8ct2O0o0VFG_q6p-nlDEHQQnM8UP7CTB3vGj58NB5DcEtW4YGvRArunyP3cvOM5kOJ4tIDt1ZZIsltxmuxBGn5O-oOn4tl-0CUIwDFq4R0t3U1dJiAfLVbSeww3UxV-29K3LgLv6A9jUcXcyC-X0YnXkJPlBkx3HU2f7v4Li9KqYjj4JlT1gwIlDcyM0ElzcnQggbZfK3ImHGQSQAYBDHhim3Rs0eNXlVzFbxqPJvu-jB-1-JOCv6J5OSzRHStV2CD389fvCuKBkJEl0kmydL0_u53Wf1wTPzcyMPGPzKWykwPaIPBKgLcIGs_zLeulC2eXErH89stVSLOo2ZQ' }
        >
          <Map.SearchLocationCore />
          <React.Fragment>
            <MapboxGL.ShapeSource
              id={'point-on-map'}
              shape={{ coordinates: [77.208889, 28.613889], 'type': 'Point' }}
            >
              <MapboxGL.SymbolLayer
                  layerIndex={99000}
                  style={{ iconImage: require('./modules/ss-map/src/images/poi-cyan.png'), iconTranslateAnchor: 'map', iconOffset: [0, -15],iconAllowOverlap: true }}
                  id={'selectPointSymbol'}
              />
            </MapboxGL.ShapeSource>
          </React.Fragment>
        </Map>
      <Map.SearchLocationControl
              locationSearchFunction={new SearchService().searchGeoLocation}
              bgColor={'#FCFDFE'}
              heightTxtInput={40}
              borderTxtInputColor={'#979797'}
              displayButton
          />
      </Map.AllProvider>
      
    </View>
  );
};
export default MyBase;
