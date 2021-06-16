import React from 'react'

import { store } from './store'
import { Provider } from 'react-redux'

import { Basket } from './components/Basket'
import { Goods } from './components/Goods'
import { OrderOne } from './components/OrderOne'
import { OrderTwo } from './components/OrderTwo'

import './App.css'

export default function App() {
    return (
        <Provider store={store}>
            <div className="App-header">
                <Basket />
                <Goods />
                <OrderOne />
                <OrderTwo />
            </div>
        </Provider>
    )
}
