import Picture from './Picture';
import TextFeature from './TextFeature';
import style from './featureDownload.module.css';

import apple from '../../assets/apple.png';
import google from '../../assets/google.jpg';

const FeatureDownload = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<TextFeature
					title={`Easy download on Google Play and Apple Store`}
					text={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit a maiores magni, optio, corrupti officia error sit aperiam atque architecto.`}
				/>
				<div className={style.platform}>
					<img src={apple} alt='appleStore' />
					<img src={google} alt='google play' />
				</div>
			</div>
			<Picture />
		</div>
	);
};

export default FeatureDownload;
