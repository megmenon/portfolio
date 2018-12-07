import React, {Component} from 'react';
import '../index.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class AboutMe extends Component{
	render(){
		return(
		<div>
		<Nav />
		<div className="container av">
            <div className="about-me">
	            </div>
	     </div>
		<section className="skills portfolio-block block-intro">
    		<div className="container">
        	<div className="row">
            <div className="col">
                <div className="card special-skill-item border-0">
                <div className="container av">
            	</div>
                <div className="card-header bg-transparent border-0">
                <div className="card-body contactme">
                <div className="card special-skill-item border-0">
                <div class="row no-gutters">
                <section class="cv">
                <div className="container">
                <div className="work-experience group">
                <div className="heading">
                <h2 className="text-center">Education</h2>
                </div>
                <div className="item">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Web Development Immersive</h3>
                        <h4 className="organization">General Assembly, San Francisco</h4>
                    </div>
                    <div className="col-md-6"><span className="period">03/2018 - 06/2018</span></div>
                </div>
                <p className="text-muted details">
                12 week immersive program in Full Stack Web Development
                </p>
            </div>
            <div className="item">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Bachelor of Science in General Studies</h3>
                        <h4 className="organization">City University of Seattle</h4>
                    </div>
                    <div className="col-md-6"><span className="period">07/2015 - 09/2017</span></div>
                </div>
                <p className="text-muted details">
                Concentrations include: Business Management and Marketing
                </p>
            </div>
        </div>
        <div className="education group">
            <div className="heading">
                <h2 className="text-center">Other Work Experience</h2>
            </div>
            <div className="item">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Whole Foods Market, San Ramon</h3>
                        <h4 className="organization">Catering Supervisor</h4>
                    </div>
                    <div className="col-md-6"><span className="period">07/2017 - 12/2017</span></div>
                </div>
                <p className="text-muted details">
                Single handedly managed the entire catering department for the San Ramon store. Job duties included planning and executing catering orders, scheduling and delivering of orders, responding to customer needs, planning event menus and maintaining Whole Foods customer service standards. 
                </p>
            </div>
        </div>
    </div>
</section>
</div>
</div>
</div>
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


export default AboutMe