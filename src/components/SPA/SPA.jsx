import Header from '../Header/Header';
import InfoNumber from '../InfoNumber/InfoNumber';
import NavBar from '../NavBar/NavBar';
import Feature from '../features/Feature';
import FeatureDownload from '../features/FeatureDownload';

const SPA = () => {
	return (
		<main>
			<NavBar />
			<Header />
			<InfoNumber />
			<Feature />
			<FeatureDownload />
		</main>
	);
};

export default SPA;
