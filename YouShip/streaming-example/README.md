# Exemplo de servidor RTMP + HLS (docker)

Este diretório contém um exemplo mínimo para executar um servidor Nginx com módulo RTMP que gera HLS a partir de streams RTMP.

Aviso: é apenas um exemplo para testes locais. Em produção, configure segurança, autenticação, limites e armazenamento adequados.

Arquivos:
- `docker-compose.yml` - inicializa um container com imagem que inclui nginx+rtmp.
- `nginx.conf` - configuração que habilita RTMP e HLS, escreve HLS em `/tmp/hls` e serve em `http://<host>:8080/hls/`.

Como executar (requisitos):
- Docker Desktop (Windows) ou Docker Engine (Linux/macOS).

Passos:
1. Navegue até esta pasta:

   ```powershell
   cd P:\Github\Git\YouShip\streaming-example
   ```

2. Inicie os serviços:

   ```powershell
   docker compose up -d
   ```

3. No OBS, configure em Transmissão:
   - Servidor: `rtmp://<host>:1935/live`
   - Chave: `mystream` (exemplo)

4. Inicie a transmissão no OBS (Start Streaming). O nginx-rtmp deverá criar arquivos HLS em `/tmp/hls/mystream.m3u8`.

5. No navegador, acesse o HLS:
   - `http://<host>:8080/hls/mystream.m3u8` (será servido pelo container)

Integração com o site YouShip (demo):
- Crie um item em `js/cards.json` com `file: 'http://<host>:8080/hls/mystream.m3u8'` e `live: true` para que `html/video.html` reproduza via HLS.

Observações de segurança:
- Não exponha portas sem autenticação em produção.
- Considere limitar quem pode publicar (autenticação via token/stream key verificável no servidor RTMP).
