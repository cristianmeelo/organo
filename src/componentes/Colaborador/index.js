import "./Colaborador.css"

export const Collaborator = ({ nome, imagem, cargo, corDeFundo, onDelete }) => {
	return (
		<div className="colaborador">
			<div className="delete" onClick={onDelete}>
				deletar
			</div>
			<div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
				<img src={imagem} alt={nome} />
			</div>
			<div className="rodape">
				<h4>{nome}</h4>
				<h5>{cargo}</h5>
			</div>
		</div>
	)
}
