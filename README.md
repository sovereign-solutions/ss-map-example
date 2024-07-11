# ss-map

ss-mapview for react native

## Installation

In package.json add:
```sh
"ss-map": "githublink"`

//add dependencies
"react": "17.0.2",
"react-dom": "18.2.0",
"react-native": "0.66.5",
"i18next": "20.6.1",

"react-i18next": "11.12.0",
"react-native-geolocation-service": "5.3.1",
"react-native-gesture-handler": "1.10.3",
"react-native-permissions": "3.5.0",
"react-native-svg": "12.1.1",
"react-native-svg-transformer": "0.14.3",
```
### Android:
In android/build.gradle:
```
allprojects {
    repositories {
       // ...
        maven {
            url 'https://api.mapbox.com/downloads/v2/releases/maven'
            authentication {
                basic(BasicAuthentication)
            }
            credentials {
                username = 'mapbox'
                password = MAPBOX_SECRET
            }
        }
        maven {
            url "$rootDir/../node_modules/@notifee/react-native/android/libs"
        }
        // ...
    }
}
```
In AndroidManifest.xml add:
```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### IOS:

## Usage

```js
import { Map } from 'ss-map';

// ...

        <Map.AllProvider >              
        <Map
          overrideParams={{ API_KEY: 'ed54ebec-d746-4685-a7da-8fbf70f43456'}}
          zoomLevel={14}
          hideUserLocation={false}
          floatingMyLocation
          mapKey={ 'bearer FmZJjzEqzHX1ZOp67-IWffug6xXCWxFGEnDnzrYO9sb0RxaDwieum9MSkO9cOEYO7SItQFmNEENRvEPe5Ka_irHdQoceCcw4sUeSafnff9zvDAHZXWO4toRq91ECAct-1hnW8-lZy3CWLH6MM2Tn8EarMSVgQrxzgEoRNyHMTzgvuxX0xTysF_PQWtraWAURL8tohvXLxZ2R8TXetoMtTSdvsKmv7MbOwqn5z5lGtgGeAUM4qGQzyPejCGAi_BfvEAhRPFEZ-qZyd_A1DgRyTYxioAMqtgnyG6WJQwDasvdsXsE0qO-vSpEr2Q1ZCahEieKm6h8pCcFBOlnjYrVBjjhdlfTIrDU_RsznqiUM8jK1chQBBaZQhoOPZssbNAGoCQQLLXKt7mcSbhCy9ej1eIhONOxemSJwY71QCmqsvEJHSz2ftRhgRMUnpeRUBw-552OwMw' }
        >
        </Map>
      </Map.AllProvider>
// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
