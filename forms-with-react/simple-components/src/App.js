import React from 'react';
import { Button, Input } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Input inputLabel="Nome" inputType="text" />
        <Input inputLabel="Idade" inputType="text" />
        <Input inputLabel="Bolacha" inputType="radio" inputName="preferencia" inputValue="Bolacha" />
        <Input inputLabel="Biscoito" inputType="radio" inputName="preferencia" inputValue="Biscoito" />
        <Button btnType="button" btnLabel="Enviar" />
      </div>
    );
  }
}

export default App;
