import React, {Component} from 'react';
import '../index.css';

class Nav extends Component{
	render(){
		return(
			<div>
			<nav className="navbar navbar-dark navbar-expand-lg bg-white portfolio-navbar gradient navbar-fixed-top">
    <div className="container"><a className="navbar-brand logo" href="/">Megha Menon</a>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
    <span className="sr-only">Toggle navigation</span>
    <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse"
            id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation"><a className="nav-link active" href="/">Home</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="/aboutme">About</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="/projects">Projects</a></li>
            </ul>
        </div>
    </div>
</nav>
			</div>
		)
	}
}

export default Nav;