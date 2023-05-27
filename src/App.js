import { useState } from "react";
import Banner from "./componentes/Banner";
import { Form } from "./componentes/Form";
import { Team } from "./componentes/Team/index";

export const App = () => {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      name: "Front-End",
      color: "#E8F8FF",
    },
    {
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => setColaboradores([...colaboradores, colaborador]);

  const deleteCollaborator = () => {
    console.log("%cApp.js line:53 delete collab", "color: #26bfa5;");
  };

  const handleChangeTeamColor = (color, name) => {
    setTeams(
      teams.map((team) => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      }),
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form times={teams.map((time) => time.name)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />

      {teams.map((time) => (
        <Team key={time.name} name={time.name} color={time.color} colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.name)} changeColor={handleChangeTeamColor} onDelete={deleteCollaborator} />
      ))}
    </div>
  );
};
