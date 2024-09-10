Counter App avec Redux Toolkit
Introduction

Ce projet utilise Redux Toolkit avec React pour implémenter un simple compteur. Redux Toolkit simplifie l'utilisation de Redux dans les applications en fournissant des outils pour créer des slices, gérer facilement le state global, et réduire le code redondant.
Prérequis

Assurez-vous que vous avez installé Node.js et npm sur votre machine.
Étapes pour configurer le projet
1. Installation des dépendances

Pour commencer, installez Redux Toolkit et React Redux dans votre projet :

bash

npm install @reduxjs/toolkit react-redux

2. Configurer Redux avec un Slice

Un slice est une partie de l'état global, avec ses actions et son reducer.

Créez un fichier counterSlice.js dans le dossier src :

js

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',   // Nom du slice
  initialState: { value: 0 },   // État initial
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

// Export des actions pour les utiliser dans le composant
export const { increment, decrement, reset } = counterSlice.actions;

// Export du reducer pour l'ajouter au store
export default counterSlice.reducer;

3. Créer le Store Redux

Ensuite, créez un store Redux pour contenir l'état global de l'application. Ajoutez le slice dans le store.

Créez un fichier store.js dans le dossier src :

js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Ajout du slice dans le store
  },
});

4. Fournir le store à l’application

Ensuite, connectez le store à l'application en utilisant le composant Provider de React Redux dans index.js.

js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

5. Créer le composant Counter

Ensuite, créez le composant Counter.js pour interagir avec le store :

js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;

6. Utiliser le Composant Counter

Enfin, importe et affiche le composant Counter dans le fichier App.js :

js

import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

Explication du fonctionnement

    increment augmente le compteur de 1.
    decrement diminue le compteur de 1.
    reset remet le compteur à 0.
    useSelector permet de lire le state global dans le composant.
    useDispatch permet d'envoyer des actions pour modifier l'état.

Conclusion

Ce tutoriel explique comment utiliser Redux Toolkit pour gérer l'état global dans une application React simple. Vous pouvez étendre cet exemple pour ajouter d'autres fonctionnalités ou gérer des actions asynchrones avec createAsyncThunk.