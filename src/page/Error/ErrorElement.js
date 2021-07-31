import styled from "styled-components";

export const Container = styled.div `
    padding-top:100px;
    font-size: 60px;
    color:#fff;


    h6 {
    font-size: 20px;
    color:#fff;
    white-space: nowrap;
    border-right: solid 3px #fff;
    overflow: hidden; 
  }
  h6 {
    animation: animated-text 4s steps(25) 1s 1 normal both, animated-cursor 600ms steps(25) infinite; 
  }
  
  
  @keyframes animated-text{
    from{width: 0;}
    to{width: 340px;}
  }
  
  @keyframes animated-cursor{
    from{border-right-color: #fff;}
    to{border-right-color: transparent;}
  }

`