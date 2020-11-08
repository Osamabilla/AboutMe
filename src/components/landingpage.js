import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.15752-9/124425304_1021653278317555_8258438116295012959_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=CHMH80oX8Q0AX8G4w_A&_nc_ht=scontent.fsvg1-1.fna&oh=38a085092ff73ff129257525c713bd3d&oe=5FCDFC07"
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
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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