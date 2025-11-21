# Ariel Designer - Portfolio Website

Designer portfolio website showcasing identity visual, social media, and strategic design work.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ariel-s-crimson-canvas

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server with auto-reloading
npm run dev
```

The development server will start on `http://localhost:8080`.

## Build

To build the project for production:

```sh
npm run build
```

The build output will be in the `dist` folder.

## Deployment on SquareCloud

### ⚠️ ARQUIVO PRINCIPAL (MAIN FILE)

**Pergunta frequente**: Qual arquivo principal selecionar no dashboard do SquareCloud?

**Resposta**: O arquivo principal já está configurado no arquivo `squarecloud.app`:
- **MAIN=server.js**

O arquivo `server.js` é um servidor Node.js que serve os arquivos estáticos da pasta `dist` e gerencia o roteamento para a aplicação React (SPA).

O arquivo `squarecloud.app` já contém todas as configurações necessárias. Basta incluí-lo no upload!

---

### Passo a passo para fazer deploy no SquareCloud

#### Pré-requisitos
- Conta no [SquareCloud](https://squarecloud.app/)
- Node.js instalado localmente (apenas para deploy manual)

#### Opção 1: Deploy via GitHub (Recomendado - Mais Fácil)

**1. Conectar repositório ao SquareCloud**

Este projeto já está configurado para deploy automático via GitHub:

1. Acesse [SquareCloud Dashboard](https://squarecloud.app/dashboard)
2. Clique em "Create Application" ou "New App"
3. Selecione "GitHub" como método de deploy
4. Autorize o SquareCloud a acessar seu repositório
5. Selecione este repositório (`ariel-s-crimson-canvas`)
6. Selecione o branch que deseja deployar (ex: `main` ou `copilot/prepare-site-for-squarecloud`)

**2. Configuração automática**

O SquareCloud detectará automaticamente o arquivo `squarecloud.app` que já está configurado com:
- `MAIN=server.js` - Servidor Node.js que serve os arquivos estáticos
- `BUILD=npm run build` - Comando para fazer build automaticamente
- `MEMORY=512` - Memória alocada
- Dependências `serve-handler` já adicionada no package.json

**3. Deploy automático**

- O SquareCloud irá automaticamente:
  1. Instalar as dependências (`npm install`)
  2. Fazer o build do projeto (`npm run build`)
  3. Iniciar o servidor Node.js (`node server.js`)
- Cada push para o branch conectado fará um novo deploy automaticamente

**4. Acessar o site**

Seu site estará disponível em: `https://ariel-designer.squarecloud.app` (ou o subdomínio configurado)

---

#### Opção 2: Deploy Manual (Upload de Arquivos)

**1. Preparar o projeto**
```sh
# Instale as dependências
npm install

# Faça o build do projeto
npm run build
```

Isso criará a pasta `dist` com todos os arquivos compilados.

**2. Preparar os arquivos para upload**

O projeto já inclui o arquivo `squarecloud.app` com as configurações necessárias:
- `DISPLAY_NAME`: Nome do aplicativo
- `MAIN`: Arquivo principal (server.js)
- `MEMORY`: Memória alocada (512MB)
- `BUILD`: Comando de build

**3. Fazer upload para SquareCloud**

Via Dashboard Web:
1. Acesse [SquareCloud Dashboard](https://squarecloud.app/dashboard)
2. Clique em "Upload Application"
3. Faça o build do projeto primeiro: `npm run build`
4. Compacte os seguintes arquivos/pastas em um arquivo ZIP:
   - A pasta `dist/` completa
   - O arquivo `server.js`
   - O arquivo `package.json`
   - O arquivo `package-lock.json`
   - O arquivo `squarecloud.app`
5. Faça upload do arquivo ZIP
6. Aguarde o deploy ser concluído

Via CLI:
```sh
# Instale o CLI do SquareCloud
npm install -g @squarecloud/cli

# Faça login
squarecloud login

# Faça o build
npm run build

# Faça o commit do projeto (certifique-se de incluir dist, server.js, package.json e squarecloud.app)
squarecloud commit
```

**4. Verificar o deploy**
Após o upload, o SquareCloud irá:
- Instalar as dependências
- Executar o comando BUILD: `npm run build` (se necessário)
- Executar o servidor: `node server.js`
- Disponibilizar seu site em: `https://ariel-designer.squarecloud.app` (ou o subdomínio configurado)

---

#### Configurar domínio personalizado (opcional)

No painel do SquareCloud, você pode configurar um domínio personalizado nas configurações da aplicação.

### Solução de Problemas

- **Erro de memória**: Aumente o valor de `MEMORY` no arquivo `squarecloud.app`
- **Erro 404**: Verifique se o arquivo `dist/index.html` existe após o build
- **Rotas não funcionam**: Para SPAs com React Router, pode ser necessário configurar rewrites no servidor
- **Build falha**: Verifique os logs no dashboard do SquareCloud para identificar erros de build

Para mais informações, visite a [documentação oficial do SquareCloud](https://docs.squarecloud.app/).

## Contact Information

- **Email**: ariel.silva.serra@gmail.com
- **Phone**: +55 47 99116-4443
- **Location**: Itapema - Santa Catarina

## License

© 2025 Ariel Designer. All rights reserved.
