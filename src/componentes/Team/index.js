import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Colaborador";
import "./Time.css";

export const Team = ({ name, color, collaborators, onDelete, changeColor, id }) => {
  return collaborators.length > 0
    ? collaborators.length > 0 && (
        <section className="time" style={{ backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(color, "0.6") }}>
          <input value={color} type="color" className="input-color" onChange={(event) => changeColor(event.target.value, id)} />
          <h3 style={{ borderColor: color }}>{name}</h3>
          <div className="colaboradores">
            {collaborators.map((collaborator, index) => {
              return <Collaborator backgroundColor={color} key={index} name={collaborators.name} role={collaborator.role} image={collaborator.image} onDelete={onDelete} />;
            })}
          </div>
        </section>
      )
    : "";
};
