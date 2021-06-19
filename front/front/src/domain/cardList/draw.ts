import Konva from 'konva'
import type { ContainerConfig } from 'konva/lib/Container'
import type { Stage } from 'konva/lib/Stage';


export const draw = (key: string, data: ContainerConfig) => {
  if (!document.getElementById(key)) return;
  const textGroupIndex = 4;
  const drawDataText = data.children[0]
    .children[textGroupIndex]
    .children.map((item: any) => {
      // fontawesomeは特殊な処理が必要 https://base64.work/so/javascript/2731511
      if (/\\u/.test(item.attrs.text)) {
        const unicode = item.attrs.text.replace(/\\u/g, '');
        const code = parseInt(unicode, 16)
        if (isNaN(code)) return item
        return ({ ...item, attrs: { ...item.attrs, text: String.fromCodePoint(code) } })
      }
      return item
    })

  data.children[0]
    .children[textGroupIndex]
    .children = drawDataText

  const stage: Stage = Konva.Node.create(data, key);
  const layer = stage.find('Layer')
  layer[0].draw();
}
