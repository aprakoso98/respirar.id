import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from 'src/components/commons/Header';
import Footer from 'src/components/commons/Footer';
import Home from './Home';
import Collections from './Collections';
import About from './About';
import Container from 'src/components/elements/Container';
import View from 'src/components/elements/View';
import Product from './Product';
import { screenProps } from 'src/utils/types';
import NotFound from './NotFound';
import Modal from '../components/elements/Modal';
import { useDispatch, useSelector } from 'react-redux';
import actionMarketplaces from '../redux/actions/marketplaces';
import { FILE_PATH, getInfo } from 'src/utils/api';

const App = (): JSX.Element => {
	const [isHome, setIsHome] = useState(window.location.pathname === '/')
	const history = useHistory()
	const dispatch = useDispatch()
	const [BG, setBg] = useState('')
	// @ts-ignore
	const ModalState = useSelector(state => state.Modal)
	// @ts-ignore
	history.listen(({ pathname }) => {
		setIsHome(pathname === '/')
		window.scrollTo({ top: 0 })
	})
	useEffect(() => {
		getData()
		dispatch(actionMarketplaces())
	}, [dispatch])
	const getData = async () => {
		const { status, data } = await getInfo({ key: 'web-bg' })
		if (status) {
			// @ts-ignore
			setBg(data[0].detail)
		}
	}
	return <Container
		className={ModalState.visible ? 'fixed' : 'relative'}
		justify="between"
		id="app"
		style={isHome ? { background: `url('${FILE_PATH + BG}')` } : {}}>
		<Modal visible={ModalState.visible}>{ModalState.content}</Modal>
		<Header />
		<View flex id="scroll">
			<Switch>
				<RouteProduct />
			</Switch>
		</View>
		<Footer />
	</Container>
}

const RouteProduct = () => {
	return <>
		<Route path="/:product" render={(props: screenProps) => {
			const paths = ["404", "about", "collections"]
			const { match: { params: { product } } } = props
			return !paths.includes(product) && <Product {...props} />
		}} />
		<Route path="/404" exact component={NotFound} />
		<Route path="/about" exact component={About} />
		<Route path="/collections" exact component={Collections} />
		<Route path="/collections/:search" exact component={Collections} />
		<Route path="/" exact component={Home} />
	</>
}

export default App