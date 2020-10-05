import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/commons/Header';
import Footer from 'src/components/commons/Footer';
import Home from './Home';
import { screenProps } from 'src/utils/constants/type';
import Collections from './Collections';
import About from './About';
import Container from 'src/components/elements/Container';
import View from 'src/components/elements/View';

const App = () => {
	return <Container id="app" style={{ background: `url('${require('../assets/images/Sky-BG.jpg')}')` }}>
		<Header />
		<View id="scroll">
			<Switch>
				<Route path="/" exact component={Home} />
				<Paths />
			</Switch>
			<Footer />
		</View>
	</Container>
}

export default App

const Paths = () => <>
	<Route path="/:product" render={(props: screenProps) => {
		const paths = ["about", "collections"]
		const { match: { params: { product } } } = props
		return <>
			<div style={{ margin: '0 -.25rem' }} className="flex">
				<div className="p-1">Home</div>
				<div className="p-1">/</div>
				<div className="p-1">{product}</div>
			</div>
			{
				!paths.includes(product) && <div>kkdhksjdf</div>
			}
		</>
	}} />
	<Route path="/collections" exact component={Collections} />
	<Route path="/about" exact component={About} />
</>