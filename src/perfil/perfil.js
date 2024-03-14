import Feed from '../feed/feed';
import Info from '../info_perfil/info';

const Perfil = (props) => {
    return (
        <div>
            <Info perfil={props.perfil}/>
            <Feed perfil={props.perfil}/>
        </div>
    )
}

export default Perfil;