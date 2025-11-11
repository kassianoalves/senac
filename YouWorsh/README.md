# YouWorsh — Página inicial (clone visual)

Esta pasta contém uma réplica visual local da página inicial do YouTube para fins de estudo/treinamento. Não contém conteúdo real do YouTube nem usa a marca oficial.

Como abrir:
1. Abra `YouWorsh/index.html` no navegador (duplo clique ou `File -> Open`).

Arquivos importantes:
- `index.html` — página principal
- `css/style.css` — estilos
- `js/app.js` — script mínimo (filtro de busca local)
- `images/*` — logos e miniaturas placeholder

Observações:
- O layout foi criado para estudo e demonstração. Ajuste estilos e textos conforme desejar.

Novidades nesta versão:
- Os cards são carregados dinamicamente a partir de `videos.json`.
- Use `YouWorsh/videos.json` para adicionar, editar ou remover vídeos (campos: id, title, channel, views, age, thumb).
- Há um botão de menu que alterna a sidebar entre expandido e colapsado.

Como testar os dados dinâmicos:
1. Abra `YouWorsh/index.html` no navegador.
2. O arquivo `videos.json` será solicitado automaticamente e os cards renderizados.
3. Para editar os vídeos, abra `YouWorsh/videos.json`, modifique ou adicione objetos e recarregue a página.

Se quiser, posso: gerar thumbnails automáticos com texto, adicionar paginação falsa ("carregar mais") ou salvar favoritos em localStorage.

Recursos adicionais implementados nesta versão:
- Paginação / "Carregar mais": carrega os vídeos em blocos (tamanho: 6).
- Modal de vídeo fictício: clique na miniatura para abrir um modal com informações e um player placeholder.
- Favoritos: clique na estrela (☆) do card para favoritar; os favoritos persistem em `localStorage`. Use o botão ★ no topo para ver apenas favoritos.
- Geração de miniaturas dinâmica: se um item em `videos.json` não tiver `thumb`, a página gera uma miniatura simples via canvas.

Observações técnicas:
- Para ver os favoritos persistidos, marque alguns vídeos como favoritos e recarregue a página; os favoritos serão mantidos.
- `videos.json` inclui exemplos sem `thumb` (v10 e v11) para demonstrar o fallback de geração de miniaturas.

Próximos passos que posso adicionar (diga qual prefere):
- Player real com vídeo embutido / modal com vídeo incorporado.
- Paginação com "infinite scroll".
- Paginação no servidor (simulada) e busca no backend.

Instruções de upload local (pastas criadas):

- Coloque arquivos de áudio para Louvor em: `YouWorsh/louvor/music/` (por exemplo: MP3). A página `louvor/index.html` exibirá os itens assim que você integrar/listá-los.
- Coloque episódios de podcast em: `YouWorsh/podcast/audio/`. A página `podcast/index.html` é o local para listagem de episódios.

Se quiser, eu posso adicionar um pequeno script que varre essas pastas e gera automaticamente um `json` com os arquivos (para exibição). Diga se prefere que eu implemente isso agora.