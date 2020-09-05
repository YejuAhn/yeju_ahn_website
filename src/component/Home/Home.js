import React from 'react'
import {Container, Divider, Icon, Image} from 'semantic-ui-react'
import myImage from "../../asset/myImage.jpg";
import Contact from "./Contact";
import LineDemo from './Chart';
import './Home.css';

const Home = () => (
    <div>
        <Container className = 'allAboutMe'>
            <div className = "row">
                <div id = 'colOne'>
                    <div className = "myNameInfo">
                        <h1 className = "myName">Esther Yeju Ahn</h1>
                        <h2 className = "myInfo">
                            B.S. in Statistics and Machine Learning
                            <br/> Minor in Software Engineering
                            <br/>@ Carnegie Mellon University
                        </h2>
                    </div>
                    <Contact></Contact>
                </div>
                <div id = 'colTwo'>
                    <Image src = {myImage} circular/>
                </div>
            </div>
            <div className = 'aboutMe'>
                <Icon name='home' />
                <b>About Me</b>
                <br/>
                <Divider />
                <p>
                    Hi! Welcome to my website ! I am a rising Senior studying Statistics, Machine learning, and Software engineering at Carnegie Mellon University.
                    I am passionate about building products using data that help people make meaningful insights and important decisions. I am interested in studying statistics and data science in my further studies to understand the world better and solve problems that can make lasting benefits to society.
                    <br/>
                    In my free time, I love practicing Yoga, cooking, and listening to old record pop songs! Feel free to reach out to me! I would love to chat!
                    <br/>
                    <br/>
                    I am currently looking for Spring 2021 Co-Op and Summer 2021 Software Engineering Internship opportunities :)
                </p>
            </div>
            <LineDemo>
            </LineDemo>
        </Container>
    </div>
)

export default Home
