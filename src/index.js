import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import mainReducer from "./reducers/mainReducers";
import logMiddleware from "./middleware/logMiddleware";
//このreducerが全てのreducerを管理する。

//このstoreのお陰でmiddlewareとかコンポーネント以外でもいろんな情報をゲットできる
const pokemonStore = createStore(mainReducer, applyMiddleware( logMiddleware ) );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={ pokemonStore }>{/*Providerでstoreを渡してるからグローバルに情報アクセスできる。*/}
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
