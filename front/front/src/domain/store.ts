import type { ContainerConfig } from "konva/lib/Container";
const key = 'sa-edit-konva'

const def = {
  "attrs": { "width": 242, "height": 342 },
  "className": "Stage",
  "children": [
    {
      "attrs": {}, "className": "Layer",
      "children": [{
        "attrs": { "radius": 70, "fill": "red", "stroke": "black", "strokeWidth": 4, "draggable": true }, "className": "Circle"
      },
      { "attrs": { "fontSize": 14, "text": "test", "fill": "black", "draggable": true }, "className": "Text" }]
    }]
}
export const saveData = (data: ContainerConfig) => {
  localStorage.setItem(key, JSON.stringify(data))
}
export const loadData = (): ContainerConfig => {
  const json = localStorage.getItem(key)
  if (!json) return def
  return JSON.parse(json)
}
