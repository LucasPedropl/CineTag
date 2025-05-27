import Favoritos from 'pages/favoritos';
import Inicio from 'pages/inicio';
import NaoEcontrada from 'pages/naoEcontrada';
import PaginaBase from 'pages/paginaBase';
import Player from 'pages/player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<Inicio />} />
					<Route path="/favoritos" element={<Favoritos />} />
					<Route path="/:id" element={<Player />} />
					<Route path="*" element={<NaoEcontrada />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
