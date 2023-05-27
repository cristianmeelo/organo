import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      name,
      role,
      image,
      team,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={name} aoAlterado={(valor) => setName(valor)} />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={role} aoAlterado={(valor) => setRole(valor)} />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={image} aoAlterado={(valor) => setImage(valor)} />
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.teams} valor={team} aoAlterado={(valor) => setTeam(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
