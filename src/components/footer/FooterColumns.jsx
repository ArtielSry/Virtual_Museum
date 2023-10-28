import { useState } from 'react';
import IconNavClose from '../icons/IconNavClose';
import style from './footer.module.css';
import IconOpen from '../icons/IconOpen';

const FooterColumns = ({ title, text, text1, text2, text3 }) => {
	const [openState, setOpenState] = useState(false);

	return (
    <>
		<div className={style.block}>
			<ul className={style.ul}>
				<li>{title}</li>
				<li>{text}</li>
				<li>{text1}</li>
				<li>{text2}</li>
				<li>{text3}</li>
			</ul>
			<button onClick={() => setOpenState(!openState)}>
				{openState ? <IconNavClose /> : <IconOpen />}{' '}
			</button>
      
		</div>
			{openState && (
				<ul className={style.ul_responsive}>
					<li>{text}</li>
					<li>{text1}</li>
					<li>{text2}</li>
					<li>{text3}</li>
				</ul>
			)}</>
	);
};

export default FooterColumns;
