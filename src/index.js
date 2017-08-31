import hashReplace from 'hash-replace'

const replace = hashReplace('contenthash')

export default class ContentHashPlugin  {
  apply (compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin(
        'html-webpack-plugin-after-emit',
        ({
          outputName,
          html
        }, callback) => {

          const assets = compilation.assets

          const chunk = assets[outputName]
          delete assets[outputName]

          const filename = replace(outputName, null, html.source())
          assets[filename] = chunk
          callback()
        }
      )
    })
  }
}
