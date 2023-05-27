import { AiFillCloseCircle } from "react-icons/ai";

import "./Colaborador.css";

export const Collaborator = ({ name, image, role, backgroundColor, onDelete }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="delete" onClick={onDelete} />

      <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};
