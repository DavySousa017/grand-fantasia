# Use a imagem base do GF Scarlet (Ubuntu com NodeJS 18)
FROM gfscarlet/ubuntu-nodejs18:latest

# Copiando arquivos do backend para o diretório do container
COPY . /var/www/gf-scarlet/backend/

# Setando pasta padrão do container
WORKDIR /var/www/gf-scarlet/backend/

# Instalando dependencias do NPM para utilizar o Node
RUN npm install

# Expondo a porta do frontend
EXPOSE 3000

# Executando aplicação como entrypoint do container
ENTRYPOINT ["node", "src/app.js"]
