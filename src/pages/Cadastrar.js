import React, { useState } from 'react';
import './Cadastrar.css';
import fakeApi from "./Api";

const steps = [
  {
    id: "PESSOAL",
  },
  {
    id: "ENDERECO",
  },
  {
    id: "DADOS",
  }
];

var dados;

export default function Cadastrar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco1: "",
    endereco2: "",
    data_nascimento: "",
    cpf: "",
    renda_mensal: ""
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    //console.log("Form sent...", formValues);

    setLoading(true);

    // simulação de api
    await fakeApi(() => setLoading(false), 1000);
    dados = formValues;
    return dados;
  }

  return (
    <div className="Cadastrar">
      <h1>Cadastro</h1>
      <p className="step-guide">
        {currentStep + 1} de {steps.length}
      </p>

      <form className="steps-form" onSubmit={handleSubmit}>
        <div className="fields-container">

          {steps[currentStep].id === "PESSOAL" && (
            <div className="fields">
              <div className="field">
                <h3>Nome:</h3>
                <input
                  type="text"
                  placeholder="Digite aqui..." required=""
                  name="nome"
                  onChange={handleInputChange}
                  value={formValues.nome}
                />
              </div>
              <div className="field">
              <h3>Sobrenome:</h3>
                <input
                  type="text"
                  placeholder="Digite aqui..." required=""
                  name="sobrenome"
                  onChange={handleInputChange}
                  value={formValues.sobrenome}
                />
              </div>
              <div className="field">
              <h3>E-mail:</h3>
                <input
                  type="email"
                  placeholder="email@email.com" required=""
                  name="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
              <h3>Telefone:</h3>
                <input
                pattern="^\d{4}-\d{3}-\d{4}$" 
                  type="tel"
                  placeholder="(XX)XXXXX-XXXX" required=""
                  name="telefone"
                  onChange={handleInputChange}
                  value={formValues.telefone}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "ENDERECO" && (
            <div className="fields">
              <div className="field">
              <h3>CEP:</h3>
                <input
                  type="text"
                  placeholder="XXXXX-XXX" required=""
                  name="cep"
                  onChange={handleInputChange}
                  value={formValues.cep}
                />
              </div>
              <div className="field">
              <h3>Endereço I:</h3>
                <input
                  type="text"
                  placeholder="Digite aqui..." required=""
                  name="endereco1"
                  onChange={handleInputChange}
                  value={formValues.endereco1}
                />
              </div>
              <div className="field">
              <h3>Endereço II:</h3>
                <input
                  type="text"
                  placeholder="Digite aqui..." required=""
                  name="endereco2"
                  onChange={handleInputChange}
                  value={formValues.endereco2}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "DADOS" && (
            <div className="fields">
              <div className="field">
              <h3>Data de Nascimento:</h3>
                <input
                  type="date"
                  placeholder="DD/MM/AAAA" required=""
                  name="data_nascimento"
                  onChange={handleInputChange}
                  value={formValues.data_nascimento}
                />
              </div>
              <div className="field">
              <h3>CPF:</h3>
                <input
                  type="text"
                  placeholder="XXX.XXX.XXX-XX" required=""
                  name="cpf"
                  onChange={handleInputChange}
                  value={formValues.cpf}
                />
              </div>
              <div className="field">
              <h3>Renda Mensal:</h3>
                <input
                  type="text"
                  placeholder="Digite aqui..." required=""
                  name="renda_mensal"
                  onChange={handleInputChange}
                  value={formValues.renda_mensal}
                />
              </div>
            </div>
          )}

          {currentStep < steps.length - 1 && (
            <button className="button next" type="button" onClick={handleNext}>
              Próximo
            </button>
          )}

          {currentStep === steps.length - 1 && (
            <button className="button submit" type="submit">
              Salvar
            </button>
          )}

          {loading && <h1 className="loader">Salvando dados...</h1>}
        </div>
      </form>
    </div>
  );
}

export {dados, Cadastrar};