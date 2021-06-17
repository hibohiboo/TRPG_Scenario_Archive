import Konva from 'konva'

const canvasWidth = 242
const canvasHight = 342

const createItems = (value: string) => {
  return [
    new Konva.Circle({
      x: 100 / 2,
      y: 100 / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    }),
    new Konva.Text({
      x: 100,
      y: 100,
      fontSize: 14,
      text: value
    })
  ]
}
export const draw = (value: string, points: any, test: any) => {
  // first we need to create a stage
  var stage = new Konva.Stage({
    container: 'konva-container',   // id of container <div>
    width: canvasWidth,
    height: canvasHight
  });

  // then create layer
  var layer = new Konva.Layer();



  // add the shape to the layer
  createItems(value).forEach((item, i) => {
    item.draggable(true);
    item.on('dragend', (event) => {
      const { x, y } = event.target.attrs
      console.log('x', x);
      console.log('y', y);
      points.value[i] = { x, y }
      test.value = x
    });
    layer.add(item)
  })


  // add the layer to the stage
  stage.add(layer);

  // draw the image
  layer.draw();
}