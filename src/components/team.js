
import React, { Component } from 'react';
import Navigation from './hamburgerAndBack';
import '../assets/css/teamPage.css';
import gmail from '../assets/images/socialMedia/gmail.png';
import github from '../assets/images/socialMedia/github.png'; 
import linkedIn from '../assets/images/socialMedia/linkedIn.png';


export default class Team extends Component {

    teamInfo = () => {
        const memberInfos = [
            {
                Name: 'Andy Ong',
                Title: 'Project Manager',
                LinkedIn: 'https://www.linkedin.com/in/andy-ong/',
                Github: '',
                Email: '',
                Photo: '',
            },
            {
                Name: 'Chris Kim',
                Title: 'Project Lead',
                LinkedIn: 'https://www.linkedin.com/in/christopher-kim-71898949/',
                Github: '',
                Email: '',
                Photo: '',
            },
            {
                Name: 'Andy Park',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andypark105/',
                Github: '',
                Email: '',
                Photo: '',
            },
            {
                Name: 'Sasha Dykun',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/sasha-oleksandr-dykun-442b04171/',
                Github: '',
                Email: '',
                Photo: '',
            },
            {
                Name: 'Andrew Ouatu',
                Title: 'Front-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/andrew-ouatu-776774b4/',
                Github: '',
                Email: '',
                Photo: '',
            },
            {
                Name: 'Michael Chu',
                Title: 'Back-End Developer',
                LinkedIn: 'https://www.linkedin.com/in/michaeljchu/',
                Github: '',
                Email: '',
                Photo: '',
            }
        ]
        const individualRow = memberInfos.map((memberInfo) => {
            debugger
            const { Name, Title, LinkedIn, Github, Email } = memberInfo
            return (
                <div className="individualRow">
                    <div className="photoIcon">
                        some image
                    </div>
                    <div className="descriptionContainer">
                        <div className="individualName">{Name}</div>
                        <div className="individualTitle">{Title}</div>
                        <div className="socialMediaIconContainer">
                            <div className="socialMediaIcon"><img src={github}/></div>
                            <div className="socialMediaIcon"><img src={linkedIn}/></div>
                            <div className="socialMediaIcon"><img src={gmail}/></div>
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