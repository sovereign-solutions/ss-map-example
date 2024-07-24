# ss-map-example

example for ss-map for react native using [MapLibre](https://github.com/maplibre/maplibre-react-native) 

## Installation
### MapLibre installation:
follow the [Installation guide of MapLibre](https://github.com/maplibre/maplibre-react-native/blob/main/docs/GettingStarted.md)

### MapStyle:
copy the [default.json](https://github.com/sovereign-solutions/ss-map-example/blob/main/assets/default.json) to the project
replace `{API_KEY}` with your SovereignSolutions gateway api key.

## Usage
```js
import styleDefault from './../../assets/default.json' // link to the default.json file in your project.
// ...
    <MapLibreGL.MapView
        ...
        styleURL={JSON.stringify(styleDefault)}
        ...
    >
// ...
```
