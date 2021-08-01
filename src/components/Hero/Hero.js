import React from 'react'
import {
    Container,
    Content
  } from './HeroElements';

import Banner from '../../assets/Imgs/banner.jpg'

const Hero = () => {
 return (
   <Container>

     <Content>
       <section className="section-info">
       <h1>Agora somos <br/>mais<br/> <b>íntimas</b> </h1>
       
       </section>

       <section className="section-img">
         <img src={Banner} alt="lorem"/> 
       </section>
     </Content>
   </Container>
 )
 }
  export default Hero
