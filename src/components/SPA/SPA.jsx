import Header from '../Header/Header';
import InfoNumber from '../InfoNumber/InfoNumber';
import NavBar from '../NavBar/NavBar';
import Feature from '../features/Feature';
import FeatureDownload from '../features/FeatureDownload';
import Footer from '../footer/Footer';

const SPA = () => {
	return (
		<main className='mainContainer'>
			<NavBar />
			<Header />
			<InfoNumber/>
			<Feature/>
			<FeatureDownload/>
			<Footer />
		</main>
	);
};

export default SPA;
