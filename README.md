```shellscript
node --version
npm --version
```

### Passo 2: Criar um Projeto Next.js

```shellscript
# Criar um novo projeto Next.js
npx create-next-app biblioteca-virtual
cd biblioteca-virtual
```

Caso de erro use o: mkdir "C:\Users\luan.santos\AppData\Roaming\npm"


Durante a criação, responda às perguntas:

- TypeScript? **Sim**
- ESLint? **Sim**
- Tailwind CSS? **Sim**
- `src/` directory? **Não**
- App Router? **Sim**
- Import alias? **Sim** (mantenha o padrão `@/*`)


### Passo 3: Instalar Dependências do Backend

```shellscript
# Instalar Express.js e CORS
npm install express cors
```

### Passo 4: Instalar Componentes UI (shadcn/ui)

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


### Passo 5: Instalar os Componentes Específicos

```shellscript
# Instalar componentes que usamos no projeto
npx shadcn add button
npx shadcn add input
npx shadcn add label
npx shadcn add card
```

### Passo 6: Instalar Ícones

```shellscript
# Instalar Lucide React para ícones
npm install lucide-react
```

## 3. Explicação das Dependências

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


## 4. Explicação dos Componentes UI

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


## 5. Estrutura de Arquivos

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
