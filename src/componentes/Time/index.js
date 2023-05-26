import { Collaborator } from "../Colaborador"
import "./Time.css"

export const Team = ({ nome, corPrimaria, corSecundaria, colaboradores, onDelete }) => {
	const css = { backgroundColor: corSecundaria }

	return colaboradores.length > 0 ? (
		<section className="time" style={css}>
			<h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
			<div className="colaboradores">
				{colaboradores.map((colaborador) => {
					return <Collaborator corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} onDelete={onDelete} />
				})}
			</div>
		</section>
	) : (
		""
	)
}
