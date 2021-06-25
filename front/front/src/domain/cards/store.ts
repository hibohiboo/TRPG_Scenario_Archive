import type { ContainerConfig } from "konva/lib/Container";
import { reactive } from "vue";
const family = {
  gothic:
    '"Hiragino Sans W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
  serif:
    '"游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif',
  fontawesome: '"Font Awesome 5 Free", "Font Awesome 5 Brands"',
}
const faWeight = { solid: '900', regular: '400', brands: '400', light: '300' }
const defaultWidth = 242;
const defaultHeight = 342;
const defText = { "className": "Text", "attrs": { "fontSize": 14, "text": "text", "fill": "black", "fontFamily": family.gothic, "fontStyle": faWeight.regular, "draggable": true } }

const fontAwesomeHeart = { "className": "Text", "attrs": { "fontSize": 14, "text": "\uf004", "fill": "black", "fontFamily": family.fontawesome, "fontStyle": faWeight.regular, "draggable": true } }
const baseRect = { "className": "Rect", "attrs": { "width": defaultWidth, "height": defaultHeight, "stroke": "black", "strokeWidth": 1, "cornerRadius": 10 } }
const defRect = { "className": "Rect", "attrs": { "width": 50, "height": 50, "stroke": "black", "strokeWidth": 1, "fill": 'white', "draggable": true } }
const defLine = { "className": "Line", "attrs": { points: [0, 0, 100, 0], "y": 10, "stroke": "black", "strokeWidth": 5, "draggable": true } }
const defImage = { "className": "Image", "attrs": { "scaleX": 1.0, "scaleY": 1.0, "draggable": true } }
const def = {
  "className": "Stage",
  "attrs": { "width": defaultWidth, "height": defaultHeight },
  "children": [
    {
      "className": "Layer",
      "attrs": {},
      "children": [
        // 背景画像
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [{ "className": "Image", "attrs": { "scaleX": 1.0, "scaleY": 1.0 } }],
        },
        // 枠
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            baseRect,
            defRect
          ],
        },
        // 線
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            defLine
          ],
        },
        // 画像
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [],
        },
        // テキスト
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            defText, fontAwesomeHeart
          ],
        }]
    }]
}
export const saveData = (key: string, data: string) => {
  console.log('save', data)
  localStorage.setItem(key, data)
}
export const loadData = (key: string): ContainerConfig => {
  const json = localStorage.getItem(key)
  console.log('load', json)
  if (!json) {

    if (key === 'template-card-front') {
      const lost = { "attrs": { "width": 242, "height": 342 }, "className": "Stage", "children": [{ "attrs": {}, "className": "Layer", "children": [{ "attrs": {}, "className": "Group", "children": [{ "attrs": {}, "className": "Image" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "width": 242, "height": 342, "stroke": "black", "strokeWidth": 5, "cornerRadius": 10, "fill": "#ffffff" }, "className": "Rect" }, { "attrs": { "width": 222, "height": 300, "stroke": "black", "strokeWidth": 1, "fill": "white", "x": 10, "y": 35 }, "className": "Rect" }, { "attrs": { "width": 222, "height": 33, "stroke": "black", "strokeWidth": 1, "fill": "white", "x": 10, "y": 35 }, "className": "Rect" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "points": [0, 0, 33, 0], "y": 36, "stroke": "black", "strokeWidth": 1, "x": 91, "rotation": 90 }, "className": "Line" }, { "attrs": { "points": [0, 0, 222, 0], "y": 90, "stroke": "black", "strokeWidth": 1, "x": 10 }, "className": "Line" }] }, { "attrs": {}, "className": "Group", "children": [] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "fontSize": 21, "text": "$1", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "900", "y": 10, "align": "center", "width": 240 }, "className": "Text" }, { "attrs": { "fontSize": 16, "text": "指定特技", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "x": 16, "y": 43 }, "className": "Text" }, { "attrs": { "fontSize": 18, "text": "$2", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "x": 102, "y": 42 }, "className": "Text" }, { "attrs": { "fontSize": 14, "text": "描写", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "x": 100, "y": 72 }, "className": "Text" }, { "attrs": { "fontSize": 18, "text": "$3", "fill": "black", "fontFamily": "\"游明朝\", YuMincho, \"Hiragino Mincho ProN W3\", \"ヒラギノ明朝 ProN W3\", \"Hiragino Mincho ProN\", \"HG明朝E\", \"ＭＳ Ｐ明朝\", \"ＭＳ 明朝\", serif", "fontStyle": "400", "x": 21, "y": 97, "width": 200 }, "className": "Text" }] }] }] }
      return { "attrs": { "width": 242, "height": 342 }, "className": "Stage", "children": [{ "attrs": {}, "className": "Layer", "children": [{ "attrs": {}, "className": "Group", "children": [{ "attrs": {}, "className": "Image" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "width": 242, "height": 342, "stroke": "black", "strokeWidth": 5, "cornerRadius": 10 }, "className": "Rect" }, { "attrs": { "width": 222, "height": 300, "stroke": "black", "strokeWidth": 1, "fill": "white", "draggable": true, "x": 10, "y": 35 }, "className": "Rect" }, { "attrs": { "width": 222, "height": 33, "stroke": "black", "strokeWidth": 1, "fill": "white", "draggable": true, "x": 10, "y": 35 }, "className": "Rect" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "points": [0, 0, 33, 0], "y": 36, "stroke": "black", "strokeWidth": 1, "draggable": true, "x": 58, "rotation": 90 }, "className": "Line" }, { "attrs": { "points": [0, 0, 222, 0], "y": 90, "stroke": "black", "strokeWidth": 1, "draggable": true, "x": 10 }, "className": "Line" }] }, { "attrs": {}, "className": "Group", "children": [] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "fontSize": 21, "text": "Handout", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "900", "draggable": true, "x": 72, "y": 10 }, "className": "Text" }, { "attrs": { "fontSize": 16, "text": "名前", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "draggable": true, "x": 16, "y": 43 }, "className": "Text" }, { "attrs": { "fontSize": 16, "text": "$1", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "draggable": true, "x": 66, "y": 42 }, "className": "Text" }, { "attrs": { "fontSize": 14, "text": "使命", "fill": "black", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "400", "draggable": true, "x": 100, "y": 72 }, "className": "Text" }, { "attrs": { "fontSize": 14, "text": "$2", "fill": "black", "fontFamily": "\"游明朝\", YuMincho, \"Hiragino Mincho ProN W3\", \"ヒラギノ明朝 ProN W3\", \"Hiragino Mincho ProN\", \"HG明朝E\", \"ＭＳ Ｐ明朝\", \"ＭＳ 明朝\", serif", "fontStyle": "400", "draggable": true, "x": 21, "y": 97, "width": 200 }, "className": "Text" }] }] }] }
    }
    if (key === 'template-card-back') {
      return { "attrs": { "width": 242, "height": 342 }, "className": "Stage", "children": [{ "attrs": {}, "className": "Layer", "children": [{ "attrs": {}, "className": "Group", "children": [{ "attrs": {}, "className": "Image" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "width": 242, "height": 342, "stroke": "black", "strokeWidth": 1, "cornerRadius": 10, "fill": "#000000" }, "className": "Rect" }, { "attrs": { "width": 222, "height": 300, "stroke": "#ffffff", "strokeWidth": 1, "fill": "#000000", "draggable": true, "x": 10, "y": 35 }, "className": "Rect" }, { "attrs": { "width": 218, "height": 229, "stroke": "#ffffff", "strokeWidth": 1, "fill": "white", "draggable": true, "x": 12, "y": 65 }, "className": "Rect" }] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "points": [0, 0, 222, 0], "y": 62, "stroke": "#ffffff", "strokeWidth": 1, "draggable": true, "x": 10 }, "className": "Line" }, { "attrs": { "points": [0, 0, 230, 0], "y": 90, "stroke": "black", "strokeWidth": 1, "draggable": true, "x": 10 }, "className": "Line" }, { "attrs": { "points": [0, 0, 27, 0], "y": 63, "stroke": "black", "strokeWidth": 1, "draggable": true, "x": 89, "rotation": 90 }, "className": "Line" }] }, { "attrs": {}, "className": "Group", "children": [] }, { "attrs": {}, "className": "Group", "children": [{ "attrs": { "fontSize": 21, "text": "Handout", "fill": "#ffffff", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "900", "draggable": true, "x": 72, "y": 10 }, "className": "Text" }, { "attrs": { "fontSize": 28, "text": "\uf071", "fill": "#fff0f0", "fontFamily": "\"Font Awesome 5 Free\", \"Font Awesome 5 Brands\"", "fontStyle": "900", "draggable": true, "x": 19, "y": 298 }, "className": "Text" }, { "attrs": { "fontSize": 14, "text": "秘密", "fill": "#fff0f0", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "900", "draggable": true, "x": 104, "y": 42 }, "className": "Text" }, { "attrs": { "fontSize": 15, "text": "ショック", "fill": "#000000", "fontFamily": "\"Hiragino Sans W3\", \"Hiragino Kaku Gothic ProN\", \"ヒラギノ角ゴ ProN W3\", \"メイリオ\", Meiryo, \"ＭＳ Ｐゴシック\", \"MS PGothic\", sans-serif", "fontStyle": "900", "draggable": true, "x": 19, "y": 71 }, "className": "Text" }, { "attrs": { "text": "$3", "fill": "#000000", "fontFamily": "\"游明朝\", YuMincho, \"Hiragino Mincho ProN W3\", \"ヒラギノ明朝 ProN W3\", \"Hiragino Mincho ProN\", \"HG明朝E\", \"ＭＳ Ｐ明朝\", \"ＭＳ 明朝\", serif", "fontStyle": "400", "draggable": true, "x": 96, "y": 71 }, "className": "Text" }, { "attrs": { "fontSize": 14, "text": "$4", "fill": "#000000", "fontFamily": "\"游明朝\", YuMincho, \"Hiragino Mincho ProN W3\", \"ヒラギノ明朝 ProN W3\", \"Hiragino Mincho ProN\", \"HG明朝E\", \"ＭＳ Ｐ明朝\", \"ＭＳ 明朝\", serif", "fontStyle": "400", "draggable": true, "x": 19, "y": 98, "width": 200 }, "className": "Text" }, { "attrs": { "fontSize": 13, "text": "この狂気を自分から\n明らかにすることはできない", "fill": "#fff0f0", "fontFamily": "\"游明朝\", YuMincho, \"Hiragino Mincho ProN W3\", \"ヒラギノ明朝 ProN W3\", \"Hiragino Mincho ProN\", \"HG明朝E\", \"ＭＳ Ｐ明朝\", \"ＭＳ 明朝\", serif", "fontStyle": "400", "draggable": true, "x": 56, "y": 301, "align": "center" }, "className": "Text" }] }] }] }
    }
    return def
  }
  return JSON.parse(json)
}

const saveImage = (key: string, data: { url: string }, index: number) => {
  const imageKey = `${key}-images`;
  const json = sessionStorage.getItem(imageKey)
  if (!json) {
    sessionStorage.setItem(imageKey, JSON.stringify([data]))
    return
  }
  const images = JSON.parse(json);
  if (index < images.length) {
    images[index] = data
    sessionStorage.setItem(imageKey, JSON.stringify(images))
    return;
  }
  sessionStorage.setItem(imageKey, JSON.stringify(images.push(data)))
}
const saveBackgroundImage = (key: string, data: { url: string }) => {
  sessionStorage.setItem(`${key}-bg-image`, JSON.stringify(data))
}
export const loadBackgroundImage = (key: string, data: any) => {
  const item = sessionStorage.getItem(`${key}-bg-image`)
  console.log(key, item)
  if (item) {
    const url = JSON.parse(item).url;
    if (!url) return;
    const image = new window.Image();
    image.src = url;
    data
      .children[CARD_LAYER_INDEX]
      .children[BACK_GROUND_IMAGE_GROUP_INDEX]
      .children[0].attrs.image = image;
  }

  return
}

export const CARD_LAYER_INDEX = 0;
export const BACK_GROUND_IMAGE_GROUP_INDEX = 0;
export const IMAGE_GROUP_INDEX = 3;


export const createStore = (key: string) => {
  const store = {
    state: reactive({
      data: loadData(key)
    }),
    const: {
      fontFamilies: [
        { label: 'ゴシック', value: family.gothic },
        { label: '明朝', value: family.serif },
        { label: 'Font Awesome', value: family.fontawesome }
      ],
      fontStyles: [
        { label: 'solid', value: faWeight.solid },
        { label: 'regular', value: faWeight.regular },
        { label: 'light', value: faWeight.light }
      ],
      layerIndex: CARD_LAYER_INDEX,
      bgImageGroupIndex: BACK_GROUND_IMAGE_GROUP_INDEX,
      frameGroupIndex: 1,
      lineGroupIndex: 2,
      imageGroupIndex: IMAGE_GROUP_INDEX,
      textGroupIndex: 4,
    },
    addNewText() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.textGroupIndex]
        .children = [...this.state
          .data
          .children[this.const.layerIndex]
          .children[this.const.textGroupIndex]
          .children, defText]
    },
    deleteText() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.textGroupIndex]
        .children.pop()
    },
    addNewFrame() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.frameGroupIndex]
        .children.push(defRect)
    },
    deleteFrame() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.frameGroupIndex]
        .children.pop()
    },
    addNewLine() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.lineGroupIndex]
        .children.push(defLine)
    },
    deleteLine() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.lineGroupIndex]
        .children.pop()
    },
    bgImageUploader(event: { originalEvent: Event, files: File[] }) {
      // console.log('upload', event);
      const reader = new FileReader()
      reader.onloadend = async () => {
        if (reader.result) {
          const url = reader.result.toString()
          const image = new window.Image()
          image.src = url
          saveBackgroundImage(key, { url });

          this.state
            .data
            .children[this.const.layerIndex]
            .children[this.const.bgImageGroupIndex]
            .children[0].attrs.image = image
          return
        }
        console.log('read failed');
      }
      reader.readAsDataURL(event.files[0]);

    },
    setBgImageScale(event: any) {
      const scale = Number(event.target.value)
      if (isNaN(scale)) return;
      const item = this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.bgImageGroupIndex]
        .children[0].attrs;
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.bgImageGroupIndex]
        .children[0].attrs.scaleX = scale
      item.scaleY = scale
    },
    addNewImage() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.imageGroupIndex]
        .children.push(defImage)
    },
    deleteImage() {
      this.state
        .data
        .children[this.const.layerIndex]
        .children[this.const.imageGroupIndex]
        .children.pop()
    },
    setImageScale(event: any, item: any) {
      const scale = Number(event.target.value)
      if (isNaN(scale)) return;
      item.attrs.scaleX = scale
      item.attrs.scaleY = scale
    },
    imageUploader(event: { originalEvent: Event, files: File[] }, item: any, index: number) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        if (reader.result) {
          const url = reader.result.toString()
          const image = new window.Image()
          image.src = url
          item.attrs.image = image
          saveImage(key, { url }, index)
          return
        }
        console.log('read failed');
      }
      reader.readAsDataURL(event.files[0]);
    },
  };
  return store;
}
