# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

# Os Doze Fatores

## I. Base de Código :x:

Uma base de código com rastreamento utilizando controle de revisão, muitos deploys
O código da aplicação está hospedado no GitHub e todo o desenvolvimento está sendo feito de forma incremental, separado por branches. Entretanto todos os serviços estão em um único repositório, dado o tamanho da aplicação.

## II. Dependências :heavy_check_mark:

Declare e isole as dependências
As dependências da aplicação estão declaradas no arquivo **package.json** de cada pasta. Para instalar as depedências, basta navegar pra dentro da pasta utilizando o terminal e executar o comando npm install.

## III. Configurações :heavy_check_mark:

Armazene as configurações no ambiente
As configurações de ambiente estão salvas no arquivo **.env** e para rodar a aplicação corretamente é necessário preenchê-las previamente.

## IV. Serviços de Apoio :heavy_check_mark:

Trate os serviços de apoio, como recursos ligados
Os serviços de apoio da aplicação (banco de dados) podem ser alterados com o ajuste do arquivo de configuração.

## V. Construa, lance, execute :heavy_check_mark:

Separe estritamente os builds e execute em estágios
Cada incrementação do código está separada na sua branch específica.

## VI. Processos :heavy_check_mark:

Execute a aplicação como um ou mais processos que não armazenam estado
Não há armazenamento de estados na aplicação

## VII. Vínculo de porta :heavy_check_mark:

Exporte serviços por ligação de porta
Cada serviço da aplicação é acessado através de uma porta única

## VIII. Concorrência :heavy_check_mark:

Dimensione por um modelo de processo
A aplicação está separado por processos não conflitantes o que permite que cada serviço (account, finance ou product) seja executado sem que atrapalhe o funcionamento do outro.

## IX. Descartabilidade :heavy_check_mark:

Maximizar a robustez com inicialização e desligamento rápido
A aplicação utiliza o Docker para seu funcionamento, o que permite enviar um comando para que ele seja encerrado "graciosamente".

## X. Dev/prod semelhantes :heavy_check_mark:

Mantenha o desenvolvimento, teste, produção o mais semelhante possível 
Os serviços utilizados em teste e produção são os mesmos, onde for aplicável.

## XI. Logs :heavy_check_mark:
Trate logs como fluxo de eventos
A aplicação envia mensagens de log conforme sua execução, exibindo mensagens de erros e sucessos no terminal, sem que sejam salvas em algum arquivo.

## XII. Processos de Admin :x:
Executar tarefas de administração/gerenciamento como processos pontuais
Não há um ambiente separado para rodar tarefas de administrador na aplicação.


# Microservices Patterns

## Serviços de domínio

A aplicação utiliza domínios diferentes para separar cada parte do serviço conforme sua função.

## Serviços de negócio

Os serviços da aplicação estão agrupados conforme sua funcionalidade em um contexto específico (usuários, pagamentos, etc).

## API Gateway

Não implementado.

## Agregador de processos

Não implementado.

## Edge service

Não implementado.

## Single database vs Bancos diferentes

A aplicação utiliza bancos de dados diferentes (MongoDB e MySQL).

## Eventos assíncronos‌

Não implementado.

## Agregação de logs

Não implementado.

## Agregação de métricas

Não implementado.

