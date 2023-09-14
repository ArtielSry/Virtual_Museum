import style from './header.module.css';
import rv from '../../assets/vr4.png'

const Header = () => {
	return (
		<main className={style.wrapper}>
			<div className={style.title}>
				<h1 className={style.link_helike}>
					Virtual Museum VR<br></br>
					<strong>Art is in everywhere,</strong> <br></br>
					Just Find it.
				</h1>
				<p>
					Virtual Museum is the latest application to enjoy architecture,
					painting and sculpture. Enjoy this experience using the latest and
					newest technologies of the future in the present.
				</p>
			</div>
			<div className={style.cards}>
				<img src={rv} alt=''/>
			</div>

			<div className='blur1'></div>
			<div className='blur2'></div>
			<div className='blur3'></div>
		</main>
	);
};

export default Header;
