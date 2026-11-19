# Promos com legenda / Captioned promos

## Português

Use este fluxo para uma promo falada em formato de Reel. Quando o pedido for “somente adicionar a legenda”, mantenha a cena inteira, as pausas, o enquadramento e o som da gravação. A única camada acrescentada é o texto da fala.

| Elemento | Padrão aprovado em Sid e ASH |
|---|---|
| Imagem | Vertical 9:16, exportada em 1080 × 1920. Confira a orientação de exibição do MOV antes de enquadrar. |
| Letra | Impact branca em caixa alta, com contorno escuro. Na tela de 1080 × 1920, a composição usou corpo de 61 px e traço de 9 px. |
| Posição | Bloco centralizado horizontalmente, com o centro a aproximadamente 78% da altura (y ≈ 1496 px). |
| Quebras | Uma ou duas linhas. Quebre entre grupos de palavras que façam sentido juntos e mantenha o rosto livre. |
| Entrega | MP4 com legendas gravadas na imagem, vídeo H.264 e áudio original. Salve em `exports/reels/promo-<id>-v01.mp4`. |

### Da gravação à entrega

1. Registre o pedido e a transcrição em `brief.md`. Abra a gravação e a referência visual. Confira a duração, a rotação, a primeira pessoa que fala e a grafia dos nomes de ringue. Se não conseguir transcrever uma fala com segurança, peça o trecho ao editor. Uma transcrição em texto corrido basta.
2. Divida o diálogo em frases curtas. Preserve o jeito de falar e as repetições. Use a pontuação para ajudar a leitura. Salve cada bloco com início e fim em uma legenda editável, como `work/promo-<id>-v01.ass`.
3. Ouça desde antes da primeira palavra e marque a entrada de cada interlocutor. Use as pausas e a forma de onda para refinar os limites. Uma tela de celular, ruído de cena ou uma fala repetida podem confundir o alinhamento automático. Compare o trecho sugerido com a fala em contexto. Marque como estimativa qualquer trecho que só pôde ser medido.
4. Renderize uma amostra com a abertura e a primeira troca de falas. Confira em tamanho de celular se dá tempo de ler, se o contorno destaca as letras e se as quebras acompanham a frase. Use uma sessão de legendas em `work/`. O preset de Reel de luta da CLI acrescenta logo e chamada final.
5. Abra o MP4 exportado e acompanhe o diálogo até o fim. Confira especialmente a primeira palavra, as trocas de interlocutor, as frases repetidas e a última saída de texto. Registre em `edit.md` a fonte e a sessão e em `review.md` a versão, o que foi visto, ouvido e medido e as pendências. Um hash de áudio idêntico confirma a preservação da faixa. A sincronia da legenda se confere comparando a aparição do texto com a fala.

### Como revisar só um trecho

Duplique a última versão. Localize as frases citadas pelo editor e compare-as com a versão em que aquele trecho funcionava. Altere apenas as entradas e saídas afetadas. Reveja também a passagem para a próxima frase e confira no MP4 se os demais blocos continuam nos tempos aprovados.

Na promo **Sid e ASH**, o alinhamento automático antecipou “E aí, guri!” para 1,63 s na v02. Na v03 aprovada pelo editor, as três falas iniciais retomaram os tempos da v01. No MP4, “E aí, guri!” aparece a 5,27 s, “Oi, Sid!” a 7,17 s e “Cara, tá vendo isso daqui?” a 8,77 s. A partir de “Foi quando a Kali me traiu”, foram mantidos os tempos da v02. Essas marcas pertencem a essa gravação. Para outra promo, marque as entradas no novo áudio.

## English

Use this workflow for a spoken promo Reel. For a captions-only request, keep the full take, pauses, original framing and sound. The approved Sid and ASH layout uses a 1080 × 1920 portrait frame with one or two lines of uppercase white Impact. At that resolution, use 61 px type with a 9 px dark stroke and center the caption block at about 78% of frame height. Check the source’s display rotation before framing.

1. Save the request and transcript in `brief.md`. Inspect the source and visual reference. Confirm ring names and ask the editor for any speech you cannot reliably transcribe.
2. Break the dialogue into readable phrases, preserving delivery and repetitions. Save editable in/out times in `work/`. Listen from before the first word and mark speaker changes. Check suggested timings against the dialogue, especially when a phone plays audio or a phrase repeats.
3. Preview the opening and first speaker change at phone size. Check wrapping, contrast and reading time. Use a caption session for this edit. The match-highlight CLI preset adds a logo and end card.
4. Export a portrait H.264 MP4 with burned-in captions and original audio to `exports/reels/promo-<id>-v01.mp4`. Play the export through the last caption. Log sources and session in `edit.md`, then record visual checks, listening, measurements and unresolved estimates in `review.md`. Matching audio hashes verify audio preservation. Check caption timing against speech in the exported video.
5. For a local timing correction, duplicate the latest revision and retime only the affected cues. Check the transition into the next cue. In the approved Sid and ASH v03, the first three cues reused v01 timing and the rest retained v02 timing. Derive fresh timings from each new recording.
