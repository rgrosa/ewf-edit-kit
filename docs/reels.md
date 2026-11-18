# Reels

[PT](../README.md) · [EN](../README.en.md) · [Quadro do Reel de Revolution / Revolution frame](../assets/references/revolution-reel.jpg)

## Português

Para um pedido “no mesmo formato”, use o Reel com logo aprovado pela EWF. Ele funciona com o master de um evento ou com uma luta avulsa. O trecho é contínuo e tem dez segundos. Um compilado de vários momentos é uma entrega distinta.

1. Examine candidatos em movimento e com áudio. Escolha uma ação cuja preparação, impacto e reação caibam no intervalo, com os lutadores visíveis. Registre fonte, tempos e justificativa. Respeite o pedido sobre mostrar ou preservar o resultado da luta.
2. Monte conforme a tabela abaixo. A faixa horizontal mostra todo o quadro, com proporção preservada. O fundo usa uma segunda cópia ampliada, escurecida e desfocada. Use o som do trecho. Reduza estalos de extremidade se necessário.
3. Use uma saída `reel` no plano. O preset inclui logo e CTA em português. Se o texto da arte mudar, forneça um PNG transparente pelo campo `cta`, ou componha em camadas no editor. Para um compilado pedido, monte uma sequência com tempo e som por fonte e registre cada corte.
4. Veja e ouça o Reel inteiro no tamanho de um celular. Confira o quadro antes e depois de 8 s, o impacto, a proporção, a leitura do CTA e a terminação do áudio. Para uma revisão só da logo, reabra a versão aprovada, bloqueie a ação e a faixa de áudio e altere o cabeçalho. Compare os mesmos quadros e, se o áudio foi copiado, o hash do fluxo das duas versões.

## English

For a request “in the same format,” use EWF’s approved logo-header Reel. Start from a show master or a standalone match. The individual Reel uses one continuous ten-second sequence. A multi-highlight montage is a separate deliverable.

1. Review candidates in motion with sound. Choose a sequence with a visible setup, impact and reaction inside the range. Record source, timecodes and your reason. Follow any instruction about revealing the finish.
2. Use the table below. The central panel preserves the entire source frame and its aspect ratio. A second enlarged, darkened and blurred copy fills the background. Use the sound of the selected moment. Smooth audible clicks at the edges if needed.
3. Add a `reel` output to the plan. The preset includes the EWF logo and Portuguese CTA. Supply a transparent PNG through `cta` for alternative copy, or compose it in layers in your editor. For a requested montage, assign timing and sound per source and log each cut.
4. Watch and listen to the entire Reel at phone size. Check both sides of 8 s, the impact, proportions, CTA readability and audio ending. For a logo-only revision, reopen the approved timeline, lock the action and audio, and edit the header. Compare corresponding frames and, when the audio stream was copied, compare its hash across versions.

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
