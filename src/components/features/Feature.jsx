import Button from '../buttons/Button';
import IconDiscover from '../icons/IconDiscover';
import IconHeart from '../icons/IconHeart';
import Icon360 from '../icons/Icon360';
import RowFeature from './RowFeature';
import TextFeature from './TextFeature';
import style from './feature.module.css';

const Feature = () => {
	return (
		<section  id='about' className={`${style.wrapper} wrapper`}>
			<div className={`${style.feature} show`}>
				<TextFeature
					title={`Inspiration and genius are almost the same thing.`}
					text={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit a
					maiores magni, optio, corrupti officia error sit aperiam atque
					architecto.`}
				/>

				<Button text={`Get started`} />
			</div>
			<div className={`${style.container_features} show` }>
				<RowFeature
					icon={Icon360}
					title={`Visit museums at 360º`}
					text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}
				/>
				<RowFeature
					icon={IconDiscover}
					title={`Activate notifications`}
					text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}
				/>
				<RowFeature
					icon={IconHeart}
					title={`Save your favorites`}
					text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}
				/>

				<Button text={`Get started`} />
			</div>
		</section>
	);
};

export default Feature;
