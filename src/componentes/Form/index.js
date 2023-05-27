import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

export const Form = ({ teams, onCollaboratorAdded, onTeamAdded }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSaveCollaborator = (evento) => {
    evento.preventDefault();
    onCollaboratorAdded({
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
      <form onSubmit={onSaveCollaborator}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio label="Nome" placeholder="Digite seu nome" valor={name} aoAlterado={(valor) => setName(valor)} />
        <CampoTexto obrigatorio label="Cargo" placeholder="Digite seu cargo" valor={role} aoAlterado={(valor) => setRole(valor)} />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={image} aoAlterado={(valor) => setImage(valor)} />
        <ListaSuspensa obrigatorio label="Time" itens={teams} valor={team} aoAlterado={(valor) => setTeam(valor)} />
        <Botao>Criar Card</Botao>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onTeamAdded({ name: teamName, color: teamColor });
        }}
      >
        <h2>Preencha os dados para criar um novo Time</h2>
        <CampoTexto obrigatorio label="Nome" placeholder="Digite o nome do time" valor={teamName} aoAlterado={(valor) => setTeamName(valor)} />
        <CampoTexto obrigatorio label="Cor" placeholder="Digite a cor do time" valor={teamColor} aoAlterado={(valor) => setTeamColor(valor)} />
        <Botao>Criar um novo Time</Botao>
      </form>
    </section>
  );
};
