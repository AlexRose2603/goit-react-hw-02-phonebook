import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  width: 350px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Name = styled.p`
  margin-left: 10px;
`;
export const Number = styled.p``;
export const Contact = styled.li`
  background: rgba(133, 169, 161, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid white;

  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  border-width: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
