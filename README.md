# Documentação da Biblioteca Angular NPM - "ng-analytics-tagging"

## Descrição

A biblioteca **ng-analytics-tagging** é um módulo Angular projetado para facilitar a integração de marcação de análise em aplicações Angular. Ela fornece funções para rastrear eventos de carregamento de página e ações do usuário, permitindo o envio de tags relevantes para serviços de análise como o Google Analytics. Esta biblioteca segue os princípios da **Arquitetura Limpa** ("Clean Architecture") para garantir uma estrutura modular e de fácil manutenção.

## Instalação

Para instalar a biblioteca **ng-analytics-tagging** do repositório NPM da JFrog, siga estes passos:

1. Crie ou acesse o diretório raiz do seu projeto Angular.

2. Crie ou atualize o arquivo `.npmrc` no diretório raiz do seu projeto, caso ele ainda não exista. Adicione a seguinte linha para autenticar no repositório NPM da JFrog:

```
@seu-escopo:registry=https://url-do-repo-jfrog/npm/seu-escopo/
```


Substitua `seu-escopo` pelo seu escopo NPM e `url-do-repo-jfrog` pela URL do repositório JFrog.

## Atributos Disponíveis

A biblioteca **ng-analytics-tagging** disponibiliza os seguintes atributos para configuração:

| Atributo         | Tipo                         | Descrição                                                                                   |
|------------------|------------------------------|---------------------------------------------------------------------------------------------|
| tipo_tag         | 'GAU' &#124; 'GA4'           | Tipo de tag, podendo ser 'GAU' para Universal Analytics ou 'GA4' para Google Analytics 4. |
| dispositivo      | 'mobile' &#124; 'bankline'   | Dispositivo ou canal de acesso, como 'mobile' ou 'bankline'.                              |
| agencia          | string                       | Agência relacionada à ação ou página.                                                       |
| conta            | string &#124; number          | Número da conta relacionada à ação ou página.                                              |
| dac              | string &#124; number          | Dígito de Autoconferência (DAC) para verificação da conta.                                |
| segmento         | string                       | Segmento de mercado relacionado à ação ou página.                                          |
| fluxo            | string                       | Fluxo ou processo relacionado à ação ou página.                                            |
| mfe_jornada      | string                       | Jornada do cliente em Micro Frontends (MFEs).                                              |
| mfe_fluxo        | string                       | Fluxo específico do Micro Frontend (MFE).                                                  |
| negocio          | string                       | Negócio ou área relacionada à ação ou página.                                              |
| plataforma       | string                       | Plataforma da aplicação, como 'web' ou 'mobile'.                                           |
| aplicacao        | string                       | Nome da aplicação relacionada à ação ou página.                                            |
| ambiente         | string                       | Ambiente da aplicação, como 'produção' ou 'desenvolvimento'.                               |
| squad            | string                       | Nome do squad responsável pela funcionalidade.                                             |

## Funções Disponíveis

A biblioteca **ng-analytics-tagging** oferece as seguintes funções:

### `trackPageLoad()`

Essa função é usada para enviar tags de carregamento de página para serviços de análise.

### `trackAction()`

Essa função é usada para enviar tags de ações do usuário, como cliques, para serviços de análise.

## Estrutura de Arquivos

A estrutura de arquivos da biblioteca é organizada da seguinte forma:

```
app/
├── analytics/
│ ├── domain/
│ │ ├── analytics.interface.ts
│ ├── infrastructure/
│ │ ├── google-analytics.service.ts
│ ├── use-cases/
│ │ ├── tag-gau-mobile.use-case.ts
│ │ ├── tag-gau-bankline.use-case.ts
├── core/
│ ├── config/
│ │ ├── config.service.ts
│ ├── utils/
│ │ ├── console-utils.ts
├── error-handler.ts
├── data-processing.service.ts
├── main.ts
```


## Arquitetura Limpa ("Clean Architecture")

A biblioteca **ng-analytics-tagging** foi desenvolvida seguindo os princípios da Arquitetura Limpa, o que resulta em uma estrutura modular e de fácil manutenção. Ela é dividida em diferentes camadas, incluindo Domínio, Casos de Uso, Interface de Gateway e Framework, para garantir a separação de responsabilidades e a flexibilidade no desenvolvimento e manutenção do código.
