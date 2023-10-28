import style from './header.module.css';
import rv from '../../assets/busto.png'

const Header = () => {
	return (
		<main className={style.wrapper}>
			<div className={style.title}>
				<h1 className={style.link_helike}>
					Virtual Museum<br></br>
					<strong>Art is everywhere.</strong> <br></br>
					Just find it.
				</h1>
				<p>
					Virtual Museum is the latest application to enjoy architecture,
					painting and sculpture.
				</p>
			</div>
			<div className={style.cards}>
				<img src={rv} alt=''/>
			</div>


			
		</main>
	);
};

export default Header;
