import React, {Component} from 'react';
import '../index.css';

class Skills extends Component{
	render(){
		return(
			<div>
			<section className="skills">
    		<div className="container">
        	<div className="heading">
            <h2 className="skill-heading">Skills</h2>
            </div>
        <div className="row">
            <div className="col">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                    <i className="material-icons">web</i></div>
                    <div className="card-body">
                        <h3 className="card-title des">Web Development</h3>
                        <h4>
                        Full Stack Web Development using Java, JavaScript, Node.js, Express, 
                        MongoDB, SQL etc. </h4>
                    </div>
                </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                    <i className="material-icons">language</i></div>
                    <div className="card-body">
                        <h3 className="card-title des">Languages</h3>
                        <h4>
                        JavaScript, Java
                        </h4>
                    </div>
                </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                    <i className="material-icons">laptop</i></div>
                    <div className="card-body">
                        <h3 className="card-title des">Frameworks & Libraries</h3>
                        <h4>React, Redux, Angular, Spring, Spring Boot</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</div>

		)
	}
}

export default Skills