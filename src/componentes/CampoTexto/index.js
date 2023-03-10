import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    let valor = 'Guilherme Silveira'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto