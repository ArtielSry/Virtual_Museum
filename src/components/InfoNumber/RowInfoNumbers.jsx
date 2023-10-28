import { useState, useEffect } from 'react';
import style from './InfoNumber.module.css';

const RowInfoNumbers = ({ text }) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const limit = 500;

		const intervalId = setInterval(() => {
			setCounter(prevCounter => {
				if (prevCounter < limit) {
					return prevCounter + 1;
				} else {
					return 500;
				}
			});
		}, 0.1);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<div className={style.container}>
			<h3 className={style.scaleupcenter}>
				 <strong>{text}</strong> +{counter}
			</h3>
		</div>
	);
};

export default RowInfoNumbers;
