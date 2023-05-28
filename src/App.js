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
      favorite: false,
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "Front-End",
      color: "#E8F8FF",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const initialCollaborators = [
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [collaborators, setCollaborators] = useState(initialCollaborators);

  const onNewCollaboratorAdded = (collaborator) => setCollaborators([...collaborators, collaborator]);
  const onNewTeamAdded = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };

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

  const handleFavorite = (id) => {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id) collaborator.favorite = !collaborator.favorite;
        return collaborator;
      }),
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map((team) => team.name)} onCollaboratorAdded={(collaborator) => onNewCollaboratorAdded(collaborator)} onTeamAdded={onNewTeamAdded} />
      <section className="times">
        <h1>Minha organização</h1>
        {teams.map((team, index) => (
          <Team key={index} id={team.id} name={team.name} color={team.color} collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)} changeColor={handleChangeTeamColor} onDelete={deleteCollaborator} onFavorite={handleFavorite} />
        ))}
      </section>
      <Footer />
    </div>
  );
};
