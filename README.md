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

No Nuxt.js, o diretório layouts é usado para armazenar arquivos de layout que são usados para estruturar a aparência geral de sua aplicação. Um layout é um arquivo Vue que contém a estrutura HTML básica de sua aplicação, como o cabeçalho e o rodapé. Ele também pode conter componentes comuns que são usados em várias páginas, como um menu de navegação.

Leia mais [na documentação](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `plugins`

O diretório "plugins" no Nuxt.js é utilizado para armazenar arquivos JavaScript que podem ser carregados no contexto do aplicativo inteiro. Esses arquivos geralmente contêm código que precisa ser carregado antes da inicialização da aplicação, como configurações globais, importações de bibliotecas externas, etc. Também podem conter funções úteis que serão utilizadas durante toda aplicação.

Ao utilizarmos plugins, temos [3 formas de extender](https://nuxtjs.org/docs/directory-structure/plugins/) sua funcionalidade para o nuxt.

Também podemos carregá-los antes da aplicação principal, basta importá-lo no array `plugins` no arquivo `nuxt.config.js`, leia mais [na documentação](https://nuxtjs.org/docs/configuration-glossary/configuration-plugins/).

### `static`

No Nuxt.js, o diretório `static` é usado para armazenar arquivos estáticos, como imagens, arquivos CSS e JavaScript. Esses arquivos são servidos diretamente pelo servidor web sem passar pelo processamento do Nuxt.js, o que os torna mais rápidos de carregar. Além disso, esses arquivos são copiados diretamente para o diretório raiz do seu aplicativo durante a construção, tornando-os acessíveis diretamente a partir da raiz do seu domínio, como "https://example.com/image.jpg".

Leia mais [na documentação](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

No Nuxt.js, o diretório "store" é usado para armazenar o estado da aplicação e sua lógica de negócios. Ele é baseado no Vuex, que é um padrão de gerenciamento de estado para aplicativos Vue.js.

Leia mais [na documentação](https://nuxtjs.org/docs/2.x/directory-structure/store).
