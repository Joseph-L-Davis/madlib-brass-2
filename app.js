// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

//inputs
const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')
const input3 = document.getElementById('input-3')
const input4 = document.getElementById('input-4')
const input5 = document.getElementById('input-5')
const input6 = document.getElementById('input-6')
const input7 = document.getElementById('input-7')
const input8 = document.getElementById('input-8')


const entry1 = document.getElementById('entry-1')
const entry2 = document.getElementById('entry-2')
const entry3 = document.getElementById('entry-3')
const entry4 = document.getElementById('entry-4')
const entry5 = document.getElementById('entry-5')
const entry6 = document.getElementById('entry-6')
const entry7 = document.getElementById('entry-7')
const entry8 = document.getElementById('entry-8')
const entry9 = document.getElementById('entry-9')

const spookyButton = document.getElementById('spooky-button')



//Event Listener

spookyButton.addEventListener('click', () => {
    entry1.textContent = input1.value;
    entry2.textContent = input2.value;
    entry3.textContent = input3.value;
    entry4.textContent = input4.value;
    entry5.textContent = input5.value;
    entry6.textContent = input6.value;
    entry7.textContent = input7.value;
    entry8.textContent = input5.value;
    entry9.textContent = input8.value;
    
    
})
