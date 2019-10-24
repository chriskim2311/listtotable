import React, { Component } from 'react';
import Navigation from './hamburgerAndBack';
import '../assets/css/teamPage.css';
import github from '../assets/images/socialMedia/github.png'; 
import linkedIn from '../assets/images/socialMedia/linkedIn.png';
import Andrew from '../assets/images/headshots/andrew.jpg';

import Sasha from '../assets/images/headshots/sasha.jpg';
import Mike from '../assets/images/headshots/michael.jpg';
import Chris from '../assets/images/headshots/chris.jpg';
import Andy from '../assets/images/headshots/andys.jpg';
import AndyO from '../assets/images/headshots/andy.jpg';

export default class Team extends Component {
    teamInfo = () => {
        const memberInfos = [
            {
                Name: 'Chris Kim',
                Title: 'Project Lead',
                LinkedIn: 'https://www.linkedin.com/in/christopher-kim-71898949/',
                Github: 'https://github.com/chriskim2311',
                Portfolio: 'https://Kim-Chris.com',
                Photo: Chris,
            },
            {
                Name: 'Andy Park',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andypark105/',
                Github: 'https://github.com/apark105',
                Portfolio: 'https://andyjpark.com',
                Photo: Andy,
            },
            {
                Name: 'Sasha Dykun',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/sasha-oleksandr-dykun-442b04171/',
                Github: 'https://github.com/sashadykun',
                Portfolio: 'https://sashadykun.com',
                Photo: Sasha,
            },
            {
                Name: 'Andrew Ouatu',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andrew-ouatu-776774b4/',
                Github: 'https://github.com/andrewouatu',
                Portfolio: '',
                Photo: Andrew,
            },
            {
                Name: 'Mike Chu',
                Title: 'Back-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/michaeljchu/',
                Github: 'https://github.com/mchu79',
                Portfolio: '',
                Photo: Mike,
            },
            {
                Name: 'Andy Ong',
                Title: 'Project Manager',
                LinkedIn: 'https://www.linkedin.com/in/andy-ong/',
                Github: 'github.com/Breathics',
                Portfolio: '',
                Photo: AndyO,
            },
        ]
        const individualRow = memberInfos.map((memberInfo, index) => {
            
            const { Name, Title, LinkedIn, Github, Portfolio, Photo } = memberInfo
            return (
                <div key={index} className="col s12 m6 l6">
                    
                    <div className="card ">
                        <div className="card-image center circle">
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
                <div className="teamMembers row">
                   {this.teamInfo()}
                </div>
            </div>
            </React.Fragment>
        )
    }
}