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
            <a href="https://twitter.com/chefdeveloper" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/meghamenon/" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://angel.co/megha-menon" target="_blank"><i className="fa fa-angellist"></i></a>
            <a href="https://github.com/megmenon" target="_blank"><i className="fa fa-github"></i></a>
    		</div>
			</footer>
			</div>

		)
	}
}

export default Footer