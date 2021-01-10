Repositório do front-end da aplicação feita no desafio da Fabwork

## Instalação e configuração

1. Faça o clone desse repositório;
2. Acesse a raiz do projeto `cd desafio_fab_front`;
3. Faça uma cópia do env `cp .env.example .env` e configure a URL da API;
4. Instale o NPM `apt-get install npm -y`
5. Execute `npm install` para instalar as dependências;

## Ambiente de Desenvolvimento
1. Execute `npm start` para iniciar o servidor local.
2. `npm test` para executar os testes.

## Ambiente de Produção
1. Execute `npm run build`.

## Estrutura de pastas
```
├── public
└── src
    ├── components/ # componentes compartilháveis em toda aplicação
    ├── configs/ # configurações da aplicação e de bibliotecas
    ├── pages/ # páginas da aplicação
    ├── routes/ # rotas da aplicação
    ├── services/ # configuração de serviços utilizados
    └── store # configuração e dispatch das ações do Redux
	    └── modules # actions, reducer e sagas separados em módulos
    ├── styles/ # estilos globais
    └── utils/ # funções utilitárias
```

## Tecnologias

- [React](https://reactjs.org/)
- [React router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist#quickstart)
- [Ant Design](https://ant.design/)
- [Axios](https://github.com/axios/axios)
- [React icons](https://react-icons.netlify.com/)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React app rewired](https://github.com/timarney/react-app-rewired)
- [PropTypes](https://github.com/facebook/prop-types)
