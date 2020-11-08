import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Osama Billa</h2>
                        <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Profile</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p style={{fontWeight: 'bold'}}>Ambitious and result driven student with passion for my craft.</p>
                        <hr/>
                        <p>Working for years as a referee shapes you into becoming a vocal and confident individual with the ability to voice opinions,
                            believe in yourself and face criticism with a positive attitude.
                            Both teamwork and independent work are key components in said profession. These characteristics will benefit me well in my pursue of a career in software development.
                            </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5 style={{fontWeight: 'bold'}}>Address</h5>
                        <p>Kolheisvingen 35 </p>
                        <p>4034 Stavanger</p>
                        <hr/>
                        <h5 style={{fontWeight: 'bold'}}>Phone</h5>
                        <p>+47 93696169</p>
                        <hr/>
                        <h5 style={{fontWeight: 'bold'}}>Email</h5>
                        <p>osamabilla@hotmail.com</p>
                        <hr/>
                        <h5 style={{fontWeight: 'bold'}}>Personal Webpage</h5>
                        <p>osamabilla.com</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                        startYear={2015}
                        endYear={2018}
                        schoolName={"Hetland Vgs"}
                        schoolDescription={"General studies with specialization in physics, chemistry and mathematics"}
                        />

                        <Education
                        startYear={2018}
                        endYear={2021}
                        schoolName={"University of Stavanger"}
                        schoolDescription={"Currently on my third and final year of my Bachelors degree in Computer Science"}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                        startYear={"2016"}
                        endYear={"to date"}
                        jobName="Referee for Rogaland Football Association"
                        jobDescription="Referee and Assistant Referee for football matches taking place in Rogaland at levels ranging from G16 - 4th Division"
                        />

                        <Experience 
                        startYear={"July 2017"}
                        endYear={"August 2017"}
                        jobName="Berendsen Tekstil AS"
                        jobDescription="Summer Internship - Tasks included taking care of other businesses working apparel"
                        />

                        <Experience 
                        startYear={"December 2017"}
                        endYear={"June 2019"}
                        jobName="Rush Trampolinepark"
                        jobDescription="Assisted in opening preperations of the park. Responsible of the planning and coordination of birthday programs and to supervise its execution"
                        />

                        <Experience 
                        startYear={"July 2019"}
                        endYear={"August 2019"}
                        jobName="Rosenberg Worley AS"
                        jobDescription="Summer Internship - Tasks included assisting in installation of pipes, prepping walls, painting, assembling shelves and cleaning"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <div className="skillsHTML">
                        <Skills
                        skill="HTML / CSS"
                        progress={80}
                        />
                        </div>

                        <div className="skillsJS">
                        <Skills
                        skill="Javascript"
                        progress={70}
                        />
                        </div>

                        <div className="skillsPython">
                        <Skills
                        skill="Python"
                        progress={60}
                        />
                        </div>

                        <div className="skillsReact">
                        <Skills
                        skill="React"
                        progress={40}
                        />
                        </div>

                        <div className="skillsASP">
                        <Skills style={{fontSize: '300px'}}
                        skill="ASP .NET"
                        progress={40}
                        />
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;