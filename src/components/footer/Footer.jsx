import FooterColumns from './FooterColumns';
import style from './footer.module.css';

const Footer = () => {
	return (
		<footer className={`${style.wrapper} wrapper`}>
			<h4>VM</h4>
			<div className={style.container}>
				<FooterColumns
					title={'Getting Started'}
					text={'Introduction'}
					text1={'Documentation'}
					text2={'Elements'}
					text3={'Usage'}
				/>
				<FooterColumns
					title={'Resources'}
					text={'API'}
					text1={'Visibility'}
					text2={'Accesibility'}
					text3={'Marketplace'}
				/>
				<FooterColumns
					title={'About'}
					text={'About'}
					text1={'Submit'}
					text2={''}
					text3={''}
				/>
				<FooterColumns
					title={'Social Media'}
					text={'LinkedIn'}
					text1={'GitHub'}
					text2={'Instagram'}
					text3={'Twitter'}
				/>
        
			</div>
		</footer>
	);
};

export default Footer;
