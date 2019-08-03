import styled from 'styled-components';

export const Container = styled.div`
  &.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 9;

    &.d-none {
      display: none;
    }

    .modal-content {
      padding: 1.5rem;
      max-width: 400px;
      background-color: #fff;
      border-radius: 4px;

      .modal-header {
        text-align: center;
        margin-bottom: 10px;
      }

      .modal-body {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        input {
          display: block;
          width: 300px;
          padding: 15px;
          border-radius: 4px;
          border: 1px solid #bbb;
          margin-bottom: 10px;
        }

        .form-action {
          display: flex;
          justify-content: space-between;
          max-width: 300px;

          button {
            padding: 15px 20px;
            width: 145px;
            background-color: #ccc;
            border: 0;
            border-radius: 4px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;

            &:first-of-type {
              background: gray;
            }

            &:last-of-type {
              background: green;
            }
          }
        }
      }
    }
  }
`;
