import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { countOfFav } from "../store/favoriteSlice";

export const Header = () => {
  const count = useSelector(countOfFav);
  return (
    <Links>
      <Link to="/">Home</Link>
      <Link to="/favourites">
        Favourites<sup>{count}</sup>
      </Link>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  gap: 1rem;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: black;
    font-weight: 700;
    transition: 0.2s ease;
    border-bottom: 2px solid white;
    outline: none;
    position: relative;

    &:hover {
      border-bottom: 2px solid black;
    }
    sup {
      position: absolute;
      right: -0.7rem;
      top: -0.6rem;
      font-size: 0.75rem;
      background-color: #f15a24;
      border-radius: 100%;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
`;
