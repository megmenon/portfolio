import React, {Component} from 'react';
import '../index.css';
import Mailto from 'react-protected-mailto';
// import { SocialIcon } from 'react-social-icons';

class Footer extends Component{
	render(){
		return(
			<div>
			<footer className="page-footer">
    		<div className="container">
    		<h3><strong>Megha Menon &copy; </strong></h3><br/><br/>
            <h4><Mailto className="mail" email='mmenon.0419@gmail.com'/></h4>
            <h4>510.936.3244</h4> <br/><br/>
    		</div>
			</footer>
			</div>

		)
	}
}

export default Footer