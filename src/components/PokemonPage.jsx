import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pkPage.css'; 

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonNames = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'eevee', 'mewtwo'];
        const promises = pokemonNames.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`));
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(response => response.json()));

        const pokemonList = data.map(pokemon => ({
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          imageUrl: pokemon.sprites.front_default,
        }));

        setPokemonData(pokemonList);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <Container className="pokemon-container">
      <img src="src/components/Img/pokemon-logo.png" alt="Pokemon Title" className="title-img" />
      <Row>
        {pokemonData.map((pokemon, index) => (
          <Col md={4} key={index} className="pokemon-col">
            <Card className="pokemon-card">
              <Card.Img variant="top" src={pokemon.imageUrl} />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonPage;
