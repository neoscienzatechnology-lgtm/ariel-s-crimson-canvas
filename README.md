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

### Passo a passo para fazer deploy no SquareCloud

#### Pré-requisitos
- Conta no [SquareCloud](https://squarecloud.app/)
- Node.js instalado localmente

#### Passos para Deploy

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
- `MAIN`: Arquivo principal (dist/index.html)
- `MEMORY`: Memória alocada (512MB)
- `START`: Comando para servir os arquivos estáticos

**3. Criar arquivo package.json na pasta dist**

Antes de fazer upload, você precisa adicionar `serve` como dependência. Crie ou copie um `package.json` simplificado na pasta `dist`:

```sh
# Na raiz do projeto, execute:
cat > dist/package.json << 'EOF'
{
  "name": "ariel-designer-portfolio",
  "version": "1.0.0",
  "dependencies": {
    "serve": "^14.2.0"
  }
}
EOF
```

**4. Fazer upload para SquareCloud**

Opção A - Via Dashboard Web:
1. Acesse [SquareCloud Dashboard](https://squarecloud.app/dashboard)
2. Clique em "Upload Application"
3. Compacte os seguintes arquivos em um arquivo ZIP:
   - Todo o conteúdo da pasta `dist/`
   - O arquivo `squarecloud.app` (copie para dentro da pasta dist)
4. Faça upload do arquivo ZIP
5. Aguarde o deploy ser concluído

Opção B - Via CLI:
```sh
# Instale o CLI do SquareCloud
npm install -g @squarecloud/cli

# Faça login
squarecloud login

# Copie squarecloud.app para dist
cp squarecloud.app dist/

# Entre na pasta dist e faça o commit
cd dist
squarecloud commit
```

**5. Verificar o deploy**

Após o upload, o SquareCloud irá:
- Instalar as dependências (`serve`)
- Executar o comando START: `npx serve dist -p 80`
- Disponibilizar seu site em: `https://ariel-designer.squarecloud.app` (ou o subdomínio configurado)

**6. Configurar domínio personalizado (opcional)**

No painel do SquareCloud, você pode configurar um domínio personalizado nas configurações da aplicação.

### Solução de Problemas

- **Erro de memória**: Aumente o valor de `MEMORY` no arquivo `squarecloud.app`
- **Erro 404**: Verifique se o arquivo `dist/index.html` existe após o build
- **Rotas não funcionam**: Para SPAs com React Router, pode ser necessário configurar rewrites no servidor

Para mais informações, visite a [documentação oficial do SquareCloud](https://docs.squarecloud.app/).

## Contact Information

- **Email**: ariel.silva.serra@gmail.com
- **Phone**: +55 47 99116-4443
- **Location**: Itapema - Santa Catarina

## License

© 2025 Ariel Designer. All rights reserved.
