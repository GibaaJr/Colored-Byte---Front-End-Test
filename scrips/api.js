var pictures
const slideSwiper = document.getElementById('swiper-images');

function getLink(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}



function images() {
    var data = getLink('https://picsum.photos/v2/list?page=2&limit=30');
    pictures = JSON.parse(data);
    var count = Object.keys(pictures).length;
    for (i = 0; i < count; i++) {
        pictures[i].width = 525;
        pictures[i].height = 325;
    }
}

function imageUrl() {
    images();
    var finalImages = "";
    
    for (i = 0; i < 5; i++) {
        finalImages = `https://picsum.photos/id/${pictures[i].id}/${pictures[i].width}/${pictures[i].height}`
        
        
        let divElement = document.createElement('div')
        divElement.classList.add('swiper-slide')
        slideSwiper.appendChild(divElement)
        var setImage = document.getElementById('swiper-images').getElementsByClassName('swiper-slide')[i];
        
        setImage.innerHTML = (`<img src=${finalImages} />`)
    }
}

imageUrl();


