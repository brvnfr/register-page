# register-page

# Método de Autenticação

Este projeto utiliza um método de autenticação simples para fins de exemplo. O método consiste em armazenar um token de autenticação no localStorage do navegador. Ao efetuar login com sucesso, um token é obtido do servidor e armazenado no localStorage. Esse token é utilizado para autenticar as requisições ao servidor, permitindo o acesso a determinadas rotas protegidas.

Ao sair da tela de Dashboard ou efetuar logout, o token é removido do localStorage, invalidando a sessão de autenticação.

É importante destacar que este método é simplificado e não deve ser utilizado em ambientes de produção. Para um sistema de autenticação robusto e seguro, é recomendado utilizar soluções de autenticação adequadas, como JWT (JSON Web Tokens), OAuth, entre outras, juntamente com práticas recomendadas de segurança.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
