import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import MapLibreGL from "@maplibre/maplibre-react-native";
import styleDefault from './../../assets/default.json'
MapLibreGL.setAccessToken(null);
class MapScreen extends Component {    
    
    constructor(props) {
      super(props);
      
      const replaceAPIKEY = (style, apiKey) =>
      {
          for (const key of Object.keys(style.sources))
          {
              if (style.sources[key].tiles)
              {
                  style.sources[key].tiles[0] = style.sources[key].tiles[0].replace('{API_KEY}', apiKey);
              }
          }
  
          style.sprite = style.sprite.replace('{API_KEY}', apiKey);
          style.glyphs = style.glyphs.replace('{API_KEY}', apiKey);
      }
      replaceAPIKEY(styleDefault, 'ed54ebec-d746-4685-a7da-8fbf70f43456');
      this.cameraRef = React.createRef();

      // example get nearby points
      console.log('NearbyPoint 300 meters', JSON.stringify(this.getNearByPoints(28.613889,77.208889, 300).map(item => item.title)));
    }

    cameraRef;
    moveCamera = (lat: number, lng: number) =>
    {
        this.cameraRef?.current?.moveTo([lng, lat], 500);
    }
    samplePoints = [
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
    generateSampleFeatureCollection = () => ({
        type: 'FeatureCollection',
        features: this.samplePoints.map((x: any, index: number) =>
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

    getDistance({ X: lon1, Y: lat1 }, { X: lon2, Y: lat2 })
    {
        const R = 6371; // radius of earth, km (change this constant to get miles)
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.cos((lat1 * Math.PI) / 180), 2) * Math.pow(Math.sin(dLon / 2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;

        return d * 1000; // meters
    }

    getNearByPoints = (lat: number, lng: number, radius: number) =>
    {
      return this.samplePoints.filter(point => this.getDistance({X: lng, Y: lat}, {X: point.longitude, Y: point.latitude}) < radius);
    }
    
    render(): ReactNode {
      return (
        <View style={{ flex: 1,  alignSelf: 'stretch' }}>
            <MapLibreGL.MapView
            style={{flex: 1, alignSelf: 'stretch'}}
            styleURL={JSON.stringify(styleDefault)}
            attributionEnabled={false}
            >
              <MapLibreGL.Camera
                ref={this.cameraRef}
                logoEnabled={false}
                centerCoordinate={[77.208889, 28.613889]}
                zoomLevel={14}
              />
                {/* add 1 point on map */}
                <MapLibreGL.ShapeSource
                  id={'point-on-map'}
                  shape={{ coordinates: [77.208889, 28.613889], 'type': 'Point' }}
                >
                    <MapLibreGL.SymbolLayer
                        layerIndex={99000}
                        style={{ iconImage: require('./../images/poi-cyan.png'), iconTranslateAnchor: 'map', iconOffset: [0, -15],iconAllowOverlap: true }}
                        id={'selectPointSymbol'}
                    />
                </MapLibreGL.ShapeSource>

                {/* add collection of points on map */}
                <MapLibreGL.ShapeSource
                    id="ShapeSourceSample"
                    shape={this.generateSampleFeatureCollection()}
                    onPress={(value) =>
                    {
                        console.log('feture press',value?.features[0].properties?.title);
                        this.moveCamera(value?.features[0]?.geometry?.coordinates[1],value?.features[0]?.geometry?.coordinates[0])
                    }}
                >
                    <MapLibreGL.SymbolLayer
                        id="sample-layer"
                        style={{
                            iconAllowOverlap: true,
                            iconImage: require('./../images/poi-green.png'),
                        }}
                    />
                </MapLibreGL.ShapeSource>
            </MapLibreGL.MapView>
        </View>)
    };
}
export default MapScreen;