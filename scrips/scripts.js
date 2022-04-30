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

heartIcon.addEventListener('click', function changeHeart() {
    if (heartIcon.classList == 'iconHeart') {
        heartIcon.classList.remove('iconHeart')
        heartIcon.classList.add('iconHeartColored')
        heartIcon.src = './assets/icons/heart_colored.png'
    } else {
        heartIcon.classList.remove('iconHeartColored')
        heartIcon.classList.add('iconHeart')
        heartIcon.src = './assets/icons/heart.png'
    }
    
})