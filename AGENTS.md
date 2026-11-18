# EWF · Instruções para agentes / Agent instructions

Aplica-se a toda esta pasta. / Applies to this entire folder.

## Roteamento / Routing

| Pedido em português | Request in English | Procedimento / Workflow |
|---|---|---|
| Editar evento, montar show, sincronizar narração | Edit full event, assemble show, sync commentary | [Evento / Event](docs/event.md) |
| Separar lutas grátis, cortar luta completa | Split show into free matches, export a full match | [Lutas / Matches](docs/free-matches.md) |
| Criar Reel, vídeo vertical, melhores momentos | Make a Reel, vertical clip or highlights montage | [Reels](docs/reels.md) |
| Editar thumbnail, capa, miniatura ou pôster | Edit a thumbnail, cover or poster | [Thumbnails](docs/thumbnails.md) |

## Contrato de execução

1. Responda no idioma do pedido. Registre o texto original no `brief.md` do evento. Separe o idioma da conversa do idioma da arte. Preserve nomes de ringue, nomes oficiais, logo e chamadas aprovadas. Se o usuário pedir tradução da arte, registre a frase escolhida.
2. Identifique o evento e as entregas pedidas. Use a instrução explícita mais recente, depois o brief e as referências aprovadas do evento, depois o guia EWF. Em pedidos compostos, encadeie apenas os fluxos necessários. Um Reel pode partir de uma luta já pronta.
3. Inventarie as entradas, inspecione imagens, quadros e áudio e registre os caminhos relativos em `edit.md`. Mantenha originais e entregas anteriores. Se faltar uma fonte decisiva, identifique exatamente o arquivo ou decisão e avance nas partes independentes.
4. Registre corte, fonte, versão, enquadramento e tratamento de áudio pertinentes. Use `plan.json` para as receitas da [CLI](docs/render.md). Para montagem externa, guarde sessão e intermediários em `work/` e anote como reproduzir. Teste uma amostra antes de um render longo.
5. Execute a edição solicitada. Exporte com ID e versão, por exemplo `luta-02-v01`. Numa revisão gráfica, reutilize o intervalo e o áudio já aprovados. Quando o material mudar, atualize as saídas afetadas.
6. Abra a entrega, faça o controle específico do guia e registre caminho, resultado, amostragem e pendências em `review.md`. Diferencie o que foi medido, visto e ouvido. Comunique o resultado ao editor. Publicação em plataformas depende de pedido específico.

## Execution contract

1. Reply in the language of the request. Save the original wording in the event’s `brief.md`. Track the language of the artwork separately. Keep ring names, official event titles, logos and approved calls to action. Record any requested translated copy.
2. Identify the event and requested outputs. Follow the latest explicit instruction, then the event brief and approved references, then the EWF guide. For a combined request, connect the relevant workflows. A Reel may start from an existing match master.
3. Inventory the inputs, inspect images, footage and audio, and record relative paths in `edit.md`. Preserve originals and earlier deliveries. If a critical source is missing, ask for that file or decision and continue independent work.
4. Record source ranges, versions, framing and audio treatment as applicable. Use `plan.json` with the [CLI](docs/render.md). For external edits, keep sessions and intermediates in `work/` and document reproduction steps. Test a representative excerpt before a long render.
5. Produce the requested edit. Export with an ID and revision such as `match-02-v01`. For a graphics-only revision, reuse the approved timing and audio. When a source changes, rebuild the affected outputs.
6. Open the deliverable, perform the workflow checks and log its path, result, review coverage and open items in `review.md`. Distinguish measurements, visual inspection and listening. Report back to the editor. Platform publishing requires a specific request.
