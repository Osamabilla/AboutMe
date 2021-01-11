import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from 'C:/Users/Osama Billa/Desktop/netlifyapp/AboutMe/src/bam.PNG';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={logo}
                        alt="avatar"
                        className="avatar-img"
                        style={{borderRadius: '20px'}}
                        />

                        <div className="banner-text">
                            <div className="banner-text-h1"><h1>Computer Science Student</h1></div>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Python | ASP.NET | MySQL | Go</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/osama-billa-4b863b1bb/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Osamabilla" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>



                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;