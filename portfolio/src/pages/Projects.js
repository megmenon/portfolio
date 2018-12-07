import React, {Component} from 'react';
import '../index.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
class Projects extends Component{
	render(){
		return(
	<div>
	   <Nav />
    <section class= "skills myskills">
        <div class="container">
            <div class="row">
                <div class="col">
                        <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"></div>
                    <div className="card-body">
                        <h3 className="card-title des">Stagha Sandwiches</h3>
                        <h4>
                        A full-stack ice-cream store application that has most functionalities of an e-commerce store. Functionalities include: pick an ice cream and cookie flavor, place an order, edit and delete existing order. 
                        Languages & technologies used:  <strong> HTML, CSS, JavaScript, Node.js, Express, Mongoose and MongoDB. </strong> <br/>
                        
                        </h4>
                        <a href="https://icecream-sandwich-order-app.herokuapp.com/" target="_blank">
                        <button class="btn btn-danger" type="button">View</button></a>
                    </div>
                    </div>
                    <div class="w-100"></div>
                    <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"></div>
                    <div className="card-body">
                        <h3 className="card-title des">"Fee Faa"</h3>
                        <h4>
                        A full-stack web application with a React front-end. The app works like Twitter and is designed for soccer fans to banter about FIFA world cup.
                        Languages & technologies used: <strong> HTML, CSS, JavaScript, Mongoose, MongoDB, Node.js, Express and React. </strong><br/>
                        
                        </h4>
                        <a href="https://feefaa-frontend.herokuapp.com/" target="_blank">
                        <button class="btn btn-danger" type="button">View</button></a>
                    </div>
                </div>
                  <div class="w-100"></div>
                    <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0"></div>
                    <div className="card-body">
                        <h3 className="card-title des">Travel on Rails</h3>
                        <h4>
                        A full-stack CRUD travel blog application built using Ruby on Rails. 
                        Languages & technologies used:  <strong> HTML, CSS, Ruby, Ruby on Rails. </strong> <br/>
                        </h4>
                        <a href="https://github.com/megmenon/travel_on_rails" target="_blank">
                        <button class="btn btn-danger" type="button">View</button></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
<Footer />
</div>

		)
	}
}

export default Projects