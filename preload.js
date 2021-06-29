const { uIOhook, UiohookKey }  = require('uiohook-napi')

uIOhook.on('keydown', (e) => {
 
    console.log("pressing Detected")
  
  if (e.keycode === UiohookKey.Escape) {
    process.exit(0)
  }
})

uIOhook.start()