<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>;

axios("pessoas.json").then((resposta) => carregaElNaPag(resposta.data));
