import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Colaborador";
import "./Time.css";

export const Team = ({ name, color, colaboradores, onDelete, changeColor }) => {
  return colaboradores.length > 0
    ? colaboradores.length > 0 && (
        <section className="time" style={{ backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(color, "0.6") }}>
          <input value={color} type="color" className="input-color" onChange={(event) => changeColor(event.target.value, name)} />
          <h3 style={{ borderColor: color }}>{name}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador) => {
              return <Collaborator corDeFundo={color} key={colaborador.name} name={colaborador.name} cargo={colaborador.cargo} imagem={colaborador.imagem} onDelete={onDelete} />;
            })}
          </div>
        </section>
      )
    : "";
};
