import Konva from 'konva'
import { saveData } from '../store';
import type { ContainerConfig } from 'konva/lib/Container'
import type { Stage } from 'konva/lib/Stage';


export const draw = (data: ContainerConfig) => {
  // first we need to create a stage
  var stage: Stage = Konva.Node.create(data, 'konva-container');

  // then create layer
  var layer = stage.find('Layer')
  stage.on('dragend', async (event: any) => {
    data.children = event.currentTarget.children
  })
  layer[0].draw();
  // saveData(stage.toJSON())
}
