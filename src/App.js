import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // imported as alias
import Banner from "./componentes/Banner";
import { Form } from "./componentes/Form";
import { Team } from "./componentes/Team/index";
import { Footer } from "./componentes/Footer";

export const App = () => {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const initialCollaborators = [
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [collaborators, setCollaborators] = useState(initialCollaborators);

  const aoNovoColaboradorAdicionado = (collaborator) => setCollaborators([...collaborators, collaborator]);

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter((collaborator) => collaborator.id !== id));
  };

  const handleChangeTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      }),
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map((team) => team.name)} aoColaboradorCadastrado={(collaborator) => aoNovoColaboradorAdicionado(collaborator)} />
      <section className="times">
        <h1>Minha organização</h1>
        {teams.map((team, index) => (
          <Team key={index} id={team.id} name={team.name} color={team.color} collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)} changeColor={handleChangeTeamColor} onDelete={deleteCollaborator} />
        ))}
      </section>
      <Footer />
    </div>
  );
};
