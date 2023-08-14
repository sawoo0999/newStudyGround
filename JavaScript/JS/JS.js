//버튼0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼0에 orange 클래스명 추가
// 모든 div0에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

var btn = $('.tab-button');
var content = $('.tab-content');
var count = document.getElementsByClassName('tab-button').length;

// for (let i = 0; i < count; i++) {
//     tapopen(i);
// }

$('.list').click(function (e) {
    tapopen(parseInt(e.target.dataset.id));
});

function tapopen(구멍) {
    $('.tab-button')
        .eq(구멍)
        .on('click', function () {
            content.removeClass('show');
            content.eq(구멍).addClass('show');
            btn.removeClass('orange');
            btn.eq(구멍).addClass('orange');
        });
}

var car = { name: '소나타', price: [50000, 3000, 4000], color: 'white' };

// document.querySelector('.name').innerHTML = car.name;
// document.querySelector('.price').innerHTML = car.price[0];

var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
];

for (let i = 0; i < 3; i++) {
    card(i);
}

function card(구멍) {
    var title = document.querySelectorAll('.card-body h5')[구멍];
    var price = document.querySelectorAll('.card-body p')[구멍];
    title.innerHTML = products[구멍].title;
    price.innerHTML = '가격 : ' + products[구멍].price;
}

// $('.tab-button')
//     .eq(0)
//     .on('click', function () {
//         content.removeClass('show');
//         content.eq(0).addClass('show');
//         btn.removeClass('orange');
//         btn.eq(0).addClass('orange');
//     });
