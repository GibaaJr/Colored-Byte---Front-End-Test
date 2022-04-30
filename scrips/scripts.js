const addComments = document.getElementById("AddCommentBox");
const comments = document.getElementsByClassName('comments')[0]
const postBtn = document.getElementById('postBtn')



function clearField() {
    addComments.value = '';
}

postBtn.addEventListener('click', function postComment() {
    let output = addComments.value;
    if (output == 0) {
        console.log('No commentary!')
    } else {

        var commentDivElement = document.createElement('div');
        commentDivElement.classList.add('comments')
        var commentPElement = document.createElement('p')
        var commentBElement = document.createElement('b')
        commentPElement.appendChild(commentBElement)
        commentBElement.innerHTML = ('Comment ')
        commentPElement.innerHTML = (`${output}`)
        commentDivElement.appendChild(commentBElement)
        commentDivElement.appendChild(commentPElement)
        comments.appendChild(commentDivElement)

        clearField()

    }
})


// Heart Animation

const heartIcon = document.getElementById('icon-heart');
const body = document.getElementById('body')

heartIcon.addEventListener('click', function changeHeart() {
    if (heartIcon.classList == 'iconHeart' && body.classList.contains('light-mode')) {
        heartIcon.classList.remove('iconHeart')
        heartIcon.classList.add('iconHeartColored')
        heartIcon.src = './assets/icons/heart_colored.png'
    } else if (heartIcon.classList == 'iconHeartColored' && body.classList.contains('light-mode')){
        heartIcon.classList.remove('iconHeartColored')
        heartIcon.classList.add('iconHeart')
        heartIcon.src = './assets/icons/heart.png'
    } else if (heartIcon.classList == 'iconHeart' && body.classList.contains('dark-mode')) {
        heartIcon.classList.remove('iconHeart')
        heartIcon.classList.add('iconHeartColored')
        heartIcon.src = './assets/icons/heart_colored.png'
    } else {
        heartIcon.classList.remove('iconHeartColored')
        heartIcon.classList.add('iconHeart')
        heartIcon.src = './assets/icons/heart-white.png'
    }
    
})



// Dark and Light mode

const mode = document.getElementById('dark-mode');
const containerSelector = document.getElementById('container');
const chatIcon =  document.getElementById('icon-chat');
const sendIcon =  document.getElementById('icon-send');

mode.addEventListener('click', function changeMode() {
    if (body.classList == 'light-mode') {
        containerSelector.style.backgroundColor = '#1C1C1C'
        containerSelector.style.color = '#FFFFFF'
        body.classList.remove('light-mode')
        body.classList.add('dark-mode')
        heartIcon.src = './assets/icons/heart-white.png'
        chatIcon.src = './assets/icons/chat-white.png'
        sendIcon.src = './assets/icons/send-white.png'
        mode.src = './assets/icons/light-mode.png'
        document.querySelector('.containerAddComment').style.border = '1px solid white'
        document.querySelector('.containerAddComment').style.backgroundColor = '#1C1C1C'
        document.querySelector('#addComment textarea').style.color = 'white'
    } else {
        containerSelector.style.backgroundColor = '#FCFCFC'
        containerSelector.style.color = '#000000'
        body.classList.remove('dark-mode')
        body.classList.add('light-mode')
        heartIcon.src = './assets/icons/heart.png'
        chatIcon.src = './assets/icons/chat.png'
        sendIcon.src = './assets/icons/send.png'
        mode.src = './assets/icons/sleep-mode.png'
        document.querySelector('.containerAddComment').style.border = 'none'
        document.querySelector('.containerAddComment').style.backgroundColor = '#F1F1F1'
        document.querySelector('#addComment textarea').style.color = 'black'
    }


})