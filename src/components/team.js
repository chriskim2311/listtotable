
import React, { Component } from 'react';
import Navigation from './hamburgerAndBack';
import '../assets/css/teamPage.css';
import portfolio from '../assets/images/socialMedia/portfolio.png';
import github from '../assets/images/socialMedia/github.png'; 
import linkedIn from '../assets/images/socialMedia/linkedIn.png';


export default class Team extends Component {

    teamInfo = () => {
        const memberInfos = [
            {
                Name: 'Chris Kim',
                Title: 'Project Lead',
                LinkedIn: 'https://www.linkedin.com/in/christopher-kim-71898949/',
                Github: 'https://github.com/chriskim2311',
                Portfolio: 'Kim-Chris.com',
                Photo: '',
            },
            {
                Name: 'Andy Park',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andypark105/',
                Github: 'https://github.com/apark105',
                Portfolio: 'andyjpark.com',
                Photo: '',
            },
            {
                Name: 'Sasha Dykun',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/sasha-oleksandr-dykun-442b04171/',
                Github: 'https://github.com/sashadykun',
                Portfolio: 'http://sashadykun.com',
                Photo: '',
            },
            {
                Name: 'Andrew Ouatu',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andrew-ouatu-776774b4/',
                Github: 'https://github.com/andrewouatu',
                Portfolio: '',
                Photo: '',
            },
            {
                Name: 'Michael Chu',
                Title: 'Back-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/michaeljchu/',
                Github: 'https://github.com/mchu79',
                Portfolio: '',
                Photo: '',
            },
            {
                Name: 'Andy Ong',
                Title: 'Project Manager',
                LinkedIn: 'https://www.linkedin.com/in/andy-ong/',
                Github: 'github.com/Breathics',
                Portfolio: '',
                Photo: '',
            },
        ]
        const individualRow = memberInfos.map((memberInfo) => {
            
            const { Name, Title, LinkedIn, Github, Portfolio } = memberInfo
            return (
                <div className="individualRow">
                    <div className="photoIcon">
                        some image
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