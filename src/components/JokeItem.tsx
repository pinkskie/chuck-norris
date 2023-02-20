import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { isFavorite, toggleJoke } from "../store/favoriteSlice";
import { IJoke } from "../store/types";

interface IProps {
  joke: IJoke;
  number: number;
}

export const JokeItem: React.FC<IProps> = ({ joke, number }) => {
  const dispatch = useDispatch();

  const isFav = useSelector(isFavorite(joke));

  const handleAddToFavorites = () => {
    dispatch(toggleJoke(joke));
  };

  return (
    <Wrapper>
      <AddButton onClick={handleAddToFavorites}>
        <HeartIcon added={isFav} />
      </AddButton>
      <Title>Joke № {number}</Title>
      <Joke>{joke.value}</Joke>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25rem;
  height: 15rem;
  position: relative;
  border-radius: 1rem;
  box-shadow: 0px 1px 11px -1px rgba(150, 153, 156, 0.4);
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 1px 11px -1px rgba(150, 153, 156, 0.8);
  }
  @media screen and (max-width: 762px) {
    width: 24rem;
  }
`;

const AddButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  svg {
  }
`;

const Title = styled.p`
  font-size: 1.25rem;
  text-align: center;
  padding: 0.5rem 0 1rem;
  font-weight: 600;
`;

const Joke = styled.p`
  padding: 1rem;
  margin: 0 auto;
`;
