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
import Product from './Product';
import Wrapper from 'src/components/elements/Wrapper';
import Text from 'src/components/elements/Text';
import Button from 'src/components/elements/Button';

const App = () => {
	return <Container id="app" style={{ background: `url('${require('../assets/images/Sky-BG.jpg')}')` }}>
		<Header />
		<View id="scroll">
			<Switch>
				<RouteProduct />
				<Route path="/" exact component={Home} />
			</Switch>
			<Footer />
		</View>
	</Container>
}

const RouteProduct = () => {
	return <>
		<Route path="/:product" render={(props: screenProps) => {
			const paths = ["about", "collections"]
			const { match: { params: { product } } } = props
			return <View id="jsdhfkjhsdjfhkjshdjdshf">
				<Wrapper justify="start">
					<Button>Home</Button>
					<Text>/</Text>
					{!paths.includes(product) && <>
						<Button>Collections</Button>
						<Text>/</Text>
					</>}
					<Text>{product}</Text>
				</Wrapper>
				{!paths.includes(product) && <Product {...props} />}
			</View>
		}} />
		<Route path="/about" exact component={About} />
		<Route path="/collections" exact component={Collections} />
	</>
}

export default App