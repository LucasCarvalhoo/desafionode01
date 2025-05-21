# Biblioteca Virtual

Este projeto consiste em uma aplicação de biblioteca virtual com um frontend em Next.js/React e um backend em Express. Os usuários podem visualizar, adicionar e remover livros da biblioteca.

## Índice
1. [Pré-requisitos](#1-pré-requisitos)
2. [Criar o Projeto](#2-criar-um-projeto-nextjs)
3. [Instalar Dependências do Backend](#3-instalar-dependências-do-backend)
4. [Instalar Componentes UI](#4-instalar-componentes-ui-shadcnui)
5. [Instalar Componentes Específicos](#5-instalar-os-componentes-específicos)
6. [Instalar Ícones](#6-instalar-ícones)
7. [Criar o Servidor Express](#7-criar-o-servidor-express-backend)
8. [Configurar o Frontend](#8-modificar-o-frontend-para-usar-o-backend-express)
9. [Executar a Aplicação](#9-executar-a-aplicação)
10. [Acessar a Aplicação](#10-acessar-a-aplicação)
11. [Explicação das Dependências](#11-explicação-das-dependências)
12. [Explicação dos Componentes UI](#12-explicação-dos-componentes-ui)
13. [Estrutura de Arquivos](#13-estrutura-de-arquivos)
14. [Observações Importantes](#14-observações-importantes)
15. [Funcionalidades](#15-funcionalidades)
16. [Possíveis Melhorias](#16-possíveis-melhorias)
17. [Tipagem com TypeScript](#17-tipagem-com-typescript)
18. [Problemas Comuns e Soluções para Deploy](#18-problemas-comuns-e-soluções-para-deploy)

## 1. Pré-requisitos

Certifique-se de que você tem o Node.js e o npm instalados:

```shellscript
node --version
npm --version
```

## 2. Criar um Projeto Next.js

```shellscript
# Criar um novo projeto Next.js
npx create-next-app biblioteca-virtual
cd biblioteca-virtual
```

Caso de erro use o: 
```shellscript
mkdir "C:\Users\seuusuario\AppData\Roaming\npm"
```

Durante a criação, responda às perguntas:

- TypeScript? **Sim**
- ESLint? **Sim**
- Tailwind CSS? **Sim**
- `src/` directory? **Não**
- App Router? **Sim**
- Import alias? **Sim** (mantenha o padrão `@/*`)

## 3. Instalar Dependências do Backend

```shellscript
# Instalar Express.js e CORS
npm install express cors
```

## 4. Instalar Componentes UI (shadcn/ui)

```shellscript
# Instalar CLI do shadcn/ui
npm install -D @shadcn/ui

# Inicializar shadcn/ui
npx shadcn init
```

Durante a inicialização, responda às perguntas:

- Estilo? **Default**
- Base color? **Slate**
- Global CSS? **app/globals.css**
- CSS variables? **Sim**
- Tailwind.config? **tailwind.config.js**
- Components directory? **components**
- Utilities directory? **lib/utils**

## 5. Instalar os Componentes Específicos

```shellscript
# Instalar componentes que usamos no projeto
npx shadcn add button
npx shadcn add input
npx shadcn add label
npx shadcn add card
```

## 6. Instalar Ícones

```shellscript
# Instalar Lucide React para ícones
npm install lucide-react
```

## 7. Criar o Servidor Express (Backend)

Crie um arquivo `server.js` na raiz do projeto com o seguinte conteúdo:

```javascript
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const books = [
    { title: "O senhor dos Aneis", author: "J.R.R. Tolkien" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "O poderoso chefão", author: "Mario Puzo" },
    { title: "Nada será como antes", author: "Miguel Nicolelis" },
    { title: "Cemiterio de Dragões", author: "Raphael Draccon" }
]

app.get('/api/books', (req, res) => {
    setTimeout(() => {
        res.json(books)
    }, 500)
})

app.post('/api/books', (req, res) => {
    const {title, author} = req.body

    if (!title || !author) {
        return res.status(400).json({error: "Titulo e autor são obrigatorios."})
    }

    const newBook = { title, author }
    books.push(newBook)

    res.status(201).json(newBook)
})

app.delete("/api/books/:index", (req, res) => {
    const index = Number.parseInt(req.params.index)

    if (isNaN(index) || index < 0 || index >= books.length) {
        return res.status(404).json({error: "Livro não encontrado!"})
    }

    const removeBook = books.splice(index, 1)[0]

    res.json(removeBook)
})

app.listen(PORT, () => {
    console.log(`Servidor Express rodando em http://localhost:${PORT}`)
})
```

## 8. Modificar o Frontend para usar o Backend Express

Modifique o arquivo `app/page.tsx` para conectar ao backend Express.
Certifique-se de alterar a URL da API:

```javascript
// Alterar esta linha no arquivo app/page.tsx
const API_URL = "/api/books"
// Para esta
const API_URL = "http://localhost:3001/api/books"
```

## 9. Executar a Aplicação

Para executar a aplicação, você precisa iniciar os dois servidores separadamente:

### Terminal 1 - Backend (Express):
```bash
node server.js
```
Este comando iniciará o servidor Express na porta 3001.

### Terminal 2 - Frontend (Next.js):
```bash
npm run dev
```
Este comando iniciará o servidor Next.js na porta 3000.

## 10. Acessar a Aplicação

Abra seu navegador e acesse:
```
http://localhost:3000
```

## 11. Explicação das Dependências

### Dependências Principais

| Dependência | O que é? | Por que usamos?
|-----|-----|-----
| **Node.js** | Ambiente de execução JavaScript | Base para rodar JavaScript no servidor
| **Next.js** | Framework React | Facilita a criação de aplicações React com SSR, API Routes, etc.
| **React** | Biblioteca UI | Para criar interfaces de usuário interativas
| **TypeScript** | Superset de JavaScript | Adiciona tipagem estática ao JavaScript


### Dependências do Backend

| Dependência | O que é? | Por que usamos?
|-----|-----|-----
| **Express** | Framework web para Node.js | Simplifica a criação de APIs e servidores web
| **CORS** | Middleware Express | Permite requisições de diferentes origens


### Dependências do Frontend

| Dependência | O que é? | Por que usamos?
|-----|-----|-----
| **shadcn/ui** | Biblioteca de componentes | Fornece componentes UI pré-estilizados e acessíveis
| **Tailwind CSS** | Framework CSS | Estilização rápida com classes utilitárias
| **Lucide React** | Biblioteca de ícones | Fornece ícones SVG para a interface


## 12. Explicação dos Componentes UI

### Componentes do shadcn/ui

| Componente | O que é? | Como usamos?
|-----|-----|-----
| **Button** | Botão estilizado | Para ações como "Adicionar Livro" e "Remover"
| **Input** | Campo de entrada | Para coletar título e autor dos livros
| **Label** | Etiqueta para inputs | Para rotular os campos de entrada
| **Card** | Container estilizado | Para agrupar elementos relacionados
| **CardHeader** | Cabeçalho do Card | Para títulos e descrições de seções
| **CardContent** | Conteúdo do Card | Para o conteúdo principal de cada seção
| **CardFooter** | Rodapé do Card | Para botões de ação no final do card


### Ícones do Lucide React

| Ícone | O que é? | Como usamos?
|-----|-----|-----
| **Plus** | Ícone de adição | No botão "Adicionar Livro"
| **BookOpen** | Ícone de livro aberto | Para representar livros na lista
| **Trash2** | Ícone de lixeira | No botão de remover livro


## 13. Estrutura de Arquivos

Após a instalação, sua estrutura de arquivos deve ser assim:

```plaintext
biblioteca-virtual/
├── app/
│   ├── api/
│   │   └── books/
│   │       └── route.ts       # API do Next.js
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout da aplicação
│   └── page.tsx               # Página principal
├── components/
│   └── ui/                    # Componentes do shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts               # Funções utilitárias
├── server.js                  # Servidor Express
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 14. Observações Importantes

1. **Portas separadas**: O backend (Express) roda na porta 3001, enquanto o frontend (Next.js) roda na porta 3000.

2. **CORS**: O middleware CORS está configurado no Express para permitir requisições vindas do frontend.

3. **Comunicação entre servidores**: O frontend faz requisições HTTP para o backend para carregar, adicionar e remover livros.

4. **Desenvolvimento**: Durante o desenvolvimento, é comum executar o frontend e o backend em portas separadas como foi feito nesta solução.

5. **Persistência de dados**: Note que esta solução não inclui persistência de dados - os livros são armazenados apenas na memória do servidor Express e serão resetados se o servidor for reiniciado.

## 15. Funcionalidades

A aplicação permite:
- Visualizar uma lista de livros
- Adicionar novos livros com título e autor
- Remover livros da biblioteca

## 16. Possíveis Melhorias

- Adicionar persistência de dados (banco de dados)
- Implementar autenticação de usuários
- Adicionar mais detalhes aos livros (capa, descrição, etc.)
- Implementar busca e filtragem
- Adicionar categorias/gêneros aos livros

## 17. Tipagem com TypeScript

Para garantir a compatibilidade com o TypeScript e evitar erros durante o build, é importante definir as tipagens corretas. 

### Interface para Livros

```typescript
// Defina a interface para os livros
interface Book {
  title: string;
  author: string;
}
```

### Tipagem de Estados

```typescript
// Use a tipagem no estado
const [books, setBooks] = useState<Book[]>([])
```

### Tipagem de Eventos

```typescript
// Adicione tipagem para os parâmetros de eventos
const addBook = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // ...
}
```

### Tipagem de Parâmetros

```typescript
// Tipagem para outros parâmetros
const removeBook = async (index: number) => {
  // ...
}
```

### Adaptação para Deploy

Para fazer o deploy na Vercel, é importante usar a API interna do Next.js ou configurar variáveis de ambiente:

```typescript
// URL da API que se adapta ao ambiente
const API_URL = process.env.NODE_ENV === 'production' 
  ? "/api/books" 
  : "http://localhost:3001/api/books";
```

## 18. Problemas Comuns e Soluções para Deploy

### Erro de tipagem TypeScript durante o build

Se você encontrar erros de tipagem durante o build na Vercel, como:

```
Type error: Parameter 'e' implicitly has an 'any' type.
```

Há duas opções para resolver:

1. **Adicionar tipagens adequadas** (recomendado):
   ```typescript
   // Exemplo de como corrigir no arquivo page.tsx
   interface Book {
     title: string;
     author: string;
   }
   
   const [books, setBooks] = useState<Book[]>([])
   const addBook = async (e: React.FormEvent<HTMLFormElement>) => {...}
   const removeBook = async (index: number) => {...}
   ```

2. **Configurar o Next.js para ignorar erros de TypeScript**:
   Adicione esta configuração ao arquivo `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     typescript: {
       ignoreBuildErrors: true,
     },
     eslint: {
       ignoreDuringBuilds: true,
     },
   };
   
   module.exports = nextConfig;
   ```

### Erro de ESLint durante o build

Se você encontrar erros de ESLint como:

```
Error: 'headers' is defined but never used. @typescript-eslint/no-unused-vars
```

Você pode:

1. **Corrigir os erros** removendo ou usando as variáveis não utilizadas
2. **Prefixar variáveis não utilizadas com underscore**, por exemplo: `_error` em vez de `error`
3. **Configurar o ESLint para ignorar esses erros** no arquivo `.eslintrc.js`:
   ```javascript
   module.exports = {
     extends: ['next/core-web-vitals'],
     rules: {
       '@typescript-eslint/no-unused-vars': 'off',
     }
   };
   ```
4. **Usar a configuração do Next.js** para ignorar erros de ESLint:
   ```javascript
    Em next.config.js
   const nextConfig = {
     eslint: {
       ignoreDuringBuilds: true,
     },
   };
   ```

### API não disponível na Vercel

Lembre-se que o servidor Express **não é implantado automaticamente** na Vercel. Se você estiver implantando apenas o frontend, você precisa:

1. Utilizar a API interna do Next.js (`/api/books`)
2. Ou implantar o servidor Express em outra plataforma e atualizar o URL no frontend
