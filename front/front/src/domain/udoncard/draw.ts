import Konva from 'konva'
import type { ContainerConfig } from 'konva/lib/Container'


export const draw = (data: ContainerConfig) => {
  // first we need to create a stage
  var stage = Konva.Node.create(data, 'konva-container');

  // then create layer
  var layer = stage.find('Layer')
  stage.on('dragend', (event: { currentTarget: ContainerConfig }) => {
    console.log(data);
    console.log(event.currentTarget)
    data.children = event.currentTarget.children
  })
  layer[0].draw();
}
