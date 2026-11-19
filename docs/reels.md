# Reels

[PT](../README.md) · [EN](../README.en.md) · [Quadro do Reel de Revolution / Revolution frame](../assets/references/revolution-reel.jpg)

## Português

Para um pedido “no mesmo formato”, use o Reel com logo aprovado pela EWF. Ele funciona com o master de um evento ou com uma luta avulsa. O trecho é contínuo e tem dez segundos. Um compilado de vários momentos é uma entrega distinta.

1. Examine candidatos em movimento e com áudio. Considere como momento de impacto tanto a conclusão de um grande golpe quanto um pico de reação da plateia ou dos narradores, com gritos mais altos ou maior empolgação. Use esses sinais sonoros para localizar e comparar os candidatos. Escolha uma ação cuja preparação, impacto e reação caibam no intervalo, com os lutadores visíveis. Registre fonte, tempos e justificativa, incluindo a reação sonora quando ela motivar a escolha. Respeite o pedido sobre mostrar ou preservar o resultado da luta.
2. Monte conforme a tabela abaixo. A faixa horizontal mostra todo o quadro, com proporção preservada. O fundo usa uma segunda cópia ampliada, escurecida e desfocada. Use o som do trecho. Reduza estalos de extremidade se necessário.
3. Use uma saída `reel` no plano. O preset inclui logo e CTA em português. Se o texto da arte mudar, forneça um PNG transparente pelo campo `cta`, ou componha em camadas no editor. Para um compilado pedido, monte uma sequência com tempo e som por fonte e registre cada corte.
4. Veja e ouça o Reel inteiro no tamanho de um celular. Confira o quadro antes e depois de 8 s, o impacto, a proporção, a leitura do CTA e a terminação do áudio. Para uma revisão só da logo, reabra a versão aprovada, bloqueie a ação e a faixa de áudio e altere o cabeçalho. Compare os mesmos quadros e, se o áudio foi copiado, o hash do fluxo das duas versões.

### Busca de momentos — método aprovado

Use como ponto de partida o método aprovado pelo editor

1. Analise o áudio de toda a luta. Calcule a energia RMS em janelas de 0,5 s e suavize por aproximadamente 2 s para localizar reações sustentadas. Compare os picos dentro da própria gravação; não use um limiar absoluto de volume entre eventos com mixagens diferentes.
2. Ordene as regiões por energia e selecione inicialmente até 15 candidatas, separadas por aproximadamente 25 s para evitar várias escolhas da mesma ação. Ajuste esses parâmetros à duração e ao ritmo da luta. Em um show completo, faça a busca por luta, evitando que uma única luta mais alta domine a seleção.
3. Compare imagens antes, durante e depois de cada pico. Uma primeira triagem pode usar quadros em −4, −2, 0, +2 e +4 s. Priorize ação legível, grande golpe ou queda e reação expressiva da plateia ou dos narradores. Volume alto sozinho não basta: descarte música de entrada, ruído ou fala alta sem um momento relevante.
4. Refine os melhores candidatos em sequências com amostras a cada 0,5 s e confira em movimento e com som. Para um Reel de 10 s, comece testando cerca de 5 s antes do pico e ajuste para manter preparação, impacto e reação. O grito pode acontecer depois do golpe; não corte automaticamente no tempo do pico.
5. Escolha momentos distintos e compare com Reels já entregues para evitar repetição. Salve os tempos, as medições e as folhas de seleção em `work/`, com justificativas em `edit.md`, para reutilizar a análise nas próximas revisões da mesma fonte. Recalcule se a fonte ou a mixagem mudar.

A energia RMS mede a mixagem, sem distinguir plateia de narração. Registre separadamente medição, inspeção visual e escuta; se não houver escuta, declare essa limitação. A aprovação editorial não substitui o registro do que foi efetivamente verificado.

## English

For a request “in the same format,” use EWF’s approved logo-header Reel. Start from a show master or a standalone match. The individual Reel uses one continuous ten-second sequence. A multi-highlight montage is a separate deliverable.

1. Review candidates in motion with sound. An impact moment can be the completion of a major move or a peak in the crowd’s or commentators’ reaction, with louder shouting or greater excitement. Use these audio cues to locate and compare candidates. Choose a sequence with a visible setup, impact and reaction inside the range. Record source, timecodes and your reason, including the audio reaction when it motivates the choice. Follow any instruction about revealing the finish.
2. Use the table below. The central panel preserves the entire source frame and its aspect ratio. A second enlarged, darkened and blurred copy fills the background. Use the sound of the selected moment. Smooth audible clicks at the edges if needed.
3. Add a `reel` output to the plan. The preset includes the EWF logo and Portuguese CTA. Supply a transparent PNG through `cta` for alternative copy, or compose it in layers in your editor. For a requested montage, assign timing and sound per source and log each cut.
4. Watch and listen to the entire Reel at phone size. Check both sides of 8 s, the impact, proportions, CTA readability and audio ending. For a logo-only revision, reopen the approved timeline, lock the action and audio, and edit the header. Compare corresponding frames and, when the audio stream was copied, compare its hash across versions.

### Finding moments — approved method

Start with the method approved by the editor for the three new Reels from Sobreviventes match 05 (2026-11-18):

1. Analyze audio across the entire match. Calculate RMS energy in 0.5-second windows and smooth over approximately 2 seconds to find sustained reactions. Compare peaks within the recording; do not apply an absolute loudness threshold across events with different mixes.
2. Rank regions by energy and initially select up to 15 candidates, approximately 25 seconds apart to avoid repeatedly selecting the same action. Adapt these parameters to match length and pace. For a full show, search each match separately so one louder match does not dominate.
3. Compare images before, during and after each peak. An initial pass can use frames at −4, −2, 0, +2 and +4 seconds. Favor readable action, major moves or falls, and expressive crowd or commentary reactions. Loudness alone is insufficient: reject entrance music, noise or loud speech without a relevant moment.
4. Refine the best candidates using sequences sampled every 0.5 seconds, then review in motion with sound. For a 10-second Reel, start by testing roughly 5 seconds before the peak and adjust to retain setup, impact and reaction. A shout may follow the move; do not cut automatically at the peak timestamp.
5. Select distinct moments and compare with previous deliveries to avoid repeats. Save timestamps, measurements and selection sheets in `work/`, with reasons in `edit.md`, to reuse the analysis in later revisions of the same source. Recalculate when the source or mix changes.

**Approved reference:** `Sobreviventes/exports/matches/luta-05-v01.mp4`, ranges 534–544 s, 701.5–711.5 s and 863–873 s. The editor confirmed that all three captured the most impactful moments. Reference script: `Sobreviventes/work/reels-luta05.py`; measurements and sheets: `Sobreviventes/work/reels-luta05/`. The script contains event-specific source paths, timestamps and parameters: adapt them before using another recording. These timestamps are examples, not markers for other matches.

RMS energy measures the mix without distinguishing crowd from commentary. Record measurements, visual inspection and listening separately; disclose when listening was unavailable. Editorial approval does not replace the record of what was actually checked.

## Modelo aprovado / Approved layout

| Elemento / Element | Parâmetro / Setting |
|---|---|
| Tela / Canvas | 1080 × 1920, 9:16, 10 s |
| Logo EWF | Topo central / Top center, largura / width 660 px, y = 160 |
| Luta / Action | Centralizada em / Centered in 1080 × 608, y = 600 |
| Chamada / End card | 8.000 ≤ t < 10.000 s, “VEJA COMPLETO” + “NO YOUTUBE” |
| Rodapé / Card | x = 80, y = 1270, 920 × 220, fundo escuro e filete vermelho / dark panel and red rule |
| Exportação / Export | MP4, H.264, AAC quando há som / when sound is present. Última Noite 30 fps, Revolution 24 fps. |

**Revisão apenas do cabeçalho / Header-only revision.** O comando `render` recria o Reel completo. Para preservar o fluxo de áudio aprovado, troque a camada da logo no editor e copie o áudio original ao finalizar. Compare também a área abaixo de y = 600. / The render command rebuilds the full Reel. To preserve the approved audio stream, replace the logo layer in the editor and copy the original audio during final muxing. Also compare the region below y = 600.
