import format from 'date-fns/format'
import { calcSHA256Async } from '@/lib/udonarium/FileReaderUtil'
import { MimeType } from '@/lib/udonarium/mimeType'
import {
  FileArchiver,
  convertDocToXML,
  createDoc,
  createElement,
} from '@/lib/fileArchiver'
import { DATETIME_FILE_FORMAT } from '@/lib/constants'

const getCanvasBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
  new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject('error')))
interface ZipArgs {
  list: string[],
  size: number
}
export const createZip = async (args: ZipArgs) => {
  const files = await createCardStacks(args)

  FileArchiver.instance.save(files, format(new Date(), DATETIME_FILE_FORMAT))
}

const backId = 'template-card-back';
const frontId = 'template-card-front';


const createCardStacks = async (args: ZipArgs) => {
  const files: File[] = []


  const mappedList = await Promise.all(
    args.list.map(async (c, ci) => {
      const target = document.querySelector(
        `#${backId}-${ci} canvas`,
      ) as HTMLCanvasElement

      const blob = await getCanvasBlob(target)
      const back = await calcSHA256Async(blob)
      files.push(
        new File(
          [blob],
          back + '.' + MimeType.extension(blob.type),
          {
            type: blob.type,
          },
        ),
      )

      const target2 = document.querySelector(
        `#${frontId}-${ci} canvas`,
      ) as HTMLCanvasElement
      const blob2 = await getCanvasBlob(target2)
      const front = await calcSHA256Async(blob2)
      files.push(
        new File(
          [blob2],
          front + '.' + MimeType.extension(blob2.type),
          {
            type: blob2.type,
          },
        ),
      )
      return { back, front }
    }),

  )

  files.push(
    createCardStack(`カードリスト`, mappedList, args),
  )
  return files
}

type Card = { back: string, front: string }

const createCardStack = (
  stackName: string,
  cards: Card[],
  args: ZipArgs
) => {
  const doc = createDoc()
  const cardStackWrapper = createElement(doc, 'card-stack', [
    ['location.name', 'table'],
    ['location.x', '50'],
    ['location.y', '500'],
    ['posZ', '0'],
    ['rotate', '0'],
    ['roll', '0'],
    ['zindex', '0'],
    ['state', '0'],
    ['isShowTotal', 'true'],
  ])

  cardStackWrapper.appendChild(createCardStackElment(doc, stackName))
  cardStackWrapper.appendChild(createCardRoot(doc, cards, args))
  doc.appendChild(cardStackWrapper)
  const sXML = convertDocToXML(doc)
  return new File([sXML], `${stackName}.xml`, { type: 'text/plain' })
}

const createCardStackElment = (doc: Document, stackName: string) => {
  // #card-stack
  const cardStack = createElement(doc, 'data', [['name', 'card-stack']])
  const image = createElement(doc, 'data', [['name', 'image']])
  const imageIdentifier = createElement(doc, 'data', [
    ['name', 'imageIdentifier'],
    ['type', 'image'],
  ])
  const common = createElement(doc, 'data', [['name', 'common']])
  const name = createElement(doc, 'data', [['name', 'name']], stackName)
  const detail = createElement(doc, 'data', [['name', 'detail']])
  image.appendChild(imageIdentifier)
  common.appendChild(name)
  cardStack.appendChild(image)
  cardStack.appendChild(common)
  cardStack.appendChild(detail)

  return cardStack
}

const createCardRoot = (
  doc: Document,
  cards: Card[],
  args: ZipArgs
) => {
  const cardRoot = createElement(doc, 'node', [['name', 'cardRoot']])
  cards.forEach((card) =>
    cardRoot.appendChild(createCard(doc, card, args)),
  )
  return cardRoot
}
const createCard = (
  doc: Document,
  card: Card,
  args: ZipArgs
) => {
  const cardWrapper = createElement(doc, 'card', [
    ['location.name', 'table'],
    ['location.x', '50'],
    ['location.y', '500'],
    ['posZ', '0'],
    ['rotate', '0'],
    ['roll', '0'],
    ['zindex', '0'],
    ['state', '0'],
  ])
  const cardData = createElement(doc, 'data', [['name', 'card']])
  const image = createElement(doc, 'data', [['name', 'image']])
  const imageIdentifier = createElement(doc, 'data', [
    ['name', 'imageIdentifier'],
    ['type', 'image'],
  ])
  const front = createElement(
    doc,
    'data',
    [
      ['name', 'front'],
      ['type', 'image'],
    ],
    card.front,
  )
  const back = createElement(
    doc,
    'data',
    [
      ['name', 'back'],
      ['type', 'image'],
    ],
    card.back,
  )
  image.appendChild(imageIdentifier)
  image.appendChild(front)
  image.appendChild(back)
  const common = createElement(doc, 'data', [['name', 'common']])
  const name = createElement(doc, 'data', [['name', 'name']], 'カード')
  const size = createElement(doc, 'data', [['name', 'size']], `${args.size}`)
  const detail = createElement(doc, 'data', [['name', 'detail']])
  image.appendChild(imageIdentifier)
  common.appendChild(name)
  common.appendChild(size)
  cardData.appendChild(image)
  cardData.appendChild(common)
  cardData.appendChild(detail)
  cardWrapper.appendChild(cardData)
  return cardWrapper
}
