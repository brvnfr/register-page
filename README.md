### Informaçoes Uteis sobre o projeto

# Design System

O design system deste projeto foi feito visando objetividade, sendo de forma simplificada, componentes dinamicos separados por pastas de acordo com sua utilidade e variaveis de estilo(design tokens) pré configuradas em um unico arquivo SASS e usado em todos os componentes e paginas do projeto.

# Autenticação e Login

Este projeto utiliza um método de autenticação simples para fins demonstrativos.

A lógica consiste em:

1. Realizar uma requisição POST para a API do fakeAPI usando a lib 'axios' para fazer a requisicao e os blocos 'try,catch e finally' para resolve-la em uma função assincrona de login.
2. Se o login for realizado com sucesso, o token de autenticação que vem na resposta da requisiçao é salvo no localStorage do navegador e usado para validar o acesso a rota protegida no router.js, liberando acesso ao caminho da pagina Dashboard.
3. No router.js, além da função que libera o acesso a rota Dashboard se tiver um token salvo no localStorage, há também outra função que apaga o mesmo toda vez que o caminho for mudado. Fazendo com volte para a tela de login.
4. Na tela Dashboard, há um botao chamado Logout dentro do dropdown do botao 'User', que ao clicado,muda o caminho propositalmente, apagando o token do localStorage e encadeando a proteção de acesso a página.

# Cadastro e Seleção de Planos

Este projeto usa uma requisicao POST na API do fakeAPI para realizar um cadastro demonstrativo.

O cadastro é feito atraves de requisicao para a rota especifica e, por fins de objetividade e limitação da API, nao envia os dados dos planos.

Na tela de cadastro existe toda uma logica para obter o dado do plano selecionado, conforme o usario o escolhe, de formas distintas, na versao web e na versao mobile.

1. Na versao desktop, o usuario realiza a escolha do plano clicando nos Botoes de CTA.
2. Na versao mobile, o usuario escolhe o plano através de um carousel/slider.

# Responsividade

Este projeto foi feito inteiro usando Flexbox para maior responsividade entre as versoes desktop e mobile view.

Todos os ajustes feitos nas variaveis de estilos buscam otrimizar oi projeto para:

1. Funcionar bem em ambos breakpoints
2. Reaproveitamento de componentes, sem a necessidade de criar versoes distintas para os mesmos
3. Manter o codigo limpo e performatico

# Metricas

Este projeto foi criado sendo testado com certa frequencia usando a ferramenta lighthouse do google, sempre monitorando as metricas de Performance,Acessibidade, Boas Praticas e SEO, sempre mantendo a nota entre 90-100.
