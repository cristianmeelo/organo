import { AiFillCloseCircle } from "react-icons/ai"

import "./Colaborador.css"

export const Collaborator = ({ nome, imagem, cargo, corDeFundo, onDelete }) => {
	return (
		<div className="colaborador">
			<AiFillCloseCircle size={25} className="delete" onClick={onDelete} />

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
