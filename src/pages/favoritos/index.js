import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';

function Favoritos(){
    return (
		<>
			<Banner imagem="favoritos" />
			<Titulo>
				<h1>Favoritos</h1>
			</Titulo>
		</>
    );
}

export default Favoritos;