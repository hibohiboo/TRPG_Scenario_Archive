import type { ContainerConfig } from "konva/lib/Container";
import { reactive } from "vue";
const key = 'sa-edit-konva'
const defaultWidth = 242;
const defaultHeight = 342;
const defText = { "className": "Text", "attrs": { "fontSize": 14, "text": "test", "fill": "black", "draggable": true } }
const baseRect = { "className": "Rect", "attrs": { "width": defaultWidth, "height": defaultHeight, "stroke": "black", "strokeWidth": 1, "cornerRadius": 10 } }
const defRect = { "className": "Rect", "attrs": { "width": 50, "height": 50, "stroke": "black", "strokeWidth": 1, "fill": 'white', "draggable": true } }

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
          "children": [
            baseRect,
            defRect
          ],
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
      textGroupIndex: 1,
      frameGroupIndex: 0,
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
    }
  };
  return store;
}
