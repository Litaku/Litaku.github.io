var text = document.getElementById('hello')

text.addEventListener('mouseover', function(){
    text.innerText="你好，世界!";
})

text.addEventListener('mouseleave', function () {
    text.innerText="Hello World!"
})