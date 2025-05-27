import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEcontrada from 'pages/naoEcontrada';
import { useEffect, useState } from 'react';

function Player() {
	const [video, setVideo] = useState();
	const parametros = useParams();

	useEffect(() => {
		fetch(`https://my-json-server.typicode.com/LucasPedropl/cinetag-api/videos?id=${parametros.id}`)
			.then((resposta) => resposta.json())
			.then((dados) => {
				setVideo(...dados);
			});
	});

	if (!video) {
		return <NaoEcontrada />;
	}

	return (
		<>
			<Banner imagem="player" />
			<Titulo>
				<h1>Player</h1>
			</Titulo>
			<section className={styles.container}>
				<iframe height="100%" src={video.link} title={video.titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
			</section>
		</>
	);
}

export default Player;
