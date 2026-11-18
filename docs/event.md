# Evento completo / Full event

[PT](../README.md) · [EN](../README.en.md) · [Modelo de plano / Edit log](../projects/_template/edit.md)

## Português

**Entradas.** Examine os vídeos de câmera ou o master, o áudio embutido e as faixas separadas que chegaram. Use capítulos, anúncio, sino e ação para confirmar a ordem. Verifique a orientação real, relação de aspecto, fps, canais, duração e compatibilidade de cor. A quantidade de lutas vem do material.

1. Monte em `edit.md` a ordem, entradas/saídas por fonte e início de cada segmento no show. Registre se o pedido inclui entradas dos lutadores, apresentação, pós-luta e fala final. Associe cada narração à luta por conteúdo. Uma fala pode começar antes do primeiro quadro escolhido.
2. Se houver voz separada, identifique sons comuns perto do começo, meio e fim. Registre pares `(segundo da narração, segundo do vídeo)`. Um deslocamento constante pede reposicionamento. Para deriva uniforme, preserve o tom e use velocidade `Δtempo da narração / Δtempo do vídeo`. Se houver pausa ou interrupção, reinicie o alinhamento naquele ponto. Se a voz começa mais tarde, posicione-a no instante medido. Ouça novos pontos depois do ajuste.
3. Na mixagem, destaque a voz e preserve os golpes e a torcida. Aplique redução do ambiente durante a fala se ajudar. Corte trechos duplicados de voz e trate estalos nas emendas. Um ponto de partida usado na EWF foi −16 LUFS integrados e teto de −1,5 dBTP. Meça o arquivo codificado e ajuste por escuta e destino.
4. Monte as câmeras e o áudio em um editor, ou prepare segmentos com a mixagem final em `work/`. Confirme orientação uma única vez, continuidade, resolução de entrega e posição da logo. Para segmentos com áudio já pronto, a receita `event` concatena os intervalos na ordem do plano. Para exportação com capítulos, use os marcadores do editor ou o procedimento abaixo.
5. Exporte para `exports/events/`. Confira apresentação inicial, cortes de câmera, começo/meio/fim de cada luta, emendas da narração, fim da última fala e espaço após o encerramento. Reproduza os capítulos e meça duração e pistas. Anote em `review.md` os pontos ouvidos e a cobertura.

## English

**Inputs.** Inspect the camera files or show master, embedded sound and any separate audio. Confirm the running order against announcements, bell and action. Inspect display orientation, aspect ratio, frame rate, channels, duration and color compatibility. Determine the match count from the footage.

1. Record segment order, source in/out and final timeline start in `edit.md`. Establish how entrances, introductions, post-match action and the closing speech fit the brief. Match commentary by content. It may begin before the selected picture.
2. For separate commentary, locate shared sounds near the beginning, middle and end. Record pairs of commentary seconds and video seconds. Reposition for a fixed offset. For uniform drift, preserve pitch and set playback speed to `Δcommentary time / Δvideo time`. Restart the map at interruptions. Place late-starting commentary at its measured position. Listen at additional points after correction.
3. Balance voice against ring impacts and crowd sound. Duck the venue feed under speech where helpful. Remove duplicate voice and smooth audible edit clicks. One EWF mix started at −16 LUFS integrated with a −1.5 dBTP ceiling. Measure the encoded output and adjust by ear and delivery brief.
4. Edit cameras and audio in your NLE, or stage mixed segments in `work/`. Check rotation once, continuity, delivery resolution and logo position. The `event` recipe assembles prepared audio/video clips in plan order. For chapters, use NLE markers or the procedure below.
5. Export to `exports/events/`. Review the opening, camera cuts, beginning/middle/end of each match, commentary edits and the end of the closing speech. Test chapter seeking and measure runtime and streams. Log listening points and review coverage in `review.md`.

## Capítulos / Chapters

Calcule os limites em milissegundos na **montagem exportada**. O fim de um capítulo é o início do próximo. O último termina na duração real. Exemplo de um segmento de 6,25 s. / Calculate millisecond boundaries on the **exported timeline**. Each chapter ends at the next start, and the last ends at the actual runtime. Example for one 6.25-second segment.

```ini
;FFMETADATA1
[CHAPTER]
TIMEBASE=1/1000
START=0
END=6250
title=Luta 01
```

Na pasta do evento, salve como `work/chapters.ffmeta`, repita o bloco para cada luta e use os nomes das suas versões. / From the event folder, save as `work/chapters.ffmeta`, repeat the block for each match and substitute your version names.

```sh
ffmpeg -n -i "exports/events/show-v01.mp4" -f ffmetadata -i "work/chapters.ffmeta" -map 0:v:0 -map "0:a:0?" -map_metadata 0 -map_chapters 1 -c copy -movflags +faststart "exports/events/show-v02.mp4"
ffprobe -v error -show_chapters -show_format -of json "exports/events/show-v02.mp4"
```
