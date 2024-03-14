import './info.css';

const Info = (props) =>{
    return(
        <div>
            <img src={props.perfil.pfp} alt="pfp"></img>
            {props.perfil.usuario}
        </div>
    )
}

export default Info