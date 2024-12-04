let button = document.querySelector('#checkBtn')
let message = document.querySelector('.message')
let container = document.querySelector('main')

button.addEventListener('click', () => {
    let text = document.getElementById('textbox').value
    let reverse = text.split('').reverse().join('')

    let forward = text.toLowerCase().replace(/[^a-z0-9]/g, '')
    let backward = reverse.toLowerCase().replace(/[^a-z0-9]/g, '')
    
//Writing a function that checks if the word is a Palindrome or not
//After the user inputs the word, the function takes the original, removes spaces & punctuation marks, create a new string in lowercase
//With another string variable created and reversed characters, comparing the reversed and the new string result the return value 
    if(text === ''){
        alert('Write something in the box')
    }
    else{
        if(forward == backward){
            message.innerHTML = "This word is a Palindrome!"
            message.classList.add('correct')
            message.classList.remove('wrong')
            container.style.height = '300px'
        }
        else{
            message.innerHTML = "This word is not a Palindrome"
            message.classList.add('wrong')
            message.classList.remove('correct')
            container.style.height = '300px'
        }
    }
})