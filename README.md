# Sobre o Projeto / About Project

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

O cadastro é feito através de uma requisição para a rota específica, enviando os dados do formulario de cadastro pré validado por expressoes regulares, notificando erro nos campos invalidos, e redirecionando para uma pagina de registro completo caso realizado com sucesso.

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

## English Version

# About the Project

## Design System

The design system of this project was designed with a focus on simplicity, using a simplified approach with dynamic components organized in folders according to their utility, and pre-configured style variables (design tokens) in a single SASS file, which is used across all components and pages of the project.

## Authentication and Login

This project utilizes a simple authentication method for demonstrative purposes.

The logic consists of:

1. Making a POST request to the FakeAPI, using the 'axios' library to handle the request, and 'try', 'catch', and 'finally' blocks to handle it within an asynchronous login function.
2. If the login is successful, the authentication token, which is included in the response of the request, is saved in the browser's localStorage and used to validate access to the protected route in the router.js file, granting access to the Dashboard page.
3. In the router.js file, in addition to the function that allows access to the Dashboard route if a token is stored in the localStorage, there is another function that removes the token whenever the path is changed, redirecting to the login page.
4. On the Dashboard page, there is a button labeled "Logout" inside the user dropdown, which, when clicked, intentionally changes the path, removing the token from the localStorage and applying access protection to the page.

## Registration and Plan Selection

This project uses a POST request to the FakeAPI to perform a demonstrative registration.

The registration is done by sending a request to the specific route, including the data from the pre-validated registration form using regular expressions, notifying errors in case of invalid fields, and redirecting to a complete registration page upon successful registration.

On the registration page, there is a logic to obtain the selected plan data based on the user's choice, which differs between the web and mobile versions.

1. In the desktop version, the user selects the plan by clicking on CTA buttons.
2. In the mobile version, the user chooses the plan through a carousel/slider.

## Responsiveness

This project was developed using Flexbox to ensure better responsiveness between the desktop and mobile versions.

All adjustments made to the style variables aim to optimize the project to:

1. Function well in both breakpoints.
2. Reuse components without the need to create distinct versions for them.
3. Keep the code clean and performant.

## Metrics

This project was created and regularly tested using Google's Lighthouse tool, constantly monitoring Performance, Accessibility, Best Practices, and SEO metrics, aiming to maintain a score between 90-100.

----

# Project setup
´npm install´

# Compiles and hot-reloads for development
´npm run serve´

# Compiles and minifies for production
´npm run build´
