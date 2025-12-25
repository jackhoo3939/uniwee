// UniWee网站 - 移动端汉堡菜单交互脚本
// 功能：汉堡菜单展开/收起、自动关闭、防止背景滚动

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // 点击汉堡按钮切换菜单
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // 点击菜单项后自动关闭菜单
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // 点击语言切换按钮不关闭菜单，但如果在移动端则保持打开状态
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        // 点击菜单外部区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });

        // 按ESC键关闭菜单
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // 固定底部栏二维码点击放大功能
    const fixedQR = document.querySelector('.fixed-contact-qr');
    const qrModal = document.getElementById('qrModal');
    const qrModalClose = document.getElementById('qrModalClose');

    if (fixedQR && qrModal) {
        // 点击底部二维码打开模态框
        fixedQR.addEventListener('click', function() {
            qrModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });

        // 点击关闭按钮关闭模态框
        if (qrModalClose) {
            qrModalClose.addEventListener('click', function() {
                qrModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // 点击模态框背景关闭
        qrModal.addEventListener('click', function(e) {
            if (e.target === qrModal) {
                qrModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // 按ESC键关闭二维码模态框
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && qrModal.classList.contains('active')) {
                qrModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
