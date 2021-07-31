import styled from 'styled-components';

export const Container = styled.header`
  height: 72px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #dcdcdc;

  > div {
    width: 100%;
    max-width: 1130px;

    display: flex;
    justify-content: space-between;

    > nav {
      width: fit-content;
      display: flex;
      align-items: center;

      > a {
        text-decoration: none;
        font-size: 16px;
        margin-left: 28px;
      }
      .logo {
          width: 126px;
          height: 45px;
      }

      .dropdown {
        position: relative;

        span {
          font-size: 16px;
          margin-left: 28px;
          cursor: pointer;
        }

        > div {
          opacity: 0;
          visibility: hidden;
          /* Transição que funciona com o visibility */
          transition: visibility 0.2s ease-in, opacity 0.2s ease-in;
          position: absolute;
          left: 28px;
          background-color: #fff;
          min-width: 160px;
          box-shadow: rgb(62 62 62 / 20%) 0px 2px 6px;
          z-index: 1;
          padding: 12px 0;
          display: flex;
          flex-direction: column;

          > a {
            text-decoration: none;
            color: red;
            padding: 12px 32px;
          }
        }

        &:hover > div {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
  
`;

export const SidebarLink = styled.a`
  /* display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  } */
`;