import styles from './NaoEcontrada.module.css';

function NaoEcontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEcontrada;