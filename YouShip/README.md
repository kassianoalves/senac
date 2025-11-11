YouShip — README rápido

Visão geral
- Projeto front-end estático inspirado no YouTube com tema laranja.
- Páginas principais: `index.html`, `ao-vivo.html`, `louvor.html`, `podcast.html`, `perfil.html`, `video.html`.

Como testar localmente
1. Abra um servidor local (recomendado para que fetch funcione):

```powershell
cd 'p:\Github\Git\YouShip'
python -m http.server 8000
# abra http://localhost:8000
```

Adicionar vídeos locais
- Coloque arquivos MP4 (ou WebM) em `videos/` com o nome correspondente ao campo `file` em `js/cards.json`.
- Exemplo: se `js/cards.json` tem `"file":"videos/v1.mp4"`, adicione `videos\v1.mp4`.

Editar cards e metadados
- Edite `js/cards.json` para adicionar/alterar vídeos. Cada objeto deve ter ao menos: `id`, `title`, `channel`, `thumb`, `category`.
- Opcional: `file` para reproduzir localmente.

Autenticação demo
- Cadastro e login são simulados com `localStorage` (`youshipUser`, `youshipAuth`). Não use em produção.

Arquitetura / pontos de personalização
- `css/style.css` — estilos do site (use as variáveis :root para alterar cores)
- `js/app.js` — lógica de carregamento de cards, filtros, paginação e histórico
- `video.html` — player; usa `js/cards.json` para localizar os metadados

Próximos passos sugeridos
- Criar página de vídeo completa com recomendações, comentários e contador de visualizações (simulado).
- Implementar autenticação real com backend.
- Integrar um pequeno backend para servir vídeos de forma segura e suporte a paginação do lado do servidor.

Licença
- Este projeto é um exemplo/boilerplate — sinta-se livre para adaptar.
