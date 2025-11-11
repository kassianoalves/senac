"""
Gera arquivos JSON com a lista de arquivos de mídia nas pastas louvor/music e podcast/audio.
Uso:
  python scripts/generate_media_index.py
Produz:
  louvor/music.json  (lista de objetos {"file": "music/xxx.mp3", "name": "xxx.mp3"})
  podcast/audio.json (lista de objetos {"file": "audio/yyy.mp3", "name": "yyy.mp3"})

Observação: execute este script a partir da raiz do projeto (onde está a pasta YouWorsh).
"""
import os
import json

# Calcular diretório YouWorsh de forma robusta: se o script estiver em YouWorsh/scripts,
# então a pasta YouWorsh é o pai do diretório scripts.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if os.path.basename(SCRIPT_DIR).lower() == 'scripts':
    YOUWORSH = os.path.dirname(SCRIPT_DIR)
else:
    # fallback: assume script está na raiz e existe pasta YouWorsh ao lado
    YOUWORSH = os.path.join(SCRIPT_DIR, 'YouWorsh')

paths = [
    (os.path.join(YOUWORSH, 'louvor', 'music'), os.path.join(YOUWORSH, 'louvor', 'music.json'), 'music/'),
    (os.path.join(YOUWORSH, 'podcast', 'audio'), os.path.join(YOUWORSH, 'podcast', 'audio.json'), 'audio/')
]

EXTS = {'.mp3', '.wav', '.ogg', '.m4a'}

for dir_path, out_json, web_prefix in paths:
    items = []
    if os.path.isdir(dir_path):
        for name in sorted(os.listdir(dir_path)):
            full = os.path.join(dir_path, name)
            if os.path.isfile(full) and os.path.splitext(name)[1].lower() in EXTS:
                items.append({
                    'file': web_prefix + name,
                    'name': name
                })
    else:
        print('Diretório não existe:', dir_path)

    # escreve JSON
    try:
        with open(out_json, 'w', encoding='utf-8') as f:
            json.dump(items, f, ensure_ascii=False, indent=2)
        print('Gerado', out_json, 'com', len(items), 'itens')
    except Exception as e:
        print('Erro escrevendo', out_json, e)

print('Pronto.')
