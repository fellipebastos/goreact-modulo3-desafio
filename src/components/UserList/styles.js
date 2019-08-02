import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fff;
  border-radius: 4px;
  padding: 1.2rem;
  width: 300px;
  z-index: 1;

  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
`;

export const List = styled.ul`
  width: 100%;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .user-avatar {
      width: 100%;
      max-width: 40px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .user-info {
      display: flex;
      flex-direction: column;

      .name,
      .login {
        font-size: 0.85rem;
      }

      .name {
        font-weight: bold;
        margin-bottom: 2px;
      }

      .login {
        color: #8a8a8a;
      }
    }

    .user-action {
      margin-left: auto;

      .dismiss,
      .view {
        cursor: pointer;
      }

      .dismiss {
        margin-right: 30px;
        color: red;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 0.6rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid #ededed;
    }
  }
`;
