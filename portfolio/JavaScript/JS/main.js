// $.ajax({
//     url: 'store.json',
//     type: 'get',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data[0].price);
//     },
// });

$.get('store.json').done((data) => {
    data.products.forEach((a) => {
        var list = `<div class="col-3 draggable" draggable="true" >
        <img style="width: 100px" src="Image/${a.photo}" />
        <h5>${a.title}</h5>
        <p>${a.brand}</p>
        <p>가격 : ${a.price}</p>
        <button class="btn bg-black" style="color: white">
            담기
        </button>
        </div>`;
        $('.row').append(list);
    });
});

document.querySelector('#check').addEventListener('click', function () {
    var named = document.querySelector('#named').value;
    $.get('store.json').done((data) => {
        $('.row').html('');
        data.products.forEach((a) => {
            if (a.title.indexOf(named) >= 0 || a.brand.indexOf(named) >= 0) {
                var list = `<div class="col-3 draggable" draggable="true" >
                <img src="Image/${a.photo}" />
                <h5>${a.title}</h5>
                <p>${a.brand}</p>
                <p>가격 : ${a.price}</p>
                <button class="btn bg-black" style="color: white">
                    담기
                </button>
                </div>`;
                $('.row').append(list);
            }
        });
    });
});

window.addEventListener('load', function () {
    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.container');

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    containers.forEach((container) => {
        container.addEventListener('dragover', () => {
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable);
        });
    });
});
