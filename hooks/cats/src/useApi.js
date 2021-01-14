import { useEffect, useState } from 'react';

// Recebemos um parâmetro aqui que será a url da requisição pra api, pra deixar nosso hook reutilizável
const useApi = (url) => {
  // Vamos ter 3 estados, o do nosso data, que é o array retornado pela api, nosso loading, que aparece quando a nossa requisição ainda não terminou e o nosso erro, caso dê alguma treta na hora da requisição.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Poderíamos passar essa url direto aqui na nossa useApi, mas ela não ficarica dinâmica
  // const url = 'https://api.thecatapi.com/v1/images/search'

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(result => result.json())
      .then(result => {
        setData(result)
      })
      // o finally executa sempre, se a api desse erro, sem o finally, o loading ficaria eterno
      .finally(() => setLoading(false))
      .catch((e) => setError(e))
  }, [url])


  return {
    data,
    loading,
    error,
  }
}

export default useApi;
