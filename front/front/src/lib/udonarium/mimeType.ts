// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MimeType {
  const types = {
    gif: 'image/gif',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    jpe: 'image/jpeg',
    png: 'image/png',
    apng: 'image/apng',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    svgz: 'image/svg+xml',
    ico: 'image/x-icon',
    cur: 'image/x-icon',
    bmp: 'image/bmp',
    html: 'text/html',
    htm: 'text/html',
    shtml: 'text/html',
    xml: 'text/xml',
    yml: 'text/yaml',
    yaml: 'text/yaml',
    json: 'application/json',
    map: 'application/json',
    zip: 'application/zip',
    mp3: 'audio/mp3',
    wav: 'audio/wav',
    m4a: 'audio/aac',
    ogg: 'audio/ogg',
    mpg: 'video/mpeg',
    mpeg: 'video/mpeg',
    mp4: 'video/mp4',
    webm: 'video/webm',
  } as const
  type TypesKeys = keyof (typeof types)
  const isTypesKey = (a: string): a is TypesKeys => types.hasOwnProperty(a)

  export function type(fileName: string): string {
    const ext = fileName.replace(/.*[./\\]/, '').toLowerCase()
    return isTypesKey(ext) ? types[ext] : ''
  }

  export function extension(mimeType: string): string {
    for (const key in types) {
      if (isTypesKey(key) && types[key] === mimeType) {
        return key
      }
    }
    return mimeType.split('/')[1]
  }
}
