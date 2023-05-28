import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Colaborador";
import "./index.css";

export const Team = ({ name, color, collaborators, onDelete, changeColor, id, onFavorite }) => {
  return collaborators.length > 0
    ? collaborators.length > 0 && (
        <section className="team" style={{ backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(color, "0.6") }}>
          <input value={color} type="color" className="input-color" onChange={(event) => changeColor(event.target.value, id)} />
          <h3 style={{ borderColor: color }}>{name}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, index) => {
              return <Collaborator onFavorite={onFavorite} backgroundColor={color} key={index} id={collaborator.id} name={collaborator.name} role={collaborator.role} image={collaborator.image} onDelete={onDelete} isFavorite={collaborator.favorite} />;
            })}
          </div>
        </section>
      )
    : "";
};
