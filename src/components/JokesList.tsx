import styled from "styled-components";
import { IJoke } from "../store/types";
import { JokeItem } from "./JokeItem";

export const JokesList: React.FC<{ data: IJoke[] }> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((joke, index) => (
        <JokeItem joke={joke} key={joke.id} number={index + 1} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
  @media screen and (max-width: 762px) {
    grid-template-columns: 1fr;
  }
`;
