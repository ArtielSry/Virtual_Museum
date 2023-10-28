import style from './feature.module.css';

/* reusable component */

const TextFeature = ({ title, text, ...props }) => {
	return (
		<div className={style.feature}>
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};

export default TextFeature;
