// 获取对象
const circles = document.querySelectorAll('.circle')
const progressLine = document.querySelector('.progress-line')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

// 将当前active类的元素索引设置为1
let currentActive = 1

function update() {
    // 比CurrentActive索引小的元素都要加上active（即颜色变蓝）；大的则移除active（即变灰）
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // 蓝色进度条的宽度百分数 = (active的元素数-1) / (总元素数-1)，注意单位 * 100 + '%'
    const actives = document.querySelectorAll('.active')
    progressLine.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // 当currentActive==1/4，则禁用prev/next按钮
    if (currentActive == 1) {
        prev.disabled = true
    } else if (currentActive == 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

//点击next按钮绑定回调函数
next.addEventListener('click', () => {
    // 当前active元素的索引最大不能超过数组长度
    if (currentActive < circles.length) {
        currentActive++
    } else {
        currentActive = circles.length
    }

    update()
});

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--
    } else {
        currentActive = 1
    }

    update()
});