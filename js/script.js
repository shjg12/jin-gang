// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 页面导航切换
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // 初始化页面显示首页
    showPage('home');
    
    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageId = this.getAttribute('href').substring(1);
            
            // 更新导航链接状态
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应页面
            showPage(pageId);
            
            // 关闭移动端菜单
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
            
            // 平滑滚动到页面顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // 显示页面的函数
    function showPage(pageId) {
        // 隐藏所有页面
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }
    
    // 移动端菜单切换
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
    
    // 移动端导航链接点击
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // 更新桌面端导航状态
            const pageId = this.getAttribute('href').substring(1);
            const desktopLink = document.querySelector(`.nav-link[href="#${pageId}"]`);
            if (desktopLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                desktopLink.classList.add('active');
            }
        });
    });
    
    // 产品分类过滤
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 更新按钮状态
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // 过滤产品
                productItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // 联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // 简单验证
            if (!formObject.name || !formObject.phone || !formObject.email || !formObject.message) {
                alert('请填写所有必填字段');
                return;
            }
            
            
            alert('感谢您的咨询！我们会尽快与您联系。');
            
            // 重置表单
            this.reset();
        });
    }
    
    // 回到顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // 监听滚动事件
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // 点击回到顶部
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 语言切换
    const languageSwitchers = document.querySelectorAll('.language-switcher span');
    languageSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function() {
            languageSwitchers.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            
            if (this.textContent === 'EN') {
                alert('Switching to English version...');
            } else {
                alert('切换到中文版本...');
            }
        });
    });
    
    // 图片占位符的随机颜色
    const imgPlaceholders = document.querySelectorAll('.img-placeholder');
    const colors = [
        'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        'linear-gradient(135deg, #0f766e, #14b8a6)',
        'linear-gradient(135deg, #7c3aed, #a855f7)',
        'linear-gradient(135deg, #db2777, #ec4899)',
        'linear-gradient(135deg, #ea580c, #f97316)'
    ];
    
    imgPlaceholders.forEach(placeholder => {
        // 随机选择一个颜色
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        placeholder.style.background = randomColor;
    });
});