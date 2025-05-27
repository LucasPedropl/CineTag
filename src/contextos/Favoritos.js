import { createContext, useContext, useState } from 'react';

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export function FavoritosProvider({ children }) {
	const [favorito, setFavorito] = useState([]);

	return <FavoritosContext.Provider value={{ favorito, setFavorito }}>{children}</FavoritosContext.Provider>;
}

export function useFavoritoContext() {
	const { favorito, setFavorito } = useContext(FavoritosContext);

	function adicionarFavorito(novoFavorito) {
		const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);

		let novaLista;
		if (favoritoRepetido) {
			
			novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
		} else {
			
			novaLista = [...favorito, novoFavorito];
		}
		setFavorito(novaLista);
	}
	return {
		favorito,
		adicionarFavorito,
	};
}
