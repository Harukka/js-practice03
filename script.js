document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.getElementById('potatoButton').addEventListener('click', function() {
    const numPotatoes = 10; // 降らせる🍠の数
    for (let i = 0; i < numPotatoes; i++) {
        const potato = document.createElement('div');
        potato.innerHTML = '🍠';
        potato.classList.add('potato-rain');
        document.body.appendChild(potato);

        // ランダムな位置とアニメーション速度を設定
        const delay = Math.random() * 3; // 0から3秒のランダムな遅延
        const size = Math.random() * 20 + 10; // 10から30pxのランダムなサイズ
        const startLeft = Math.random() * window.innerWidth; // 画面幅内のランダムな左位置
        const endLeft = Math.random() * window.innerWidth; // 画面幅内のランダムな右位置

        potato.style.fontSize = size + 'px';
        potato.style.left = startLeft + 'px';
        potato.style.animation = `fall ${delay}s linear infinite, leftToRight ${delay}s linear infinite`;
    }

    // 5秒後にアニメーションを停止
    setTimeout(() => {
        const potatoes = document.querySelectorAll('.potato-rain');
        potatoes.forEach(potato => potato.remove());
    }, 5000);
});