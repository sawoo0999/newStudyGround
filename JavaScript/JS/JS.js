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

// $('.tab-button')
//     .eq(0)
//     .on('click', function () {
//         content.removeClass('show');
//         content.eq(0).addClass('show');
//         btn.removeClass('orange');
//         btn.eq(0).addClass('orange');
//     });
