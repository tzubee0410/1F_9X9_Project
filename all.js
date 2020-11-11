// 立即函式
(function () {
    //先拿到要寫進去的區塊
    const numBlock = document.querySelector('.js-numBlockPosition');
    let box = '';
    //利用for迴圈運算
    for (let i = 2; i <= 9; i++) {
        let str = '';
        for (let j = 1; j <= 9; j++) {
            str += ` <li class="numBlock__item"><p class="numBlock__number">${i}X${j} = ${i * j}</p></li>`
        }
        box += ` 
        <div class="col-md-6 col-xl-4  h-mb-40">
            <div class="numBlock">
            <ul class="numBlock__list">
                <li class="numBlock__item"><h2 class="numBlock__listTitle">${i}</h2></li>
                <li class="numBlock__item"><p class="numBlock__number">${str}</p></li>
            </ul>
            </div>
        </div>
        `

    }

    numBlock.outerHTML=box;

})();