
var all = [
    {
        url: 'https://orjck54836.github.io/aoi/#/admin/main',
        title: 'vue模擬咖啡購物網站',
        img: './img/coffee.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/eYgmEdG',
        title: 'canvas九宮格練習',
        img: './img/canvas1.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/abpomNX',
        title: 'prototype繼承概念練習',
        img: './img/ball.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/oNYrKpL?editors=0100',
        title: 'form表單與ajax練習',
        img: './img/ajax.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/MWbdxQX',
        title: 'animate動畫練習1',
        img: './img/darts.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/MWbLRey',
        title: 'animate動畫練習2',
        img: './img/city.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/BaQEvvE?editors=0110',
        title: 'animate動畫練習3',
        img: './img/monster.png'
    },
    {
        url: 'https://codepen.io/swutybuo/pen/GRrRzWE',
        title: 'canvas基礎',
        img: './img/canvas2.png'
    },
]
var i = '' || 0
window.onload = open
function open(){
    $('#content2').css('display','none')
}

$('.aboutme').click(function(){
    $('#content2').fadeOut(100)
    $('#content1').show()
})

$('.portfolio').click(function(){
    $('#content1').fadeOut(100)
    $('#content2').show(kk = function(){  
        $('#content2').html(
            '<a href="'+all[i].url+'" style="font-size:25px;color:#c31c1c;text-decoration: none">'+all[i].title+'</a><br><img src="'+all[i].img+'" width="80%" height="60%">'
        )
        $('#content2').append('<div style="display:inline-block;margin-top:2vw;cursor: pointer"><i class="fas fa-arrow-circle-left" style="width:80px;font-size:50px"></i><i class="fas fa-arrow-circle-right" style="width:80px;font-size:50px"></i></div>')
        
        $('.fa-arrow-circle-left').click(function(){
            $('.fa-arrow-circle-left').animate({right:'200px'},500)
            if(i>0){
                i--   
            }else if(i==0){
                i==0
            }
            return $('#content2').show(kk)
        })
        $('.fa-arrow-circle-right').click(function(){
            if(i<7){
                i++
            }else{
                i==7
            }
            $('#content2').show(kk)
        })
    })
    
})
