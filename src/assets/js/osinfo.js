/**
 * @author doctorbhatti
 * @email dochassan12@outlook.com
 * @create date 2021-03-15 01:16:52
 * @modify date 2021-03-15 01:16:55
 * @desc [description]
 */

// SOCKET IO
const socket = io()
// SELECT ELEMENTS
const labelRam = document.querySelector('.ram-label')
const progRam = document.querySelector('.ram-bar')
const labelCpu = document.querySelector('.cpu-label')
const progCpu = document.querySelector('.cpu-bar')
const user = document.querySelector('.user')
const os = document.querySelector('.os')

// ON CONNECT EVENT
socket.on('connect', () => {
  console.log('Connected')
})
// ON RAM USAGE EVENT
socket.on('ram-usage', ({ ram, cpu, username, osInfo }) => {
  // SHOW OS USER INFO
  user.innerHTML = `<span>Hello ${username}</span>`
  os.innerHTML = `<span>OS type: ${osInfo === 'Windows_NT' ? 'Microsoft Windows' : osInfo}</span>`
  // Set ram label
  labelRam.innerHTML = `<span>RAM ${ram} % </span>`
  // Set Ram bar
  progRam.value = ram
  // Set cpu label
  labelCpu.innerHTML = `<span>CPU ${cpu === 'aarch64' ? 'arm_v8' : cpu} %</span>`
  // Set cpu bar
  progCpu.value = cpu
  // Check
  if (cpu > 90) {
    notify(cpu)
  }
})
const notify = (info) => {
  // If granted
  navigator.serviceWorker.register('../src/sw.js');
Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('body: `CPU over ${info} %`');
    });
  }
});
}
  