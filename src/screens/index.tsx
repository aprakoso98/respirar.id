import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Collections from './Collections';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import { screenProps } from '../utils/constants/type';

const App = () => {
	return <div className="p-10">
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Paths />
		</Switch>
		<Footer />
	</div>
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