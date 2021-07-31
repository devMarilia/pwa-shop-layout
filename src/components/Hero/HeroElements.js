import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  

  margin: 0 auto;

  display: flex;

  > aside {
    width: 100%;
    height: 100vh;
    flex: 2;
    /* padding: 10px 20px; */

  }

  > section {
    width: 100%;
    height: 100vh;
    flex: 2;
    /* padding: 10px 20px; */

    > h1 {
      margin-bottom: 24px;
      
    }

    > strong {
      display: flex;
      justify-content: flex-end;
      font-weight: bold;
      
    }

 
  }
  .section-info {
      background-color: var(--puce);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: end;


      > h1 {
        font-weight: 400;
        color: #fff;
        font-size: 5em;
        border-bottom: 2px solid #fff;
      }
      b {
        color: #fff;
      }
    }

    .section-img {
      background-color: #FADEE6;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 100vh;
        width: 85%;
      }
    }

`;