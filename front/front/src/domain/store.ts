import type { ContainerConfig } from "konva/lib/Container";
const key = 'sa-edit-konva'

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
            { "className": "Text", "attrs": { "fontSize": 14, "text": "test", "fill": "black", "draggable": true } }
          ],
        }]
    }]
}
export const saveData = (data: string) => {
  console.log('save', data)
  localStorage.setItem(key, data)
}
export const loadData = (): ContainerConfig => {
  return def
  // const json = localStorage.getItem(key)
  // console.log('load', json)
  // if (!json) return def
  // return JSON.parse(json)
}
