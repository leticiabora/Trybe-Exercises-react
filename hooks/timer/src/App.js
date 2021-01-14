import React from 'react';
import useTimer from './useTimer';

const App = () => {

  // Aqui importamos o nosso useEffect customizado, passando os states e nosso isMultiple pra poder renderizar a nossa mensagem
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      {timer}
      <br />
      {randomNumber} 
      <br />
      {isMultiple ? 'Acerto' : ''}
    </div>
  );
}

export default App;