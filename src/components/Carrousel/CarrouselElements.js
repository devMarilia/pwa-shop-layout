import styled from "styled-components";

export const Container = styled.section `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .carousel {
    width: 60%;
    height: 50vh;
    background-color: black;
}


  .carouselInner {
    height: 50em;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
}

.carouselInner .left {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
}

.carouselInner .center {
    flex: 80%;
    height: 100%;
    display: grid;
    place-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    text-align-last: center;
}

h1 {
    font-size: 5rem;
}

p {
    font-size: 2rem;
}

h1, p {
    background-color: rgb(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 9px;
}

.carouselInner .right {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
}




`
export const Content = styled.section `

/* display: flex;
justify-content: center;
align-items: center; */


`