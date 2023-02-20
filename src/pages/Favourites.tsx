import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { JokesList } from "../components/JokesList";
import { RootState } from "../store";
import { clearJokes } from "../store/favoriteSlice";

const Favourites = () => {
  const jokes = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title>Favourites</Title>
      <ClearBtn onClick={() => dispatch(clearJokes())}>
        <img src={require("../assets/broom.png")} alt="broom" />
        Clear
      </ClearBtn>
      {jokes.length === 0 && <Text>Favorites are empty</Text>}
      <JokesList data={jokes} />
    </Wrapper>
  );
};

export default Favourites;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: "center";
  margin-bottom: 1rem;
`;

const Text = styled.p`
  text-align: center;
  margin: 4rem;
  font-size: 1.25rem;
  color: #a7a7a7;
`;

const ClearBtn = styled.button`
  border: none;
  border-radius: 999rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
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
      transform: rotate(-10deg);
    }
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.2s ease;
  }
`;
