import React, { useContext } from 'react';
import { View } from 'react-native';
import { Map } from 'ss-map';
import MapboxGL from '@react-native-mapbox-gl/maps';
export const MapScreen = () => {
    const {
        mapRef, // ref for MapBoxGL.MapView; for func like: mapRef.current.getZoom(), mapRef.current.getCenter() . See MapboxGL.MapView document
        camera, // ref for MapBoxGL.Camera; for func like: camera.currentflyTo, camera.current.moveTo, camera.current.zoomTo . See MapboxGL.Camera document
        userLocation,
    } = useContext(Map.MapContext);
    
    const moveCamera = (lat: number, lng: number) =>
    {
        camera?.current?.moveTo([lng, lat], 500);
    }
    const samplePoints = [
        {
          title: 'Location 1',
          latitude: 28.614889,
          longitude: 77.209889,
        },
        {
          title: 'Location 2',
          latitude: 28.612889,
          longitude: 77.207889,
        },
        {
          title: 'Location 3',
          latitude: 28.615889,
          longitude: 77.211889,
        },
        {
          title: 'Location 4',
          latitude: 28.616889,
          longitude: 77.206889,
        },
        {
          title: 'Location 5',
          latitude: 28.617889,
          longitude: 77.208889,
        },
        {
          title: 'Location 6',
          latitude: 28.613389,
          longitude: 77.210889,
        },
        {
          title: 'Location 7',
          latitude: 28.611889,
          longitude: 77.208389,
        },
        {
          title: 'Location 8',
          latitude: 28.618889,
          longitude: 77.212889,
        },
        {
          title: 'Location 9',
          latitude: 28.619889,
          longitude: 77.213889,
        },
        {
          title: 'Location 10',
          latitude: 28.620889,
          longitude: 77.214889,
        },
      ];
    const generateSampleFeatureCollection = () => ({
        type: 'FeatureCollection',
        features: samplePoints.map((x: any, index: number) =>
            (
                {
                    type: 'Feature',
                    id: index,
                    properties: {
                        title: x.title,
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [x.longitude, x.latitude],
                    },
                }
            ))
        ,
    });

    const sampleFeatureCollection = generateSampleFeatureCollection();
    return (
        <View style={{ flex: 1 }}>
            <Map
            overrideParams={{ API_KEY: 'ed54ebec-d746-4685-a7da-8fbf70f43456'}}
            defaultLocation={[77.208889, 28.613889]}
            zoomLevel={14}
            hideUserLocation={false}
            floatingMyLocation
            >
                {/* add 1 point on map */}
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

                {/* add collection of points on map */}
                <MapboxGL.ShapeSource
                    id="ShapeSourceSample"
                    shape={sampleFeatureCollection}
                    onPress={(value) =>
                    {
                        console.log('feture press',value?.features[0].properties?.title);
                        moveCamera(value?.features[0]?.geometry?.coordinates[1],value?.features[0]?.geometry?.coordinates[0])
                    }}
                >
                    <MapboxGL.SymbolLayer
                        id="sample-layer"
                        style={{
                            iconAllowOverlap: true,
                            iconImage: require('./../images/poi-green.png'),
                        }}
                    />
                </MapboxGL.ShapeSource>
            </Map>
        </View>
    );
}