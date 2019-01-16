
import React, { Component } from 'react';
import Navigation from './hamburgerAndBack';
import '../assets/css/teamPage.css';
import portfolio from '../assets/images/socialMedia/portfolio.png';
import github from '../assets/images/socialMedia/github.png'; 
import linkedIn from '../assets/images/socialMedia/linkedIn.png';
import andyP from '../assets/images/headshots/andyP.JPG';
import team from '../assets/images/headshots/team.JPG';


export default class Team extends Component {

    teamInfo = () => {
        const memberInfos = [
            {
                Name: 'Chris Kim',
                Title: 'Project Lead',
                LinkedIn: 'https://www.linkedin.com/in/christopher-kim-71898949/',
                Github: 'https://github.com/chriskim2311',
                Portfolio: 'Kim-Chris.com',
                Photo: team,
            },
            {
                Name: 'Andy Park',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andypark105/',
                Github: 'https://github.com/apark105',
                Portfolio: 'andyjpark.com',
                Photo: andyP,
            },
            {
                Name: 'Sasha Dykun',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/sasha-oleksandr-dykun-442b04171/',
                Github: 'https://github.com/sashadykun',
                Portfolio: 'http://sashadykun.com',
                Photo: team,
            },
            {
                Name: 'Andrew Ouatu',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andrew-ouatu-776774b4/',
                Github: 'https://github.com/andrewouatu',
                Portfolio: '',
                Photo: team,
            },
            {
                Name: 'Michael Chu',
                Title: 'Back-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/michaeljchu/',
                Github: 'https://github.com/mchu79',
                Portfolio: '',
                Photo: team,
            },
            {
                Name: 'Andy Ong',
                Title: 'Project Manager',
                LinkedIn: 'https://www.linkedin.com/in/andy-ong/',
                Github: 'github.com/Breathics',
                Portfolio: '',
                Photo: andyP,
            },
        ]
        const individualRow = memberInfos.map((memberInfo) => {
            
            const { Name, Title, LinkedIn, Github, Portfolio, Photo } = memberInfo
            return (
                <div className="col">
                    
                    <div className="card horizontal">
                        <div className="card-image center">
                            <img src={Photo} alt=""/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h2 className="individualName center header">{Name}</h2>
                                <div className="individualTitle row center">{Title}</div>
                                <div className="socialMediaIconContainer card-action">
                                    <div className="socialMediaIcon "><a href={Github} target="_blank"><img className="smIcon" src={github}/></a></div>
                                    <div className="socialMediaIcon "><a href={LinkedIn} target="_blank"><img className="smIcon" src={linkedIn}/></a></div>
                                    <div className=" portfolio"><a   href={Portfolio} target="_blank">Portfolio</a></div>
                                </div>
                                
                                    
                                </div>

                            
                            
                        </div>
                    </div>
                </div>
            )
           
        }) 
        return individualRow
    }

    render() {
        <Navigation/>
        return(
            <React.Fragment>
            <Navigation/>
            <div className="teamPage">
                <div className="teamHeader">Meet The Team</div>
                <div className="teamMembers">
                   {this.teamInfo()}
                </div>
            </div>
            </React.Fragment>
        )
    }
}