# Lutas grátis / Free matches

[PT](../README.md) · [EN](../README.en.md) · [Exemplo de plano / Sample plan](../examples/plan.json)

## Português

**Entrega.** Um MP4 horizontal por luta pedida, com o começo, o desfecho e o som correspondentes. Trabalhe sobre o master final se ele já tiver o áudio corrigido.

1. Liste os possíveis limites no relógio do master. Use capítulos e transições para preto como pistas. Assista antes e depois de cada ponto e ouça o anúncio, o sino, a decisão e o início do segmento seguinte. Confirme os participantes com o card ou com a identificação no vídeo. Na dúvida, use `luta-01` e anote a pendência.
2. Escolha se entradas, apresentação, pós-luta e encerramento pertencem à luta conforme o pedido. Registre uma linha por saída com arquivo-fonte, início inclusivo e fim exclusivo. Para dividir o show inteiro continuamente, o fim de uma luta deve coincidir com o início da próxima. Documente qualquer intervalo omitido ou sobreposição intencional.
3. Em `plan.json`, crie uma saída `match` por intervalo. Um trecho selecionado dentro da luta usa `tempo no master − início da luta` se a luta for um corte contínuo. Para uma montagem com emendas, use o mapa de segmentos.
4. Exporte para `exports/matches/`. Os cortes da CLI são recodificados para precisão fora de quadros-chave. Preserve a composição e o som do master. Use um enquadramento horizontal próprio se a fonte exigir adaptação.
5. Abra cada MP4 e confira o primeiro e o último trecho **com som**, incluindo a decisão do árbitro e a transição. Compare duração esperada e medida. Confira a quantidade de arquivos, ordem, nomes, continuidade e eventuais exceções.

## English

**Deliverable.** One horizontal MP4 for each requested match, containing its opening, finish and associated sound. Start from the final show master when it already contains corrected audio.

1. Identify candidate boundaries on the master clock. Chapters and fades to black are clues. Inspect both sides of each cut and listen for introductions, bell, decision and the next segment. Verify participants against the card or on-screen identification. If uncertain, keep a neutral ID such as `match-01` and log the open question.
2. Use the brief to place entrances, introductions, post-match action and the closing speech. Log one row per export with source file, inclusive start and exclusive end. When splitting the entire show continuously, the end of one match equals the start of the next. Document intentional gaps or overlaps.
3. Add a `match` output to `plan.json` for each interval. For a continuous match cut, a highlight’s local time is `master time − match start`. For an edited montage, use the segment map.
4. Export to `exports/matches/`. The CLI re-encodes for cuts between keyframes. Preserve the master’s framing and sound. Prepare a horizontal composition if the source requires adaptation.
5. Open each MP4 and check its first and last moments **with sound**, including the referee’s decision and transition. Compare intended and actual length. Verify count, order, names, continuity and any exceptions.

## Exemplo real / Worked example

| Última Noite 2026 · luta 02 / match 02 | Segundos / Seconds |
|---|---|
| Luta no master / Match on master | 682.000 → 1444.000 |
| Duração da luta / Match runtime | 762.000 |
| Reel no master / Reel on master | 1396.000 → 1406.000 |
| Mesmo Reel na luta exportada / Same Reel on exported match | 714.000 → 724.000 |
