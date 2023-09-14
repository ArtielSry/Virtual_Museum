import IconDiscover from '../icons/IconDiscover';
import IconHeart from '../icons/IconHeart';
import Icon360 from '../icons/icon360';
import RowFeature from './RowFeature';
import style from './feature.module.css';
const Feature = () => {
	return (
		<section className={style.wrapper}>
			<div className={style.feature}>
				<h2>Inspiration and genius are almost the same thing.</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit a
					maiores magni, optio, corrupti officia error sit aperiam atque
					architecto, sint provident quibusdam repudiandae natus quis! Itaque
					esse aliquid accusamus.
				</p>
			</div>
			<div className={style.container_features}>
        <RowFeature icon={Icon360} title={`Visit museums at 360º`} text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}/>
				 <RowFeature icon={IconDiscover} title={`Activate notifications`} text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}/>
				 <RowFeature icon={IconHeart} title={`Save your favorites`} text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						necessitatibus recusandae, sed`}/>
			</div>
		</section>
	);
};

export default Feature;
