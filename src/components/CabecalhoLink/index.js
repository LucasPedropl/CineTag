import { Link } from "react-router-dom";
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ children, url }) {
	return (
		<Link to={url} className={styles.link}>
			{children}
		</Link>
	);
}

export default CabecalhoLink;