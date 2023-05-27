import { Collaborator } from "../Colaborador";
import "./Time.css";

export const Team = ({ name, corPrimaria, corSecundaria, colaboradores, onDelete, changeColor }) => {
  const css = { backgroundColor: corSecundaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <input value={corSecundaria} type="color" className="input-color" onChange={(event) => changeColor(event.target.value, name)} />
      <h3 style={{ borderColor: corPrimaria }}>{name}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return <Collaborator corDeFundo={corPrimaria} key={colaborador.name} name={colaborador.name} cargo={colaborador.cargo} imagem={colaborador.imagem} onDelete={onDelete} />;
        })}
      </div>
    </section>
  ) : (
    ""
  );
};
