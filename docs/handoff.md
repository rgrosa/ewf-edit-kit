# Git e passagem de projeto / Git and handoff

[PT](../README.md) · [EN](../README.en.md) · [Modelo de revisão / Review form](../projects/_template/review.md)

## Português

Use **esta pasta** como raiz do futuro repositório. O Git pode acompanhar o kit, os Markdown, o plano de cada evento, as referências leves incluídas e os marcadores `.gitkeep` que recriam a estrutura vazia. O `.gitignore` exclui por padrão as mídias de entrada, projetos de edição, intermediários e exports dentro das pastas do evento. Markdown permanece elegível para versionamento nessas pastas. Antes de um commit, revise a lista preparada.

1. Para iniciar outro evento, duplique `projects/_template/` ou use `init`. Mantenha a pasta modelo vazia de mídia e seus campos em branco.
2. No brief, indique onde o próximo editor encontra as fontes compartilhadas. Use a identificação do acervo e os caminhos relativos esperados. Para versões parecidas de um master, anote tamanho e, se necessário, SHA-256. Mídias, sessões editáveis e exports viajam à parte pelo meio da equipe.
3. Atualize `edit.md`, `plan.json` (se usado) e `review.md` na mesma revisão. Em Git, registre o plano junto da instrução que motivou a mudança. Em artes ou montagens externas, registre também a sessão, as fontes tipográficas necessárias e o caminho dos arquivos vinculados.
4. Na máquina seguinte, reponha as fontes nas mesmas pastas, execute `inventory` e compare com o registro. Reabra a sessão ou renderize o ID do plano. Compare a nova exportação com a referência aprovada.
5. Para revisar uma versão entregue, adicione um novo ID como `reel-02-v02`. Registre a alteração pedida, o que foi reaproveitado e os pontos conferidos. Alteração de corte em um master pode mudar os tempos de lutas e Reels derivados.

## English

Use **this folder** as the future repository root. Git can track the kit, Markdown, event plans, the included lightweight references and the `.gitkeep` markers that recreate empty folders. The ignore file excludes production inputs, edit sessions, intermediates and exports in the event folders by default. Markdown remains eligible for tracking there. Review staged files before committing.

1. Duplicate `projects/_template/` or use `init` for another event. Keep the template free of production media and its fields blank.
2. Identify the shared source collection and expected relative paths in the brief. For similar masters, record byte size and a SHA-256 fingerprint if needed. Transfer media, editable sessions and exports separately through the team’s storage.
3. Update `edit.md`, `plan.json` (if used) and `review.md` together. Record the plan alongside the instruction that triggered a change. For external edits, identify the editable session, required typefaces and linked files.
4. On another machine, restore sources at those paths, run `inventory` and compare with the record. Reopen the session or render the plan ID. Compare the new export with the approved reference.
5. For an existing delivery, add a new output ID such as `reel-02-v02`. Record the requested change, reused material and checks. A change to a master’s edit can affect the timecodes of derived matches and Reels.

## Verificação em um repositório Git / Checks in a Git repository

```sh
git status --short
git check-ignore -v -- projects/revolution-2026/input/video/master.mp4
git diff --cached --name-only
```

Compartilhe via Git somente os arquivos revisados para esse fim. / Share only files reviewed for the intended repository audience.
