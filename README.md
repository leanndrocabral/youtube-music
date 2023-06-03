<h2
 align = "center">
Inicializando projeto
</h2>

<br/>

```bash
# Clone o repositório
$ git clone https://github.com/leanndrocabral/youtube-music-angular.git

# Instale as dependências
$ npm install
```

<br/>

<h2 align="center" style='font-family: sans-serif'>
	YouTube Music Angular
</h2>

<p align = "center">
Este projeto não tem o intuito de ser algo fidedigno. Fiz apenas para testar e provar minhas habilidades em Angular. E por algumas limitações da API, estão faltando várias funções.
</p>

<br/>

<h3 align = "center">
Configurando a key do para utilizar a API do YouTube
</h3>

<br/>

<p>
Caso queira acessar a documentação e ver como funciona a  YouTube Data API acesse: <a href='https://developers.google.com/youtube/v3/docs?hl=pt-br'>YouTube Data API.</a> Caso queira apenas gerar a chave para utilizar no projeto acesse: <a href='https://code.google.com/apis/console/?hl=pt-br'> Console da API.</a>
</p>

<p>Criando uma chave de API:</p>

<picture>
<img src='https://cdn.discordapp.com/attachments/1104814802787909804/1114631427162652773/Chave_de_API.gif' style='max-width: 700px' />
</picture>

<br/>

<h3 align = "center">
Configurando Enviroments
</h3>

<br/>

<p>Entre na raiz do projeto e execute o comando:</p>

```bash
$ ng generate environments
```

<p>Isso irá criar uma pasta com dois arquivos no seu repositório.</p>

<img src='https://cdn.discordapp.com/attachments/1104814802787909804/1114633212501704755/image.png'/>

<p>Agora dentro de ambos os arquivos, crie uma chave chamada <span style='color: #ED4245'>key</span> e passe o valor da chave de API no Google Cloud.</p>

<img src='https://cdn.discordapp.com/attachments/1104814802787909804/1114634949430087690/image.png'/>

<br/>

<h3 align = "center">
Iniciando aplicação
</h3>

<p>Após concluir as etapas, utilize o comando abaixo no terminal e acesse o <a href='http://localhost:4200/'>localhost.</a></p>

```bash
$ ng serve
```
