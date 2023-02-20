import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { useLazyGetRandomJokeQuery } from "../store/chuck-norris.api";
import { IJoke } from "../store/types";
import { JokesList } from "../components/JokesList";

const JOKES_PER_MS = 2000;

const Home = () => {
  const [fetchingJokes, setFetchingJokes] = useState<boolean>(false);
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [getJoke] = useLazyGetRandomJokeQuery();

  const toggleFetching = () => {
    setFetchingJokes(!fetchingJokes);
  };

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const { data } = await getJoke();
        if (data) {
          setJokes((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(() => {
      handleFetch();
    }, JOKES_PER_MS);

    if (!fetchingJokes) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [fetchingJokes, getJoke]);

  return (
    <Wrapper>
      <ChuckNorris
        src={require("../assets/io.png")}
        alt="chuck"
        className="chuck"
      />
      <Button onClick={toggleFetching} isLoading={fetchingJokes}>
        <img src={require("../assets/gun.png")} alt="gun" />
        {fetchingJokes ? "Stop" : "Generate"}
      </Button>
      {jokes.length === 0 && (
        <Text>Jokes list is empty, click to Generate</Text>
      )}
      <JokesList data={jokes} />

      {fetchingJokes && (
        <img src={require("../assets/tikva.gif")} alt="tivka" />
      )}
    </Wrapper>
  );
};

export default Home;

const spinAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChuckNorris = styled.img`
  width: 20rem;
  margin: 2rem 0;
`;

const Button = styled.button<{ isLoading: boolean }>`
  border: none;
  border-radius: 999rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  transition: 0.2s ease;
  background-color: transparent;
  box-shadow: 0px 1px 11px -1px rgba(150, 153, 156, 0.4);
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    background-color: #f15a24;
    color: white;
    cursor: pointer;
    img {
      transform: rotate(360deg);
    }
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.2s ease;
    ${(props) =>
      props.isLoading &&
      css`
        animation: ${spinAnimation} 1s infinite;
      `}
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 4rem;
  font-size: 1.25rem;
  color: #a7a7a7;
`;
