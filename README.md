# ⚡ Braip front-end starter

## Comandos de configuração

```bash
# Instalar dependências
$ yarn install ou npm install

# Roda o servidor em modo de desenvolvimento no endereço localhost:3000
$ yarn dev ou npm run dev

# Build para produção logo em seguida rodar o servidor
$ yarn build ou npm run build
$ yarn start ou npm run start

# Build do projeto estático
$ yarn generate ou npm run generate
```

Para uma explicação detalhada leia a [documentação](https://nuxtjs.org).

## Diretórios especiais

### `pages`

O diretório `pages` no Nuxt.js é onde você coloca suas páginas da aplicação. Cada arquivo dentro desse diretório é automaticamente transformado em uma rota da aplicação. Por exemplo, se você tiver um arquivo chamado about.vue dentro do diretório pages, ele será acessível em http://sua-aplicacao.com/about.
o Nuxt também suporta subdiretórios dentro do diretório `pages` para organizar suas rotas. Por exemplo, se você tiver um arquivo chamado index.vue dentro de um subdiretório chamado users, ele será acessível em http://sua-aplicacao.com/users/.
Leia mais [na documentação](https://nuxtjs.org/docs/directory-structure/pages).

### `assets`

O diretório `assets` no Nuxt.js é onde você coloca arquivos estáticos, como imagens, fontes e arquivos de estilo. Esses arquivos estão disponíveis para serem importados e usados ​​em suas páginas, componentes e estilos globais. Leia mais [na documentação](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

O diretório `components` no Nuxt.js é onde você coloca seus componentes Vue.js personalizados. Esses componentes podem ser reutilizados em várias páginas e layouts da aplicação. 

A estrutura de pastas deste diretório segue a metodologia do [atomic design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c) e é composta pelas pastas [atoms](ir_pra_doc), [molecules](ir_pra_doc), [organisms](ir_pra_doc) e [templates](ir_pra_doc).

Leia mais na [documentação do repositório]() ou na [documentação oficial](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
