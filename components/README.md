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
A pasta armazena os componentes da interface que estão organizados em subpastas, inspirado em princípios do design systems [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/).

#### O que é Atomic Desing? 

![image](https://user-images.githubusercontent.com/113141035/215109053-af19ea66-0d44-4478-a9d0-a4e11757aa80.png)


O Atomic Design, também conhecido como Design Atômico, é uma metodologia que auxilia na categorização e padronização de elementos de uma interface, e por consequência, na criação de um Design Systems, Style Guides e documentações em geral.

É baseada em uma analogia com a tabela periódica, em que cada elemento é disposto de maneira independente, porém é possível combiná-los com a finalidade de criar organismos mais complexos, sempre de forma organizada e padronizada.

Ao utilizar o Design Atômico, você garante a coerência do projeto e a consistência dos elementos visuais, garantindo que cada recurso utilizado seja replicado igualmente, e que todas as estruturas sigam uma padronização. 

Quem propôs essa metodologia foi o designer Brad Frost no ano de 2013. O objetivo de sua teoria foi discutir maneiras de tornar as interfaces mais consistentes, e ao mesmo tempo, garantir que as equipes tivessem mais consistência.



Se você tiver componentes dentro de diretórios aninhados tais como:

```
components/
  atoms/
      user/
         CustomButton.vue
```

O nome do componente será baseado no seu próprio caminho do diretório e nome de ficheiro. Portanto, o componente será:

```
<template>
  <div>
    <AtomsUserCustomButton />
  </div>
</template>
```

