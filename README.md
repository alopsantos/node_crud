# Projeto de Curd com Node.js, TypeORM e PostgreSQL
## Features

- [x] Cadastro de Categorias
- [X] Cadastro de Videos


```
yarn init -y

yarn add express
yarn add typeorm
yarn add reflect-metadata
yarn add pg
yarn add uuid

yarn add @types/express - D
yarn add @types/uuid -D
yarn add ts-node-dev -D
yarn add typescript -D

yarn add typeorm migration:create -n CreateCategories
yarn add typeorm migration:create -n CreateVideos
yarn add typeorm migration:run


touch .env
touch .env.template
touch .gitignore
touch service.http
mkdir src/
mkdir src/controllers
touch src/controllers/CreateCategoryController.ts
touch src/controllers/CreateVideoController.ts
touch src/controllers/DeleteCategoryController.ts
touch src/controllers/GetAllCategoryController.ts
touch src/controllers/GetAllVideoController.ts
touch src/controllers/UpdateCategoryController.ts
mkdir src/database
mkdir src/database/migrations
touch src/database/index.ts
mkdir src/entities
touch src/entities/Category.ts
touch src/entities/Video.ts
mkdir src/services
touch src/services/CreateCategoryService.ts
touch src/services/CreateVideoService.ts
touch src/services/DeleteCategoryService.ts
touch src/services/GetAllCategoryService.ts
touch src/services/GetAllVideoService.ts
touch src/services/UpdateCategoryService.ts
touch src/routes.ts
touch src/server.ts

```

## 🛠 Tecnologias

  - [x] Node 
  - [x] Express
  - [x] TypeScript
  - [x] TypeORM
  - [x] Postgres
  - [x] UUID


---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/4048207?v=4" width="100px;" alt=""/>
 <br />
<span>Feito com por <b />  👋🏽 </span><br>
<sub><b>Anderson Lopes</b></sub> <br><br>
<sub>Fonte: <b>Rocketseat</b> <br>
#code/drop 113<br>
🚀 <a href="https://www.youtube.com/watch?v=9AO2hZJsHrs" title="Tutorial em video">Link Tutorial em video</a> </sub>
