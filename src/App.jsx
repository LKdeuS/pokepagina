import React from 'react';
import ReactDOM from 'react-dom';
import PokemonPage from './components/PokemonPage.jsx'; // Actualiza la ruta si es necesario

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

