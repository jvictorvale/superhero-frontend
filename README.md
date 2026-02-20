# 🦸‍♂️ SuperHero Frontend

Este é o painel de gerenciamento de heróis, desenvolvido em **Angular 19**. A aplicação oferece uma interface moderna, responsiva e intuitiva para o cadastro, edição, visualização e exclusão de super-heróis e seus poderes.

## 🚀 Tecnologias e Funcionalidades

* **Angular 19**: Uso de **Standalone Components** para uma arquitetura mais leve e moderna.
* **Reactive Forms**: Validações customizadas e complexas (como a seleção obrigatória de superpoderes).
* **RxJS**: Gerenciamento de chamadas assíncronas para a API.
* **Bootstrap / SCSS**: Estilização personalizada com layout otimizado para a temática de heróis.
* **Componentização**: Modais reutilizáveis para confirmação de exclusão e visualização de detalhes.

## 🛠️ Diferenciais Técnicos Implementados

* **Design Responsivo com SCSS Moderno**: Implementação de um sistema de grid adaptável utilizando **Mixins** e **Variáveis de Breakpoint** customizadas ($mobile e $tablet), garantindo que a experiência do usuário seja fluida em qualquer resolução.
* **Validação de Checkbox**: Lógica customizada para garantir que pelo menos um superpoder seja selecionado antes do envio.
* **UX de Seleção**: Grid de superpoderes com scroll horizontal para otimização de espaço e melhor navegabilidade em formulários densos.
* **Standalone Architecture**: Total remoção de `NgModules`, facilitando o Lazy Loading e o desacoplamento.
* **Comunicação Fluida**: Uso de estado de navegação para transição de dados entre a lista e o formulário de edição.

## 📦 Como Executar o Projeto

### Pré-requisitos
* Node.js (versão 18 ou superior)
* Angular CLI instalado (`npm install -g @angular/cli`)

### Passo a passo

1. **Instalar dependências**:

```bash
   npm install
```

2. **Configurar o ambiente**:

Certifique-se de que a API (Backend) está rodando. O endpoint padrão configurado no serviço é `https://localhost:44388/api`.

3. **Executar a aplicação**:

```bash
   ng serve
```
Acesse: http://localhost:4200/

## 🏗️ Estrutura de Pastas

* `src/app/core`: Concentra os serviços de comunicação com a API (`heroi.service`, `superpoderes.service`), garantindo uma única fonte de verdade para os dados.
* `src/app/data/models`: Define as interfaces e modelos de dados (`Heroi`, `Superpoderes`) que tipam a aplicação.
* `src/app/features`: Contém os módulos de funcionalidades principais:
  * `dashboard`: Tela de boas-vindas e acesso rápido.
  * `herois`: Subdividido em `cadastro`, `lista` e `modals` (visualização e exclusão), isolando a lógica de negócio de cada tela.
* `src/app/shared/validators`: Armazena validadores customizados reutilizáveis, como o `data-passado.validator`.
* `src/app/layout`: Componentes estruturais de interface.
* `src/styles`: Gerenciamento global de estilos e breakpoints para responsividade.
