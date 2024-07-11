import React, { useContext } from 'react';
import { View } from 'react-native';
import { SearchService, Map } from 'ss-map';
import MapboxGL from '@react-native-mapbox-gl/maps';
export const MapScreen = () => {
    const {
        mapRef,
        camera,
        userLocation,
    } = useContext(Map.MapContext);
    // const vehicleFeatureCollection = () => ({
    //     type: 'FeatureCollection',
    //     features: vehiclesStore.vehiclesList.map((x: any, index: number) =>
    //         (
    //             {
    //                 type: 'Feature',
    //                 id: index,
    //                 properties: {
    //                     vehicle_plate_number: x.vehicle_plate_number,
    //                     driving: x.driving,
    //                     inactive: x.inactive,
    //                     online: x.online,
    //                     offline: x.offline,
    //                     icon: x.driving === 1 ? 'vehiclegreen' : x.online === 1 ? 'vehicleblue' : x.inactive === 1 ? 'vehiclered' : 'vehiclegray',
    //                 },
    //                 geometry: {
    //                     type: 'Point',
    //                     coordinates: [x.longitude, x.latitude],
    //                 },
    //             }
    //         ))
    //     ,
    // });
    // <MapboxGL.ShapeSource
    //             id="ShapeSourceVehicle"
    //             shape={featureCollection}
    //             onPress={(value) =>
    //             {
    //             }}
    //         >
    //             <MapboxGL.SymbolLayer
    //                 id="vehicle-layer"
    //                 style={{
    //                     iconAllowOverlap: true,
    //                     iconImage: ['get', 'icon'],
    //                 }}
    //             />
    return (
        <View style={{ flex: 1 }}>
            <Map
            overrideParams={{ RELATIVE_URL: 'https://testing.grow-matic.com', API_KEY: 'ed54ebec-d746-4685-a7da-8fbf70f43456'}}
            defaultLocation={[77.208889, 28.613889]}
            zoomLevel={14}
            hideUserLocation={false}
            floatingMyLocation
            mapKey={ 'bearer FmZJjzEqzHX1ZOp67-IWffug6xXCWxFGEnDnzrYO9sb0RxaDwieum9MSkO9cOEYO7SItQFmNEENRvEPe5Ka_irHdQoceCcw4sUeSafnff9zvDAHZXWO4toRq91ECAct-1hnW8-lZy3CWLH6MM2Tn8EarMSVgQrxzgEoRNyHMTzgvuxX0xTysF_PQWtraWAURL8tohvXLxZ2R8TXetoMtTSdvsKmv7MbOwqn5z5lGtgGeAUM4qGQzyPejCGAi_BfvEAhRPFEZ-qZyd_A1DgRyTYxioAMqtgnyG6WJQwDasvdsXsE0qO-vSpEr2Q1ZCahEieKm6h8pCcFBOlnjYrVBjjhdlfTIrDU_RsznqiUM8jK1chQBBaZQhoOPZssbNAGoCQQLLXKt7mcSbhCy9ej1eIhONOxemSJwY71QCmqsvEJHSz2ftRhgRMUnpeRUBw-552OwMw' }
            >
                <Map.SearchLocationCore />
                <React.Fragment>
                    <MapboxGL.ShapeSource
                    id={'point-on-map'}
                    shape={{ coordinates: [77.208889, 28.613889], 'type': 'Point' }}
                    >
                    <MapboxGL.SymbolLayer
                        layerIndex={99000}
                        style={{ iconImage: require('./../images/poi-cyan.png'), iconTranslateAnchor: 'map', iconOffset: [0, -15],iconAllowOverlap: true }}
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
        </View>
    );
}