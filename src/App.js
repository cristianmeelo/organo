import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import { Team } from "./componentes/Team/index";

export const App = () => {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      name: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      name: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      name: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      name: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      name: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  const deleteCollaborator = () => {
    console.log("%cApp.js line:53 delete collab", "color: #26bfa5;");
  };

  const handleChangeTeamColor = (color, name) => {
    setTeams(
      teams.map((team) => {
        if (team.name === name) {
          team.corSecundaria = color;
        }
        return team;
      }),
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={teams.map((time) => time.name)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />

      {teams.map((time) => (
        <Team key={time.name} name={time.name} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.name)} changeColor={handleChangeTeamColor} onDelete={deleteCollaborator} />
      ))}
    </div>
  );
};
