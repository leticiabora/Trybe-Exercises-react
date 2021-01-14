import React from 'react';
import { Button, Input, Select, Textarea } from './components/';
import './style.css';

class App extends React.Component {
  render() {
    const checkboxOption = [
      { label: "HTML5", value: "html5" },
      { label: "CSS3", value: "css3" },
      { label: "JavaScript", value: "JavaScript" },
      { label: "React do amor", value: "react" },
    ]
    return (
      <div>
        <h1>Cadastro de DEVs</h1>
        <p>Complete suas informações</p>
        <form>
          <div>
            <Input
              inputLabel="Nome"
              inputType="text"
            />
            <Input
              inputLabel="Sobrenome"
              inputType="text"
            />
            <Input
              inputLabel="Email"
              inputType="email"
            />
            Qual a sua stack?
            <Input
              inputName="devweb"
              inputLabel="Back-end"
              inputValue="backend"
              inputType="radio"
            />
            <Input
              inputName="devweb"
              inputLabel="Front-end"
              inputValue="frontend"
              inputType="radio"
            />
            <Input
              inputName="devweb"
              inputLabel="Fullstack"
              inputValue="fullstack"
              inputType="radio"
            />

            Qual a sua senioridade?
            <Select
              selectOption={[
                "Selecione", "Júnior", "Pleno", "Sênior"
              ]}
            />
          </div>
          <div>
            Qual linguagens já utilizou?
            <br />
            {checkboxOption.map((checkOption) => (
              <Input
              inputType="checkbox"
              inputLabel={checkOption.label}
              inputValue={checkOption.value}
              />
              ))}

            <Textarea
              textareaRows="6"
              textareaLabel="Conte um pouco sobre a sua experiência:"
            />
          </div>
          <Button btnType="button" btnText="Concluir" />
        </form>
      </div>
    );
  }
};

export default App;
