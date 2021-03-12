let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/space-shuttle.png') {
      myImage.setAttribute('src','images/astronaut.jpg');
    } else {
      myImage.setAttribute('src','images/space-shuttle.png');
    }
}