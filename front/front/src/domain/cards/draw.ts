import Konva from 'konva'
import { saveData } from './store';
import type { ContainerConfig } from 'konva/lib/Container'
import type { Stage } from 'konva/lib/Stage';


export const draw = (key: string, data: ContainerConfig, updateData: (d: ContainerConfig) => void) => {
  const stage: Stage = Konva.Node.create(data, key);
  const layer = stage.find('Layer')
  stage.on('dragend', async (event: any) => {
    updateData(event.currentTarget)
  })
  layer[0].draw();
  saveData(key, stage.toJSON())
}
