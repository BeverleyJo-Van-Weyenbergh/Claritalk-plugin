document.getElementById('yes').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://claritalk.com' })
  window.close()
})

document.getElementById('no').addEventListener('click', () => {
  window.close()
})
