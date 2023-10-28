import { useState } from 'react';
import style from './navBar.module.css';
import IconNavOpen from '../icons/IconNavOpen';
import IconNavClose from '../icons/IconNavClose';

const NavBar = () => {
	const [navState, setNavState] = useState(false);

	const toggleNav = () => {
		setNavState(!navState)
	}

	return (
		<nav className={style.wrapper}>
			<h1 className={style.logo} id='home'>VM</h1>
			<ul className={style.nav_ul}>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About VM</a>
				</li>
				<li>
					<a href='#features'>Download</a>
				</li>
			</ul>
			{navState && (
				<ul className={style.nav_ul_responsive} onClick={toggleNav}>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>About VM</a>
					</li>
					<li>
						<a href='#features'>Download</a>
					</li>
				</ul>
			)}
			<button className={style.btnNav} onClick={() => setNavState(!navState)}>
				{navState ? <IconNavClose /> : <IconNavOpen />}
			</button>
		</nav>
	);
};

export default NavBar;
