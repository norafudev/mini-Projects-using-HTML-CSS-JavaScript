// 获取panel数组
const panelArr = document.querySelectorAll('.panel')

// forEach遍历数组，给每个元素添加监听器，点击元素时切换active类
panelArr.forEach(panel => {
    panel.addEventListener("click", () => {
        // 切换显示状态
        const current = document.querySelector('.active')
        current.classList.remove("active")
        panel.classList.add("active")
    })
});

