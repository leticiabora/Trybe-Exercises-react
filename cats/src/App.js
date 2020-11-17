import React from 'react';
import useApi from './useApi';

const url = 'https://api.thecatapi.com/v1/images/search';

function App() {
  // importamos o resultado do nosso request, que é o data, o loading, caso ainda esteja fazendo a requisição e o nosso erro, caso dê treta.
  // A diferença aqui é que estamos passando um parâmetro pro nosso hook customizado, que é a nossa URL, ao invés de colocarmos ela lá dentro da useApi, passamos ela por parâmetro, pra deixar o nosso hook reaproveitável.
  const { data, loading, error } = useApi(url);

  if (error) {
    return (
      <p>Ops! Tivemos um problema!</p>
    )
  }

  return (
    <div className="App">
      Cats
      {loading ? (
        <p>Loading...</p>
        ) : data.map((cat) => (
          <div>
            {cat.id}
            <br />
            <img src={cat.url} width={400} alt='catineo' />
          </div>
        ))}
    </div>
  );
}

export default App;
