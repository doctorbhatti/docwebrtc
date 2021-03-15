/**
 * @author doctorbhatti
 * @email dochassan12@outlook.com
 * @create date 2021-03-15 01:17:34
 * @modify date 2021-03-15 02:07:03
 * @desc [description]
 */
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const stream = require('./ws/stream')
const path = require('path')
const favicon = require('serve-favicon')
const osUtils = require('node-os-utils')
const os = require('os')
port = process.env.PORT || 3003
app.set('view engine', 'ejs')

// CPU USAGE
const cpu = osUtils.cpu
// USER and OS
const username = os.userInfo([{ encoding: 'buffer' }]).username
const osInfo = os.type()

app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/stats', function (req, res, html) {
  res.sendFile(path.join(__dirname + '/stats.html'))
})

app.get('/about', function (req, res, html) {
  res.sendFile(path.join(__dirname + '/about.html'))
})


app.get('/dotect', function (req, res, html) {
  res.sendFile(path.join(__dirname + '/dotect.html'))
})

app.get('/osinfo', (req, res) => {
  res.render(__dirname + '/osinfo.ejs')
})
// SOCKET IO
io.on('connection', socket => {
  console.log(`${socket.id} connected`)
  // USE SET INTERVAL TO CHECK RAM USAGE EVERY SECOND
  setInterval(() => {
    // RAM USED tot - free
    const ramUsed = Math.round(os.totalmem()) - Math.round(os.freemem())
    // RAM percentage
    const ram = (ramUsed * 100 / Math.round(os.totalmem())).toFixed(0)
    // console.log(ram + '%')
    // CPU USAGE PERCENTAGE
    cpu.usage().then(cpu => socket.emit('ram-usage', { ram, cpu, username, osInfo }))
  }, 1000)
})

io.of('/stream').on('connection', stream)

server.listen(port, () => {
  console.log(`Server beating 💓 on port: ${port}`)
})
