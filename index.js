/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import App from './src/app'

const AppCalculadora = () => (
    <App />
)

AppRegistry.registerComponent(appName, () => AppCalculadora);
