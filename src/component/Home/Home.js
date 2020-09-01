import React from 'react'
import { Container, Divider, Icon, Image} from 'semantic-ui-react'
import myImage from "../../asset/myImage.jpg";


const Home = () => (
    <div>
        <Container textAlign='center'>
            <h1>Esther Yeju Ahn</h1>
        </Container>
        <Container style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: '40px'
            }}>
            <Image src = {myImage} size='medium' circular style={{ alignSelf: 'center' }}/>
        </Container>
        <Container textAlign='justified'>
            <br/>
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
        </Container>
    </div>
)

export default Home
