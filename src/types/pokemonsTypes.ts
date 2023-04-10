type PokemonType = {
  name: string;
  summary: string;
  color: string;
};

export const pokemonTypes = {
  normal: {
    name: 'Normal',
    summary:
      'Pokémon de tipo Normal não tem fraquezas ou forças contra outros tipos.',
    color: 'gray',
  },
  fire: {
    name: 'Fire',
    summary:
      'Pokémon de tipo Fogo são fortes contra tipos Grama, Gelo, Inseto e Aço, mas fracos contra tipos Água, Rocha e Terra.',
    color: 'orange',
  },
  water: {
    name: 'Water',
    summary:
      'Pokémon de tipo Água são fortes contra tipos Fogo, Terra e Rocha, mas fracos contra tipos Grama e Elétrico.',
    color: 'blue',
  },
  grass: {
    name: 'Grass',
    summary:
      'Pokémon de tipo Grama são fortes contra tipos Água, Terra e Rocha, mas fracos contra tipos Fogo, Gelo, Venenoso, Voador e Inseto.',
    color: 'green',
  },
  electric: {
    name: 'Electric',
    summary:
      'Pokémon de tipo Elétrico são fortes contra tipos Água e Voador, mas fracos contra tipos Terra.',
    color: 'yellow',
  },
  ice: {
    name: 'Ice',
    summary:
      'Pokémon de tipo Gelo são fortes contra tipos Grama, Terra, Voador e Dragão, mas fracos contra tipos Fogo, Lutador, Rocha e Aço.',
    color: 'lightblue',
  },
  fighting: {
    name: 'Fighting',
    summary:
      'Pokémon de tipo Lutador são fortes contra tipos Normal, Gelo, Rocha, Aço e Noturno, mas fracos contra tipos Voador, Psíquico e Fada.',
    color: 'red',
  },
  poison: {
    name: 'Poison',
    summary:
      'Pokémon de tipo Venenoso são fortes contra tipos Grama e Fada, mas fracos contra tipos Terra e Psíquico.',
    color: 'purple',
  },
  ground: {
    name: 'Ground',
    summary:
      'Pokémon de tipo Terra são fortes contra tipos Elétrico, Fogo, Envenenado, Rocha e Aço, mas fracos contra tipos Água, Grama e Gelo.',
    color: 'orange',
  },
  flying: {
    name: 'Flying',
    summary:
      'Pokémon de tipo Voador são fortes contra tipos Grama, Lutador e Inseto, mas fracos contra tipos Elétrico, Gelo e Rocha.',
    color: 'teal',
  },
  psychic: {
    name: 'Psychic',
    summary:
      'Pokémon de tipo Psíquico são fortes contra tipos Lutador e Venenoso, mas fracos contra tipos Inseto, Fantasma e Noturno.',
    color: 'pink',
  },
  bug: {
    name: 'Bug',
    summary:
      'Pokémon de tipo Inseto são fortes contra tipos Grama, Psíquico e Noturno, mas fracos contra tipos Fogo, Voador e Rocha.',
    color: 'green',
  },
  rock: {
    name: 'Rock',
    summary:
      'Pokémon de tipo Rocha são fortes contra tipos Fogo, Gelo, Inseto e Voador, mas fracos contra tipos Água, Grama, Lutador, Terra e Aço.',
    color: 'gray',
  },
  ghost: {
    name: 'Ghost',
    summary:
      'Pokémon de tipo Fantasma são fortes contra tipos Psíquico e Fantasma, mas fracos contra tipos Noturno.',
    color: 'purple',
  },
  dragon: {
    name: 'Dragon',
    summary:
      'Pokémon de tipo Dragão são fortes contra tipos Dragão, mas fracos contra tipos Gelo, Fada e Noturno.',
    color: 'purple',
  },
  dark: {
    name: 'Dark',
    summary:
      'Pokémon de tipo Noturno são fortes contra tipos Psíquico e Fantasma, mas fracos contra tipos Lutador, Inseto e Fada.',
    color: 'black',
  },
  steel: {
    name: 'Steel',
    summary:
      'Pokémon de tipo Aço são fortes contra tipos Gelo, Rocha e Fada, mas fracos contra tipos Fogo, Lutador e Terra.',
    color: 'gray',
  },
  fairy: {
    name: 'Fairy',
    summary:
      'Pokémon de tipo Fada são fortes contra tipos Lutador, Inseto e Dragão, mas fracos contra tipos Venenoso e Aço.',
    color: 'pink',
  },
};
