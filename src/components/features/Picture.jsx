import style from './picture.module.css';
import artWork from '../../assets/cuadro.gif';
import phone from '../../assets/phone.png';

const Picture = () => {
	return (
		<div className={`${style.wrapper} show`}>
			<img src={phone} alt='phone' />
			<img src={artWork} alt='artwork' />
		</div>
	);
};

export default Picture;
