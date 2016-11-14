module.exports = function(config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
    files: [
      'main/webapp/js/*.js',
      'test/*.js'
    ],
    autoWatch: true,
    exclude: [
    ],
    colors: true    
  })
}