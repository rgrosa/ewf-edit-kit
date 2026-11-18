# Thumbnails / Capas

[PT](../README.md) · [EN](../README.en.md) · [Referência real / Actual reference](../assets/references/ultima-noite-free-match.jpg)

## Português

1. Abra a foto ou o pôster original e a referência indicada. Identifique o foco (rosto, golpe ou confronto), o texto obrigatório e os elementos travados. Associe o arquivo à luta correta. Guarde a imagem-fonte e a composição editável.
2. **Adaptação de pôster.** Se o pedido for “apenas ajustar” ou “sem novos elementos”, mantenha somente a arte existente. Primeiro tente conter a imagem inteira, com margem se necessário. Recorte onde houver área livre e confira títulos, data e marcas em todas as bordas. Não estique nem recrie a foto.
3. **Capa FREE MATCH.** Use uma foto ou um quadro real da luta e a referência da série. No exemplo da Última Noite, a ação domina o quadro, a logo EWF fica no canto inferior esquerdo e o texto branco largo “FREE MATCH” ocupa a faixa inferior. Ajuste o recorte para manter rostos, mãos e ação legíveis acima do rodapé. O kit inclui uma tarja adaptada para iniciar novas capas.
4. Exporte em 16:9, usando a dimensão do brief. As capas locais da série têm 1600 × 900 e esse é o canvas da CLI. O modo `plain` adapta o pôster e o modo `free-match` aplica a tarja. `contain` preserva a imagem inteira. O recorte central `cover` precisa de conferência visual. Para um recorte dirigido, posicione em camadas no editor.
5. Exporte uma nova versão em `exports/thumbnails/`. Abra a imagem em tamanho cheio e reduzida a aproximadamente 320 × 180. Confira ortografia, identidade dos lutadores, nitidez, proporção e legibilidade perto da duração que o player pode sobrepor no canto inferior direito. Entregue uma capa por luta ou foto pedida e confira a correspondência de nomes.

### Quando a única fonte é o vídeo da luta

1. Use a luta exportada ou o intervalo correspondente no master. Compare quadros de diferentes momentos da luta, de preferência lado a lado. Procure uma cena que conte o que está acontecendo em uma imagem, como o árbitro contando um pin, uma chave já encaixada ou uma encarada na plateia.
2. Em cada cena promissora, avance e recue alguns quadros. Abra os melhores em tamanho cheio e examine os rostos, as mãos e o ponto de contato. Se houver rastro de movimento, sobreposição que esconda o golpe ou foco apenas na plateia, escolha outro quadro ou outra cena. Filtros de nitidez não recuperam esse detalhe.
3. Extraia o quadro escolhido na resolução original. Ajuste o recorte 16:9 e aplique a tarja oficial com a logo EWF e “FREE MATCH”. Abra o JPEG final em tamanho cheio para verificar a nitidez e a 320 × 180 para conferir se dá para identificar quem faz o quê, mesmo com o rodapé. Se a cena depender de uma explicação, volte à seleção.
4. Guarde o quadro original e a base sem tarja em `work/`. Registre em `edit.md` a luta, o caminho da fonte, o tempo medido nessa fonte, o recorte e o motivo da escolha. Anote em `review.md` o resultado das duas conferências. Em revisões, exporte com o próximo número de versão.

## English

1. Open the original photo or poster and the requested reference. Identify the focal subject (face, move or confrontation), required copy and locked elements. Match each source to the correct bout. Keep the source image and editable composition.
2. **Poster adaptation.** For “just resize” or “no new elements,” keep the existing artwork. Start by fitting the whole poster, with padding if necessary. Crop in available negative space and check titles, dates and marks at all edges. Preserve the photograph and its aspect ratio.
3. **FREE MATCH cover.** Use a real match photo or video frame and the series reference. In the Última Noite example, action fills the frame above an EWF logo at bottom left and wide white “FREE MATCH” lettering along the bottom. Compose for faces, hands and the move above the footer. A reusable adaptation of the footer is included for new covers.
4. Deliver a 16:9 image at the brief’s size. Existing series images are 1600 × 900, the CLI canvas size. Choose `plain` for a poster adaptation and `free-match` for the branded footer. `contain` keeps the whole image. Visually check the centered `cover` crop. For a subject-specific crop, position the image in a layered editor.
5. Export a new revision to `exports/thumbnails/`. Open it full size and at approximately 320 × 180. Check spelling, wrestler identity, sharpness, proportions and readability near the player’s lower-right duration badge. Deliver one cover per requested bout or photo and verify the filename mapping.

### When the match video is the only image source

1. Use the exported match or its time range in the show master. Compare frames from different moments in the bout, ideally side by side. Look for a scene that tells its story in one frame, such as a referee counting a pin, an established hold or a face-off in the crowd.
2. Step through neighboring frames in each promising scene. Inspect faces, hands and the point of contact at full size. If motion blur, overlapping bodies or focus on the crowd obscures the action, choose another frame or scene. A sharpening filter cannot recover that detail.
3. Extract the selected frame at source resolution. Set the 16:9 crop and apply the official EWF logo and “FREE MATCH” footer. Open the final JPEG at full size to check sharpness, then at 320 × 180 to see if the viewer can tell who is doing what with the footer in place. If the scene needs a caption to explain it, revisit the selection.
4. Keep the original frame and the unbranded crop in `work/`. Log the bout, source path, timestamp on that source, crop and reason for the choice in `edit.md`. Record both visual checks in `review.md`. Export revisions under the next version number.
