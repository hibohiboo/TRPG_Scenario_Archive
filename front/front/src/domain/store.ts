import type { ContainerConfig } from "konva/lib/Container";
import { reactive } from "vue";
const key = 'sa-edit-konva'

const defText = { "className": "Text", "attrs": { "fontSize": 14, "text": "test", "fill": "black", "draggable": true } }

const def = {
  "className": "Stage",
  "attrs": { "width": 242, "height": 342 },
  "children": [
    {
      "className": "Layer",
      "attrs": {},
      "children": [
        {
          "className": "Group",
          "attrs": { "x": 0, "y": 0 },
          "children": [
            { "attrs": { "radius": 70, "fill": "red", "stroke": "black", "strokeWidth": 4, "draggable": true }, "className": "Circle" }
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
      textGroupIndex: 1
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
