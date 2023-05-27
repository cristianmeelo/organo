import "./index.css";

export const Field = ({ type = "text", label, value, required, placeholder, aoAlterado }) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input type={type} value={value} onChange={aoDigitado} required={required} placeholder={placeholderModificada} />
    </div>
  );
};
