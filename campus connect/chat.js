const wajihaSelectorBtn = document.querySelector('#wajiha-selector')
const fahmidaSelectorBtn = document.querySelector('#fahmida-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const chatMessageElement = (message) => `
<div class="message ${message.sender === 'Wajiha' ? 'pink-bg' : 'blue-bg'}">
    <div class"message-sender">${message.sender}</div>
    <div class="messsage-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
    </div>
`
let messageSender = 'Wajiha'
const updateMessageSender = (name) => {
  messageSender = name
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here, ${messageSender}...`
  if (name === 'Wajiha') {
    wajihaSelectorBtn.classList.add('active-person')
    fahmidaSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Fahmida') {
    fahmidaSelectorBtn.classList.add('active-person')
    wajihaSelectorBtn.classList.remove('active-person')
  }
}

wajihaSelectorBtn.onclick = () => updateMessageSender('Wajiha')
fahmidaaSelectorBtn.onclick = () => updateMessageSender('Fahmida')

const sendMessage = (e) => {
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-UK', {hour: 'numeric', minute: 'numeric', hour12: true})
    const message = {
        sender: '',
        text: chatInput.value,
        timestamp,
    }
}