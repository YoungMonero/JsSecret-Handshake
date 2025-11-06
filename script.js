document.getElementById('shakebutton').addEventListener('click', () => {
  const numInput = document.getElementById('numberinput')
  const num = parseInt(numInput.value)
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = ''

  if (isNaN(num)) {
    resultDiv.innerHTML = '<p>Please enter a valid number.</p>'
    return
  }

  const actions = []

  if (num & 1) actions.push({ name: 'wink', class: 'wink' });
  if (num & 2) actions.push({ name: 'double blink', class: 'double-blink' })
  if (num & 4) actions.push({ name: 'close your eyes', class: 'close-eyes' })
  if (num & 8) actions.push({ name: 'jump', class: 'jump' })
  if (num & 16) actions.reverse()

  if (actions.length === 0) {
    resultDiv.innerHTML = '<p>No secret handshake for this number </p>'
  } else {
    actions.forEach(action => {
      const badge = document.createElement('div')
      badge.classList.add('handshake', action.class)
      badge.textContent = action.name
      resultDiv.appendChild(badge)
    })
  }
})
