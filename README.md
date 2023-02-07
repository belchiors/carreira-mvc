# Carreira

Site de divulgação de vagas de emprego comportando backend e frontend em um único projeto de forma integrada.

# Funcionalidades

* Publicação e visualização de vagas
* Edição e exclusão de vagas já publicadas (por usuário)
* Login e cadastro de usuário com autenticação baseada em Token JWT

# Tecnologias

* Front-end (React + JavaScript)
* Back-end (em C# e ASP.Net Core MVC)
* Banco de Dados (SQL Server)
* Entity Framework Core (ORM)

# Configurando

O projeto utiliza o banco de dados SQL Server, por isso, é preciso fornecer uma string de conexão contendo informaçãoes de conexão com o banco de dados.
Uma conexão local pode ser feita definindo a variável de ambiente `DATABASE_URL` com o seguinte valor
`Server=.\SQLEXPRESS;Database=Carreira;Trusted_Connection=True;TrustServerCertificate=true;`.

Também é preciso definir a variável de ambiente `SECURITY_KEY` com uma chave de segurança. Esta chave é necessária para que o serviço de Token JWT possa
gerar e ler tokens criptografados ao autenticar e autorizar conexões por parte do cliente.

# Executando

Após os passos anteriores, executar os seguintes comandos:

```
cd src/Carreira
dotnet restore
dotnet tool restore
dotnet ef database update
dotnet run
```
