import '../styles/globals.css';
import Head from 'next/head';

//redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tweets from '../reducers/tweets';
import user from '../reducers/user';


const reducers = combineReducers({ tweets, user });
const persistConfig = { key: 'Hackatweet', storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Next.js App</title>
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
