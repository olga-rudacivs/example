import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import PokemonCard from "./pokemonCard.jsx"; 

const MyPokemons = () => {
  const pokemons = useSelector((state) => state.auth.currentUser?.pokemons); // Получаем покемонов из состояния

  const [isVisible, setIsVisible] = useState(false); // Объявление состояния isVisible

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Функция для переключения видимости покемонов
  };

  return (
    <div>
      <h2 onClick={toggleVisibility} style={{ cursor: "pointer" }}>
        {isVisible ? "Скрыть" : "Показать"} покемоны
      </h2>
      {isVisible && (
        <Row gutter={16}>
          {pokemons && pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <Col span={6} key={pokemon.id}>
                <PokemonCard
                  pic={pokemon.sprite}
                  name={pokemon.name}
                  weight={pokemon.weight}
                />
              </Col>
            ))
          ) : (
            <p>У вас нет покемонов.</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default MyPokemons;

