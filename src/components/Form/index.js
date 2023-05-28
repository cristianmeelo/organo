import { useState } from "react";
import { Field } from "../Field";
import { DropdownList } from "../DropdownList/index";
import "./Formulario.css";
import { Button } from "../Button";

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
    <section className="formulario-container">
      <section className="formulario">
        <form onSubmit={onSaveCollaborator}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Field required label="Nome" placeholder="Digite seu nome" value={name} aoAlterado={(value) => setName(value)} />
          <Field required label="Cargo" placeholder="Digite seu cargo" value={role} aoAlterado={(value) => setRole(value)} />
          <Field label="Imagem" placeholder="Digite o endereço da imagem" value={image} aoAlterado={(value) => setImage(value)} />
          <DropdownList required label="Time" itens={teams} value={team} aoAlterado={(value) => setTeam(value)} />
          <Button>Criar Card</Button>
        </form>
      </section>

      <section className="formulario">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onTeamAdded({ name: teamName, color: teamColor });
          }}
        >
          <h2>Preencha os dados para criar um novo time</h2>
          <Field required label="Nome" placeholder="Digite o nome do time" value={teamName} aoAlterado={(value) => setTeamName(value)} />
          <Field type="color" required label="Cor" placeholder="Digite a cor do time" value={teamColor} aoAlterado={(value) => setTeamColor(value)} />
          <Button>Criar um novo Time</Button>
        </form>
      </section>
    </section>
  );
};
