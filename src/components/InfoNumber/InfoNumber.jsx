import style from './InfoNumber.module.css';
import RowInfoNumbers from './RowInfoNumbers';

const InfoNumber = () => {
	return (
		<section className={style.wrapper}>
			<RowInfoNumbers text='USERS' />
			<RowInfoNumbers text='ARTS' />
			<RowInfoNumbers text='MUSEUMS' />
		</section>
	);
};

export default InfoNumber;
