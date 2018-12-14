
import React, { Component } from 'react';
import Navigation from './hamburgerAndBack';
import '../assets/css/teampage.css';
import portfolio from '../assets/images/socialMedia/portfolio.png';
import github from '../assets/images/socialMedia/github.png'; 
import linkedIn from '../assets/images/socialMedia/linkedIn.png';
import andyP from '../assets/images/headshots/andyP.JPG';


export default class Team extends Component {

    teamInfo = () => {
        const memberInfos = [
            {
                Name: 'Chris Kim',
                Title: 'Project Lead',
                LinkedIn: 'https://www.linkedin.com/in/christopher-kim-71898949/',
                Github: 'https://github.com/chriskim2311',
                Portfolio: 'Kim-Chris.com',
                Photo: andyP,
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
                Photo: andyP,
            },
            {
                Name: 'Andrew Ouatu',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andrew-ouatu-776774b4/',
                Github: 'https://github.com/andrewouatu',
                Portfolio: '',
                Photo: andyP,
            },
            {
                Name: 'Michael Chu',
                Title: 'Back-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/michaeljchu/',
                Github: 'https://github.com/mchu79',
                Portfolio: '',
                Photo: andyP,
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
                <div className="individualRow">
                    <div className="photoIcon">
                        <img src={Photo} alt=""/>
                    </div>
                    <div className="descriptionContainer">
                        <div className="individualName">{Name}</div>
                        <div className="individualTitle">{Title}</div>
                        <div className="socialMediaIconContainer">
                            <div className="socialMediaIcon"><a href={Github}><img className="smIcon" src={github}/></a></div>
                            <div className="socialMediaIcon"><a href={LinkedIn}><img className="smIcon" src={linkedIn}/></a></div>
                            <div className="socialMediaIcon"><a href={Portfolio}><img className="smIcon" src={portfolio}/></a></div>
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