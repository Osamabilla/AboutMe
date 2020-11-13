import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Icon } from 'react-mdl';
import { Redirect } from 'react-router-dom';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

handleClick = () => {
    window.location.href = 'https://stackoverflow.com/questions/31095759/react-router-redirect-to-a-different-domain-url';
    return null;
}


toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://assets.vsco.co/assets/images/vsco-share-image.png) center/cover'}}>
                </CardTitle>
                <CardText>
                    <h5 style={{fontWeight: 'bold'}}>ASP.NET Image Sharing App</h5>
                    In this project, i decided to create an image-sharing website inspired by vsco to get a better understanding of the .NET framework.
                    This website application was designed primarily for mobile users, and i therefore encourage you to check out this application on your phone. URL for the website: osamabilla.com
                </CardText>
                <CardActions border>
                    <Button colored><a target="_blank" href="https://github.com/Osamabilla?tab=repositories">Github</a></Button>
                    <Button colored><a target="_blank" href="http://osamabilla.com">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>  
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://noobtuts.com/content/unity/2d-space-shooter-game/unity_2d_space_shooter.png)'}}>
                </CardTitle>
                <CardText>
                    <h5 style={{fontWeight: 'bold'}}>2D Arcade Shooter</h5>
                    As an avid gamer, my curiosity lead me in the pursure of video game development.
                    I created this video game using C# and the Unity Game Engine back in 2015 when i was starting my first year in high school.
                    Unfortunately, i was not familiar with GIT back then, and the code, along with many other unfinished video game prototypes, were lost.
                    Luckily, i managed to atleast upload one of my projects to the internet. Since it was made a while back, it is no longer supported on modern web browsers.
                </CardText>
                <CardActions border>
                    <Button colored ><a target="_blank" href="https://www.kongregate.com/games/billaosama/galaxy-wars">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>  
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png) center/cover'}}>
                </CardTitle>
                <CardText>
                    <h5 style={{fontWeight: 'bold'}}>Breadth First Search Visualization</h5>
                    To be implemented in Python.
                </CardText>
                <CardActions border>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>  
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png) center/cover'}}>
                </CardTitle>
                <CardText>
                    <h5 style={{fontWeight: 'bold'}}>Memory Card Game</h5>
                    Simple memory card game written in JavaScript.
                </CardText>
                <CardActions border>
                    <Button colored ><a target="_blank" href="https://github.com/Osamabilla/Memory-Game-JS">Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>  
                </CardMenu>
            </Card>
            </div>

            
        )
        
    } else if(this.state.activeTab === 1){
    return(
        <div><h1>This is Angular</h1></div>
    )}else if(this.state.activeTab === 2){
    return(
        <div><h1>This is VueJS</h1></div>
    )} else if(this.state.activeTab === 3){
    return(
        <div><h1>This is MongoDB</h1></div>
    )}
}


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Projects</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            {/* <div clasasName="content">{this.toggleCategories()}</div> */}
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
            </div>
        )
    }
}

export default Projects;