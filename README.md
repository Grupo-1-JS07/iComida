
# 🍽️ iComida – API RESTful com NestJS + TypeORM + MySQL

Projeto backend desenvolvido com [NestJS](https://nestjs.com/) para gestão de restaurantes. Ele permite cadastrar, buscar, atualizar e remover restaurantes — com validações e persistência em banco de dados MySQL.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – framework Node.js baseado em módulos
- **TypeORM** – ORM para integração com banco de dados relacional
- **MySQL** – banco de dados relacional
- **class-validator** – validação de dados com decorators
- **Insomnia/Postman** – para testes de API

---

## 🧱 Funcionalidades da API

- `POST /restaurantes` → Cadastrar restaurante
- `GET /restaurantes` → Listar todos
- `GET /restaurantes/:id` → Buscar por ID
- `GET /restaurantes/nome/:nome` → Buscar por nome (`ILike`, busca parcial sem case sensitivity)
- `PUT /restaurantes/:id` → Atualizar
- `DELETE /restaurantes/:id` → Remover

---

## 🗂️ Estrutura do Projeto

```
src/
│
├── restaurante/
│   │   │   ├── create-restaurante.dto.ts
│   │   └── update-restaurante.dto.ts
│   ├── entities/
│   │   └── restaurante.entity.ts
│   ├── restaurante.controller.ts
│   ├── restaurante.service.ts
│   ├── restaurante.module.ts
│
├── database/
│   └── typeorm.config.ts
│
├── app.module.ts
└── main.ts

```

---

## ⚙️ Configuração do Banco (TypeORM)

A conexão está definida dentro do `app.module.ts`:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_icomida',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});
```

---

## ▶️ Como Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/icomida.git
   cd icomida
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm run start:dev
   ```

4. Teste as rotas com Insomnia ou Postman.

---

## 📝 Observações

- A busca por nome utiliza `ILike`, permitindo buscas como `/restaurantes/nome/pizza`
- O projeto pode ser expandido com módulos de **clientes**, **pedidos**, e **autenticação**
- Estrutura pensada para escalar facilmente

---

## 📌 Autores

https://www.linkedin.com/in/brenndhacabral/

https://www.linkedin.com/in/daniel-castro-de-souza-602491133/

https://www.linkedin.com/in/nnandak/

https://www.linkedin.com/in/moniqueohana/

https://www.linkedin.com/in/rafael-selles-sant-anna/

www.linkedin.com/in/sara-silva-9739b0183

