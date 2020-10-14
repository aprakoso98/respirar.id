import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from 'src/components/commons/Header';
import Footer from 'src/components/commons/Footer';
import Home from './Home';
import Collections from './Collections';
import About from './About';
import Container from 'src/components/elements/Container';
import View from 'src/components/elements/View';
import Product from './Product';
import Wrapper from 'src/components/elements/Wrapper';
import Text from 'src/components/elements/Text';
import Button from 'src/components/elements/Button';
import { Divider } from 'src/components/elements/Divider';
import useWindowSize from 'src/hooks/useWindowSize';
import { screenProps } from 'src/utils/types';
import NotFound from './NotFound';
import Modal from '../components/elements/Modal';

const App = (): JSX.Element => {
	const [isHome, setIsHome] = useState(window.location.pathname === '/')
	const history = useHistory()
	// @ts-ignore
	history.listen(({ pathname }) => setIsHome(pathname === '/'))
	return <Container className="relative" justify="between" id="app" style={isHome ? { background: `url('${require('../assets/images/Sky-BG.jpg')}')` } : {}}>
		<Modal visible />
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
	const history = useHistory()
	const [, , isMobile] = useWindowSize()
	return <>
		<Route path="/:product" render={(props: screenProps) => {
			const paths = ["404", "about", "collections"]
			const { match: { params: { product } } } = props
			return <View>
				<Divider />
				<Wrapper wrap className={`pt-5 ${isMobile ? 'ph-5' : 'ph-15'} ${paths.includes(product) ? 'mb-3' : ''}`} justify="start">
					<Button textProps={{ className: '!Bold f-5' }} onClick={() => history.push('/')} className="f-5 link">Home</Button>
					<Text className="f-5 ph-2">/</Text>
					{!paths.includes(product) && <>
						<Button onClick={() => history.push('/collections')} textProps={{ className: '!Bold f-5' }} className="link">Collections</Button>
						<Text className="f-5 ph-2">/</Text>
					</>}
					<Text className="f-5">{product}</Text>
				</Wrapper>
				{!paths.includes(product) && <Product {...props} />}
			</View>
		}} />
		<Route path="/404" exact component={NotFound} />
		<Route path="/about" exact component={About} />
		<Route path="/collections" exact component={Collections} />
		<Route path="/" exact component={Home} />
	</>
}

export default App