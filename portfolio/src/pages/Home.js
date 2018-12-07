import React, {Component} from 'react';
import '../index.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
	render(){
		return(
			<div>
			<Nav />
      		<Header />
      		<Skills />
      		<Footer/>
			</div>
		)
	}
}

export default Home