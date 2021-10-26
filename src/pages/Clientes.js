import React from 'react';
import { dados } from './Cadastrar';
import './Clientes.css';

function Clientes() {
  return (
    <div className='clientes'>
      <h1>Cliente cadastrado</h1> 
      <div className='details'>
      <details>
        <sumary></sumary>
        <ul>
          <li>Nome completo: {dados.nome + " " + dados.sobrenome}</li>
          <li>E-mail: {dados.email}</li>
          <li>Telefone: {dados.telefone}</li>
          <li>CEP: {dados.cep}</li>
          <li>Endereço 01: {dados.endereco1}</li>
          <li>Endereço 02: {dados.endereco2}</li>
          <li>Data de Nascimento: {dados.data_nascimento}</li>
          <li>CPF: {dados.cpf}</li>
          <li>Renda Mensal: {dados.renda_mensal}</li>
        </ul>
      </details>
      </div>

    </div>
  );
}

export default Clientes;