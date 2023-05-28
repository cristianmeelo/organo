import { useState } from "react";
import { Field } from "../Field";
import { DropdownList } from "../DropdownList/index";
import { Button } from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

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
    notify("colaborador");
  };

  const notify = (typeCreated) =>
    toast(`🥳 ${typeCreated} adicionado!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <section className="form-container">
      <section className="form">
        <form onSubmit={onSaveCollaborator}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Field required label="Nome" placeholder="Digite seu nome" value={name} aoAlterado={(value) => setName(value)} />
          <Field required label="Cargo" placeholder="Digite seu cargo" value={role} aoAlterado={(value) => setRole(value)} />
          <Field label="Imagem" placeholder="Digite o endereço da imagem" value={image} aoAlterado={(value) => setImage(value)} />
          <DropdownList required label="Time" itens={teams} value={team} aoAlterado={(value) => setTeam(value)} />
          <Button>Criar Card</Button>
        </form>
      </section>

      <section className="form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onTeamAdded({ name: teamName, color: teamColor });
            notify("Time");
          }}
        >
          <h2>Preencha os dados para criar um novo time</h2>
          <Field required label="Nome" placeholder="Digite o nome do time" value={teamName} aoAlterado={(value) => setTeamName(value)} />
          <Field type="color" required label="Cor" placeholder="Digite a cor do time" value={teamColor} aoAlterado={(value) => setTeamColor(value)} />
          <Button>Criar um novo Time</Button>
        </form>
      </section>
      <ToastContainer />
    </section>
  );
};
