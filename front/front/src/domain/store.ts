import type { ContainerConfig } from "konva/lib/Container";
import { reactive } from "vue";
const key = 'sa-edit-konva'
const defaultWidth = 242;
const defaultHeight = 342;
const defText = { "className": "Text", "attrs": { "fontSize": 14, "text": "test", "fill": "black", "draggable": true } }
const baseRect = { "className": "Rect", "attrs": { "width": defaultWidth, "height": defaultHeight, "stroke": "black", "strokeWidth": 1, "cornerRadius": 10 } }
const defRect = { "className": "Rect", "attrs": { "width": 50, "height": 50, "stroke": "black", "strokeWidth": 1, "fill": 'white', "draggable": true } }
const defImage = { "className": "Image", "attrs": { "scaleX": 1.0, "scaleY": 1.0, "draggable": true } }
const def = {
  "className": "Stage",
  "attrs": { "width": defaultWidth, "height": defaultHeight },
  "children": [
    {
      "className": "Layer",
      "attrs": {},
      "children": [
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [{ "className": "Image", "attrs": { "scaleX": 1.0, "scaleY": 1.0 } }],
        },
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            baseRect,
            defRect
          ],
        },
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [],
        },
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            defText
          ],
        }]
    }]
}
export const saveData = (data: string) => {
  console.log('save', data)
  localStorage.setItem(key, data)
}
export const loadData = (): ContainerConfig => {
  const json = localStorage.getItem(key)
  console.log('load', json)
  if (!json) return def
  return JSON.parse(json)
}

export const createStore = () => {
  const store = {
    state: reactive({
      data: loadData()
    }),
    const: {
      layerIndex: 0,
      bgImageGroupIndex: 0,
      frameGroupIndex: 1,
      imageGroupIndex: 2,
      textGroupIndex: 3,
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
    bgImageUploader(event: { originalEvent: Event, files: File[] }) {
      // console.log('upload', event);
      const reader = new FileReader()
      reader.onloadend = async () => {
        if (reader.result) {
          const url = reader.result.toString()
          const image = new window.Image()
          image.src = url

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
      console.log('set', event.target.value)
      const scale = Number(event.target.value)
      if (isNaN(scale)) return;
      console.log('scale', scale)
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
      console.log('scale', item)
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
    imageUploader(event: { originalEvent: Event, files: File[] }, item: any) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        if (reader.result) {
          const url = reader.result.toString()
          const image = new window.Image()
          image.src = url
          item.attrs.image = image
          return
        }
        console.log('read failed');
      }
      reader.readAsDataURL(event.files[0]);
    },
  };
  return store;
}
