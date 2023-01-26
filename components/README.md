## Components

O diretório `components` contém seus componentes Vue.js. Os componentes são os que compõe as diferentes partes da sua página e podem ser reutilizados e importados dentro das suas páginas, dos templates e até dentro de outros componentes.

```
| components/
--| TheHeader.vue
--| TheFooter.vue
```

```
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

```
A pasta armazena os componentes da interface que estão organizados em subpastas, inspirado em princípios do design systems [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c).

Se você tiver componentes dentro de diretórios aninhados tais como:

```
components/
  atoms/
      user/
         CustomButton.vue
```

O nome do componente será baseado no seu próprio caminho do diretório e nome de ficheiro. Portanto, o componente será:

```
<AtomsUserCustomButton />
```

