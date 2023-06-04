# Meu Projeto

## Português

### Design System

O design system deste projeto foi feito visando objetividade, sendo de forma simplificada, com componentes dinâmicos separados por pastas de acordo com sua utilidade e variáveis de estilo (design tokens) pré-configuradas em um único arquivo SASS, utilizado em todos os componentes e páginas do projeto.

### Autenticação e Login

Este projeto utiliza um método de autenticação simples para fins demonstrativos.

A lógica consiste em:

1. Realizar uma requisição POST para a API do FakeAPI, usando a biblioteca 'axios' para fazer a requisição e blocos 'try', 'catch' e 'finally' para tratá-la em uma função assíncrona de login.
2. Se o login for realizado com sucesso, o token de autenticação, que vem na resposta da requisição, é salvo no localStorage do navegador e usado para validar o acesso à rota protegida no arquivo router.js, liberando o acesso ao caminho da página Dashboard.
3. No arquivo router.js, além da função que libera o acesso à rota Dashboard se tiver um token salvo no localStorage, há também outra função que remove o token toda vez que o caminho é alterado, redirecionando para a tela de login.
4. Na tela Dashboard, há um botão chamado "Logout" dentro do dropdown do botão 'Usuário', que, ao ser clicado, muda intencionalmente o caminho, removendo o token do localStorage e aplicando a proteção de acesso à página.

### Cadastro e Seleção de Planos

Este projeto utiliza uma requisição POST na API do FakeAPI para realizar um cadastro demonstrativo.

O cadastro é feito através de uma requisição para a rota específica e, por motivos de objetividade e limitação da API, não envia os dados dos planos.

Na tela de cadastro, existe toda uma lógica para obter o dado do plano selecionado, de acordo com a escolha do usuário, de forma distinta nas versões web e mobile.

1. Na versão desktop, o usuário realiza a escolha do plano clicando nos botões de CTA.
2. Na versão mobile, o usuário escolhe o plano através de um carousel/slider.

### Responsividade

Este projeto foi desenvolvido utilizando Flexbox para proporcionar maior responsividade entre as versões desktop e mobile.

Todos os ajustes feitos nas variáveis de estilo visam otimizar o projeto para:

1. Funcionar bem em ambos os breakpoints.
2. Reaproveitar componentes, sem a necessidade de criar versões distintas para eles.
3. Manter o código limpo e performático.

### Métricas

Este projeto foi criado e testado com frequência utilizando a ferramenta Lighthouse do Google, sempre monitorando as métricas de Performance, Acessibilidade, Boas Práticas e SEO, mantendo a nota entre 90-100.

---

## English

### Design System

The design system of this project was developed with the goal of simplicity, with dynamic components organized into folders according to their purpose and pre-configured style variables (design tokens) in a single SASS file, used across all components and pages of the project.

### Authentication and Login

This project utilizes a simple authentication method for demonstration purposes.

The logic consists of:

1. Making a POST request to the FakeAPI's API using the 'axios' library to handle the request and 'try', 'catch', and 'finally' blocks to handle it in an asynchronous login function.
2. If the login is successful, the authentication token, which is included in the response of the request, is saved in the browser's localStorage and used to validate access to the protected route in the router.js file, granting access to the Dashboard page.
3. In the router.js file, in addition to the function that grants access to the Dashboard route if a token is saved in the localStorage, there is another function that removes the token whenever the path is changed, redirecting to the login page.
4. On the Dashboard page, there is a "Logout" button within the dropdown of the 'User' button, which, when clicked, intentionally changes the path, removing the token from the localStorage and applying the access protection to the page.

### Registration and Plan Selection

This project uses a POST request to the FakeAPI's API to perform a demo registration.

The registration is done by making a request to the specific route and, for the sake of simplicity and limitations of the API, it does not send plan data.

On the registration page, there is a logic to obtain the selected plan data, according to the user's choice, in a different way for web and mobile versions.

1. In the desktop version, the user selects the plan by clicking on CTA buttons.
2. In the mobile version, the user chooses the plan through a carousel/slider.

### Responsiveness

This project was developed using Flexbox to provide better responsiveness between the desktop and mobile versions.

All adjustments made to the style variables aim to optimize the project to:

1. Function well in both breakpoints.
2. Reuse components, without the need to create distinct versions for them.
3. Maintain clean and performant code.

### Metrics

This project has been frequently created and tested using Google's Lighthouse tool, always monitoring the metrics of Performance, Accessibility, Best Practices, and SEO, maintaining a score between 90-100.
