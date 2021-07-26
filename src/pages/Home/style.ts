import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;

  section {
    height: 100vh;
    width: 100%;
    max-width: 1180px;

    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;

    padding: 10px;

    .product-container {
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      height: 300px;
      background: #cdcdcd;
      border-radius: 12px;
      padding: 20px;
      border: solid 1px black;

      h6 {
        font-size: 20px;
      }

      button {
        margin-top: 10px;
      }
    }
  }
`;
