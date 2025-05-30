# Explicação Detalhada do Projeto Nest.js com Singleton para Pool de Conexões

Este projeto demonstra a implementação do padrão de projeto Singleton para um serviço de pool de conexões de banco de dados (simulado) em uma aplicação Nest.js.

## Estrutura do Projeto e Componentes Principais

A estrutura de pastas organizada visa separar responsabilidades:

src/
├── app.controller.ts       # Controlador principal
├── app.module.ts           # Módulo raiz
├── app.service.ts          # Serviço principal (consumidor do pool)
│
├── database/               # Módulo para o pool de conexões
│   ├── database-connection-pool.service.ts # O serviço Singleton
│   └── database.module.ts                  # Módulo do pool
│
├── user/                   # Módulo de exemplo (outro consumidor do pool)
│   ├── user.module.ts
│   └── user.service.ts
│
└── main.ts                 # Ponto de entrada da aplicação

## Detalhamento das unidades do código

### 1. O Serviço Singleton: DatabaseConnectionPoolService

Arquivo: src/database/database-connection-pool.service.ts

#### Explicação:

* @Injectable(): Este decorador é fundamental. Ele informa ao Nest.js que esta classe é um "provedor" que pode ser gerenciado pelo sistema de Injeção de Dependência (DI) do Nest.
* instanceId: Este ID é gerado no construtor. Sua principal finalidade aqui é demonstrar que, não importa quantas vezes ou em quantos lugares diferentes este serviço seja injetado, o instanceId será sempre o mesmo, provando que se trata da mesma instância do objeto (comportamento Singleton).
* constructor(): Onde a instância é criada e o pool é inicializado. A mensagem de log aqui só aparecerá uma vez durante o ciclo de vida da aplicação.
* onModuleInit(): Um hook do ciclo de vida do Nest.js. É chamado uma vez que o módulo foi inicializado e todas as suas dependências foram resolvidas.
* getConnection(), releaseConnection(): Métodos que simulam a obtenção e liberação de conexões de um pool. Eles registram qual instância (instanceId) está realizando a operação.

### 2. O Módulo do Banco de Dados: DatabaseModule

Arquivo: src/database/database.module.ts

#### Explicação:

* @Module(): Define uma classe como um módulo Nest.js. Módulos são usados para organizar o código e suas dependências.
* providers: Array onde listamos os serviços (provedores) que este módulo gerencia. O DatabaseConnectionPoolService é listado aqui.
* exports: Array que torna os provedores listados aqui (neste caso, DatabaseConnectionPoolService) disponíveis para outros módulos que importarem o DatabaseModule.
* @Global(): Este decorador torna o DatabaseModule um módulo global. Isso significa que você não precisa importar DatabaseModule em todos os módulos que desejam usar seus provedores exportados (como o DatabaseConnectionPoolService). Uma vez que DatabaseModule é importado no AppModule (módulo raiz), o DatabaseConnectionPoolService se torna disponível para injeção em qualquer lugar da aplicação.

### 3. Consumidores do Singleton: AppService e UserService

Arquivo: src/app.service.ts

#### Explicação

* Injeção de Dependência (DI): Ambos os serviços (AppService e UserService) recebem uma instância do DatabaseConnectionPoolService através de seus construtores. O Nest.js "injeta" automaticamente a instância correta.
* Verificação do instanceId: No construtor de cada um desses serviços, logamos o instanceId do dbPoolService injetado. Ao rodar a aplicação, você notará que este ID é o mesmo em ambos os logs, confirmando que ambos os serviços estão usando a mesma instância do DatabaseConnectionPoolService.

### 4. Módulos dos Consumidores e Módulo Raiz

Arquivo: src/app.module.ts

#### Explicação

* Este é o módulo raiz. Ao importar DatabaseModule, que é @Global, seus provedores exportados (como DatabaseConnectionPoolService) tornam-se disponíveis em toda a aplicação.

## Aplicação do Singleton

O padrão Singleton está sendo aplicado ao DatabaseConnectionPoolService da seguinte forma, facilitado pelo Nest.js:

* Provedores como Singletons por Padrão: No Nest.js, os provedores (classes marcadas com @Injectable() e registradas em um módulo) têm, por padrão, um escopo de singleton. Isso significa que o contêiner de DI do Nest.js cria apenas uma única instância de um provedor específico e a compartilha em toda a aplicação (ou dentro do escopo do módulo, se não for global).

* Registro no Módulo: O DatabaseConnectionPoolService é registrado como um provedor no DatabaseModule.

* Exportação e Disponibilidade Global: O DatabaseModule exporta o DatabaseConnectionPoolService e é marcado como @Global(). Isso, combinado com sua importação no AppModule (módulo raiz), garante que a única instância do DatabaseConnectionPoolService criada pelo DatabaseModule seja a mesma instância injetada em qualquer outro serviço ou controlador em toda a aplicação (como AppService e UserService).

* Injeção de Dependência Consistente: Quando AppService ou UserService declaram DatabaseConnectionPoolService como uma dependência em seus construtores, o sistema de DI do Nest.js resolve essa dependência fornecendo a mesma instância única que foi criada e gerenciada.

* Prova pelo instanceId: O instanceId aleatório gerado no construtor do DatabaseConnectionPoolService serve como uma prova em tempo de execução. Os logs de AppService e UserService mostrarão que o instanceId do dbPoolService injetado é idêntico, confirmando que estão compartilhando a mesma instância, o que é a essência do padrão Singleton. O log DatabaseConnectionPoolService instance CREATED aparecerá apenas uma vez.

Em resumo, o Nest.js abstrai a complexidade da implementação manual do Singleton. Ao declarar um serviço e registrá-lo corretamente em um módulo (especialmente um global ou um importado no módulo raiz), o framework garante seu comportamento de instância única e gerencia seu ciclo de vida e injeção.