import style from './RowFeature.module.css'

const RowFeature = ({ icon: Icon, title, text }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon}>{<Icon />}</div>
			<div>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default RowFeature;
