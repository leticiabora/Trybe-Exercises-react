import { useState, useEffect } from 'react';

const useTimer = () => {

  // Setamos nosso state e o que seria o "this.setState", o timer vai iniciar com valor 0.
  // Com classe seria como "this.state = { timer: 0 }", com a diferença que no hooks temos uma função própria pra atualizar cada estado.
  const [timer, setTimer] = useState(0);
  // O mesmo é válido aqui para o nosso randomNumber, ele será o state responsável por guardar o nosso número randômico e o setRandomNumber por atualizar esse número.
  const [randomNumber, setRandomNumber] = useState(null);

  // Aqui colocamos o valor do mínimo e máximo da nossa conta, lembra que o número precisa ser random de 1 a 100?
  const min = 1;
  const max = 100;
  
  // Aqui verificamos se o número random é divisível por 3 ou por 5.
  const isMultiple = randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0);

  // Feito isso, agora vamos iniciar o nosso useEffect, ele é responsável pelo "ciclo de vida", em analogia com as classe, ou seja, ele pode servir como componentDidMount, componenteDidUpdate, componentWillUnmount e por aí vai. Ele vai receber dois parâmetros, o primeiro é uma função, que vai executar algum tipo de código e o segundo parâmetro é o que ele vai ficar "escutando".
  // Por exemplo: useEffect(() => {aqui vai o código}, [aqui o parâmetro que ele fica escutando])
  // "Eiii, mas eu já vi esse segundo parâmetro vazio!!"
  // Quando não passamos valor algum pro segundo parâmetro, ele age como um "componentDidMount", ou seja, ele vai rodar apenas uma única vez. Lembra que com classes, o componentDidMount rodava após o componente ser "montado"? Ou seja, assim que abrimos nossa aplicação, ele executa o código e para por aí.
  // Quando passamos o segundo parâmetro, qualquer alteração que aconteça nos estados, ele vai executar o bloco de código.
  // Logo nos useEffects abaixo, a gente pode perceber que o primeiro tá escutando o timer, ou seja, sempre que o timer atualizar, ele executa o código.
  // No outro, temos dois estados sendo escutados (atenção, os dois estados, tanto o randomNumber como o isMultiple continuam sendo o segundo parâmetro do useEffect), qualquer alteração que aconteça no randomNumber ou no isMultiple, aquele bloco de código vai ser executado.

  useEffect(() => {
    // Inicializamos o nosso setInterval
    const timeInterval = setInterval(() => {
      // Salvamos o estado + 1 numa variável, que vai simular o nosso timer
      const newTimer = timer + 1
      const mod10 = newTimer > 0 && newTimer % 10;
      // newTimer maior que 0 e newTimer dividido por 10 for igual a 0
      if(mod10 === 0) {
        // então eu chamo minha função de atualizar meu estado randomNumber e faço a mágica da matemática, ou seja, salvo um número aleatório entre 1 a 100 no meu randomNumber
        setRandomNumber(Math.round(Math.random() * (max - min) + min));
      }
      // Atualizo meu timer com o valor do newTimer, que nada mais é que timer + 1.
      setTimer(newTimer);
      // rodo tudo isso a cada 1 segundo
    }, 1000);

    // Preciso desmontar meu componente ao usar o setInterval, senão ele vai ficar sobrescrevendo um setInterval com o outro, mas não vamos nos aprofundar nele, só lembre-se que esse return dentro do useEffect funciona como um componentWillUnmount e que o setInterval precisa dele, beleza?
    return () => {
      console.log('desmontou')
      clearInterval(timeInterval);
    }
    // E por fim, cada atualização que ocorrer no timer, eu rodo tudo isso novamente
  }, [timer])

  // Lembra que a variável isMultiple é a verificação se o randomNumber é múltiplo de 3 ou de 5? Então essa função vai rodar logo quando a gente chamar a setRandomNumber do useEffect anterior, ou seja, esse useEffect fica escutando o estado randomNumber, quando ele for atualizado, vai rodar aqui também.
  useEffect(() => {
    if(isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, 4000)
    }
  }, [randomNumber, isMultiple])

// Finalmente, retornamos os nossos estados e nossa variável isMultiple, que se for true, vai exeibir a mensagem de acerto no nosso arquivo App.js
  return { 
    timer, 
    randomNumber, 
    isMultiple,
  }
}

export default useTimer;
