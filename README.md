# EWF · Kit de edição

[English edition](README.en.md) · [Instruções para agentes](AGENTS.md) · [Exemplos do acervo](docs/references.md)

Abra esta pasta como a raiz do projeto no seu editor com IA. Cada evento tem uma pasta própria com o pedido, as fontes, as decisões de corte e as entregas. A edição pode ser feita em um editor de vídeo/imagem ou pela linha de comando incluída.

## Primeiro trabalho

1. Duplique **[projects/_template](projects/_template)** como `projects/revolution-2026`. Se usa terminal, o comando abaixo faz a cópia. Escolha um identificador novo por evento.
2. Coloque as gravações em `input/video/`, as fotos em `input/images/` e a narração em `input/audio/` dentro do evento. Os arquivos podem manter espaços, acentos e seus nomes originais.
3. Escreva o pedido no chat do agente ou em `brief.md`. Informe o evento e o que deseja receber. O agente registra o pedido, seleciona o guia e documenta apenas as decisões necessárias.
4. Abra o resultado na subpasta correspondente de `exports/`. Leia `review.md` para ver a versão, os pontos conferidos e as pendências. Para uma revisão, cite o ID da entrega e a alteração.

```sh
node bin/ewf.mjs init revolution-2026
```

**Pedido de exemplo**

> Leia AGENTS.md e trabalhe em projects/revolution-2026. Faça um Reel da luta Strong Style Society x ASH & Kali no formato da EWF. Escolha uma sequência em que a preparação, a queda e a reação caibam nos dez segundos.

## Onde colocar cada arquivo

| Dentro de `projects/<evento>/` | Conteúdo |
|---|---|
| `input/video/` | Show completo, câmeras isoladas, lutas ou masters de edição |
| `input/audio/` | Narração, mesa, ambiente ou mix aprovado |
| `input/images/` | Fotos e pôsteres originais para edição |
| `input/brand/` | Logo, cartela ou tarja específica do evento |
| `input/references/` | Arte aprovada, Reel de referência ou exemplo de enquadramento |
| `brief.md`, `edit.md`, `plan.json` | Pedido, decisões editoriais e parâmetros usados pela CLI |
| `work/` | Inventário, proxies, projetos do editor, camadas, prévias e intermediários |
| `exports/events/`, `exports/matches/`, `exports/reels/`, `exports/thumbnails/` | Entregas por formato, com versão no nome |
| `review.md` | Relatório de revisão e instruções para o próximo editor |

A logo comum, as tarjas portáteis e duas referências visuais ficam em `assets/`. Para conteúdo específico, use as pastas do evento.

## Guias de produção

| Pedido | Guia |
|---|---|
| Montar um show, sincronizar narração ou organizar capítulos | [Evento completo](docs/event.md) |
| Separar um show em lutas grátis | [Free matches](docs/free-matches.md) |
| Transformar um momento de ação em Reel | [Reels](docs/reels.md) |
| Adaptar um pôster ou criar uma capa FREE MATCH | [Thumbnails](docs/thumbnails.md) |
| Inventariar fontes ou renderizar um plano | [Comandos, formatos e limites](docs/render.md) |
| Compartilhar uma edição com outro editor | [Git e passagem de projeto](docs/handoff.md) |

A CLI usa Node.js 18+ e FFmpeg/FFprobe para mídia. Os guias e a criação manual de pastas funcionam independentemente dessas ferramentas.
