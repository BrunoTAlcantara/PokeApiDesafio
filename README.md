# PokeFinder

## Descrição
Este é um aplicativo de busca e cadastro de pokémons usando a PokeAPI. Ele foi construído com Next.js, Chakra UI, Axios, SWR e Lottie.

O aplicativo permite que os usuários visualizem a lista de pokémons disponíveis, pesquisem por nome ou número e visualizem detalhes de cada pokémon. Os usuários também podem cadastrar novos pokémons e visualizar a lista de pokémons que eles capturaram.

## Funcionalidades
- Pagina de Home com quantidade de pokemons


![image](https://user-images.githubusercontent.com/29778550/230872123-14ba1434-fe78-46a4-8659-34c9e7b8ad9b.png)

- Visualizar a lista de pokémons disponíveis;



![image](https://user-images.githubusercontent.com/29778550/230872290-6cda51b0-a8b7-4d39-886e-65018ec39063.png)

- Pesquisar pokémons por nome 




![image](https://user-images.githubusercontent.com/29778550/230872352-8de73857-a37f-4fd3-9699-60e99c4a1c82.png)

- Cadastrar novos pokémons;



![image](https://user-images.githubusercontent.com/29778550/230872463-f4eab0fd-98b7-4eed-8930-483ac51e417a.png)

- Responsivo



![image](https://user-images.githubusercontent.com/29778550/230872893-dc1d63ca-9e49-480d-8baf-e4b8052704bf.png)

## Tecnologias Utilizadas
- Next.js: framework para construção de aplicações web em React;
- Chakra UI: biblioteca de componentes para React;
- Axios: cliente HTTP baseado em Promises para fazer requisições a APIs;
- SWR: biblioteca para gerenciamento de estado e cache de dados em aplicações React;
- Lottie: biblioteca para adicionar animações em aplicações web.

## Como Executar o Aplicativo Localmente
1. Clone o repositório:

git clone https://github.com/seu-usuario/pokedex.git


2. Acesse a pasta do projeto:
cd pokedex


3. Instale as dependências:
npm install


4. Execute o aplicativo:
npm run dev


5. Acesse o aplicativo em seu navegador em `http://localhost:3000`

## Como Executar o Aplicativo em um Container Docker
1. Clone o repositório:
git clone https://github.com/seu-usuario/pokedex.git


2. Acesse a pasta do projeto:
cd pokedex


3. Construa a imagem Docker:
docker build -t pokedex .


4. Execute o contêiner Docker:
docker run -p 3000:3000 pokedex


5. Acesse o aplicativo em seu navegador em `http://localhost:3000`

## Autor

Este projeto foi desenvolvido por [Bruno Theodoro]([https://github.com/seu-usuario](https://github.com/BrunoTAlcantara/P)).
