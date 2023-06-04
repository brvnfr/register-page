# Informações úteis sobre o projeto

## Design System

O design system deste projeto foi feito visando objetividade, sendo de forma simplificada, com componentes dinâmicos separados por pastas de acordo com sua utilidade e variáveis de estilo (design tokens) pré-configuradas em um único arquivo SASS, utilizado em todos os componentes e páginas do projeto.

## Autenticação e Login

Este projeto utiliza um método de autenticação simples para fins demonstrativos.

A lógica consiste em:

1. Realizar uma requisição POST para a API do FakeAPI, usando a biblioteca 'axios' para fazer a requisição e blocos 'try', 'catch' e 'finally' para tratá-la em uma função assíncrona de login.
2. Se o login for realizado com sucesso, o token de autenticação, que vem na resposta da requisição, é salvo no localStorage do navegador e usado para validar o acesso à rota protegida no arquivo router.js, liberando o acesso ao caminho da página Dashboard.
3. No arquivo router.js, além da função que libera o acesso à rota Dashboard se tiver um token salvo no localStorage, há também outra função que remove o token toda vez que o caminho é alterado, redirecionando para a tela de login.
4. Na tela Dashboard, há um botão chamado "Logout" dentro do dropdown do botão 'Usuário', que, ao ser clicado, muda intencionalmente o caminho, removendo o token do localStorage e aplicando a proteção de acesso à página.

## Cadastro e Seleção de Planos

Este projeto utiliza uma requisição POST na API do FakeAPI para realizar um cadastro demonstrativo.

O cadastro é feito através de uma requisição para a rota específica e, por motivos de objetividade e limitação da API, não envia os dados dos planos.

Na tela de cadastro, existe toda uma lógica para obter o dado do plano selecionado, de acordo com a escolha do usuário, de forma distinta nas versões web e mobile.

1. Na versão desktop, o usuário realiza a escolha do plano clicando nos botões de CTA.
2. Na versão mobile, o usuário escolhe o plano através de um carousel/slider.

## Responsividade

Este projeto foi desenvolvido utilizando Flexbox para proporcionar maior responsividade entre as versões desktop e mobile.

Todos os ajustes feitos nas variáveis de estilo visam otimizar o projeto para:

1. Funcionar bem em ambos os breakpoints.
2. Reaproveitar componentes, sem a necessidade de criar versões distintas para eles.
3. Manter o código limpo e performático.

## Métricas

Este projeto foi criado e testado com frequência utilizando a ferramenta Lighthouse do Google, sempre monitorando as métricas de Performance, Acessibilidade, Boas Práticas e SEO, mantendo a nota entre 90-100.
