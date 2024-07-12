import React, { useContext } from 'react';
import { View } from 'react-native';
import { SearchService, Map } from 'ss-map';
import MapboxGL from '@react-native-mapbox-gl/maps';
export const MapScreen = () => {
    const {
        mapRef, // ref for MapBoxGL.MapView; for func like: mapRef.current.getZoom(), mapRef.current.getCenter()
        camera, // ref for MapBoxGL.Camera; for func like: camera.currentflyTo, camera.current.moveTo, camera.current.zoomTo
        userLocation,
    } = useContext(Map.MapContext);
    
    return (
        <View style={{ flex: 1 }}>
            <Map
            overrideParams={{ API_KEY: 'ed54ebec-d746-4685-a7da-8fbf70f43456'}}
            defaultLocation={[77.208889, 28.613889]}
            zoomLevel={14}
            hideUserLocation={false}
            floatingMyLocation
            >
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
        </View>
    );
}