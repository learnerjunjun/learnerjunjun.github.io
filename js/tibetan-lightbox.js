/*
===========================================
藏式图片灯箱 - Tibetan Style Lightbox
===========================================
优化的图片查看器，支持键盘、鼠标和触屏操作
===========================================
*/

class TibetanLightbox {
  constructor() {
    this.isOpen = false;
    this.currentIndex = 0;
    this.images = [];
    this.init();
  }

  init() {
    this.createLightboxDOM();
    this.bindEvents();
    this.initImageDetection();
  }

  // 创建灯箱DOM结构
  createLightboxDOM() {
    const lightboxHTML = `
      <div id="tibetan-lightbox" class="tibetan-lightbox" style="display: none;">
        <div class="tibetan-lightbox-overlay"></div>
        <div class="tibetan-lightbox-container">
          <div class="tibetan-lightbox-header">
            <div class="tibetan-lightbox-counter">
              <span class="current">1</span> / <span class="total">1</span>
            </div>
            <button class="tibetan-lightbox-close" aria-label="关闭">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="tibetan-lightbox-content">
            <button class="tibetan-lightbox-nav tibetan-lightbox-prev" aria-label="上一张">
              <i class="fas fa-chevron-left"></i>
            </button>
            
            <div class="tibetan-lightbox-image-container">
              <img class="tibetan-lightbox-image" src="" alt="">
              <div class="tibetan-lightbox-loading">
                <div class="tibetan-spinner"></div>
                <span>加载中...</span>
              </div>
            </div>
            
            <button class="tibetan-lightbox-nav tibetan-lightbox-next" aria-label="下一张">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div class="tibetan-lightbox-footer">
            <div class="tibetan-lightbox-caption"></div>
            <div class="tibetan-lightbox-actions">
              <button class="tibetan-lightbox-zoom-in" aria-label="放大">
                <i class="fas fa-search-plus"></i>
              </button>
              <button class="tibetan-lightbox-zoom-out" aria-label="缩小">
                <i class="fas fa-search-minus"></i>
              </button>
              <button class="tibetan-lightbox-rotate" aria-label="旋转">
                <i class="fas fa-redo"></i>
              </button>
              <button class="tibetan-lightbox-download" aria-label="下载">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    this.lightbox = document.getElementById('tibetan-lightbox');
    this.overlay = this.lightbox.querySelector('.tibetan-lightbox-overlay');
    this.container = this.lightbox.querySelector('.tibetan-lightbox-container');
    this.image = this.lightbox.querySelector('.tibetan-lightbox-image');
    this.loading = this.lightbox.querySelector('.tibetan-lightbox-loading');
    this.caption = this.lightbox.querySelector('.tibetan-lightbox-caption');
    this.counter = {
      current: this.lightbox.querySelector('.current'),
      total: this.lightbox.querySelector('.total')
    };
    
    // 获取控制按钮
    this.closeBtn = this.lightbox.querySelector('.tibetan-lightbox-close');
    this.prevBtn = this.lightbox.querySelector('.tibetan-lightbox-prev');
    this.nextBtn = this.lightbox.querySelector('.tibetan-lightbox-next');
    this.zoomInBtn = this.lightbox.querySelector('.tibetan-lightbox-zoom-in');
    this.zoomOutBtn = this.lightbox.querySelector('.tibetan-lightbox-zoom-out');
    this.rotateBtn = this.lightbox.querySelector('.tibetan-lightbox-rotate');
    this.downloadBtn = this.lightbox.querySelector('.tibetan-lightbox-download');
    
    // 图片状态
    this.imageState = {
      scale: 1,
      rotation: 0,
      translateX: 0,
      translateY: 0
    };
  }

  // 绑定事件
  bindEvents() {
    // 关闭事件
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
    
    // 导航事件
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    
    // 缩放和旋转事件
    this.zoomInBtn.addEventListener('click', () => this.zoomIn());
    this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
    this.rotateBtn.addEventListener('click', () => this.rotate());
    this.downloadBtn.addEventListener('click', () => this.download());
    
    // 键盘事件
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      
      switch(e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
        case '+':
        case '=':
          this.zoomIn();
          break;
        case '-':
          this.zoomOut();
          break;
        case 'r':
        case 'R':
          this.rotate();
          break;
      }
    });
    
    // 鼠标滚轮缩放
    this.image.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });
    
    // 触屏手势支持
    this.addTouchSupport();
  }

  // 添加触屏支持
  addTouchSupport() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartDistance = 0;
    let lastTouchEnd = 0;
    
    this.image.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        touchStartDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
      }
    }, { passive: true });
    
    this.image.addEventListener('touchmove', (e) => {
      e.preventDefault();
      
      if (e.touches.length === 2) {
        const currentDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
        const scale = currentDistance / touchStartDistance;
        this.setImageScale(this.imageState.scale * scale);
      }
    });
    
    this.image.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // 双击缩放
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          this.toggleZoom();
        }
        lastTouchEnd = now;
        
        // 滑动切换
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            this.prev();
          } else {
            this.next();
          }
        }
      }
    });
  }

  // 获取触点间距离
  getTouchDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // 初始化图片检测
  initImageDetection() {
    // 为文章内容中的图片添加点击事件
    this.updateImageLinks();
    
    // 监听DOM变化，为动态添加的图片绑定事件
    const observer = new MutationObserver(() => {
      this.updateImageLinks();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // 更新图片链接
  updateImageLinks() {
    const selectors = [
      '#article-container img',
      '.gallery-container img',
      '.flink-list img',
      '.recent-post-item img'
    ];
    
    selectors.forEach(selector => {
      const images = document.querySelectorAll(selector);
      images.forEach(img => {
        if (!img.dataset.lightbox) {
          img.dataset.lightbox = 'true';
          img.style.cursor = 'pointer';
          img.addEventListener('click', (e) => {
            e.preventDefault();
            this.openFromElement(img);
          });
        }
      });
    });
  }

  // 从图片元素打开灯箱
  openFromElement(img) {
    this.images = this.getImageGroup(img);
    this.currentIndex = this.images.findIndex(item => item.src === img.src);
    this.open();
  }

  // 获取图片组
  getImageGroup(clickedImg) {
    const container = clickedImg.closest('#article-container, .gallery-container, .flink-list');
    if (container) {
      const imgs = container.querySelectorAll('img[data-lightbox]');
      return Array.from(imgs).map(img => ({
        src: img.src || img.dataset.src,
        alt: img.alt || '',
        caption: img.title || img.alt || ''
      }));
    }
    
    return [{
      src: clickedImg.src || clickedImg.dataset.src,
      alt: clickedImg.alt || '',
      caption: clickedImg.title || clickedImg.alt || ''
    }];
  }

  // 打开灯箱
  open() {
    this.isOpen = true;
    this.lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // 添加动画类
    setTimeout(() => {
      this.lightbox.classList.add('active');
    }, 10);
    
    this.loadImage();
    this.updateUI();
  }

  // 关闭灯箱
  close() {
    this.isOpen = false;
    this.lightbox.classList.remove('active');
    
    setTimeout(() => {
      this.lightbox.style.display = 'none';
      document.body.style.overflow = '';
      this.resetImageState();
    }, 300);
  }

  // 加载图片
  loadImage() {
    if (!this.images[this.currentIndex]) return;
    
    const currentImg = this.images[this.currentIndex];
    this.loading.style.display = 'flex';
    this.image.style.display = 'none';
    
    const img = new Image();
    img.onload = () => {
      this.image.src = img.src;
      this.image.alt = currentImg.alt;
      this.loading.style.display = 'none';
      this.image.style.display = 'block';
      this.resetImageState();
    };
    
    img.onerror = () => {
      this.loading.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>图片加载失败</span>';
    };
    
    img.src = currentImg.src;
  }

  // 更新UI
  updateUI() {
    // 更新计数器
    this.counter.current.textContent = this.currentIndex + 1;
    this.counter.total.textContent = this.images.length;
    
    // 更新说明文字
    this.caption.textContent = this.images[this.currentIndex]?.caption || '';
    
    // 更新导航按钮
    this.prevBtn.style.display = this.images.length > 1 ? 'block' : 'none';
    this.nextBtn.style.display = this.images.length > 1 ? 'block' : 'none';
    
    // 更新下载链接
    this.downloadBtn.onclick = () => this.download();
  }

  // 上一张
  prev() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.loadImage();
    this.updateUI();
  }

  // 下一张
  next() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.loadImage();
    this.updateUI();
  }

  // 放大
  zoomIn() {
    this.setImageScale(this.imageState.scale * 1.2);
  }

  // 缩小
  zoomOut() {
    this.setImageScale(this.imageState.scale / 1.2);
  }

  // 设置图片缩放
  setImageScale(scale) {
    this.imageState.scale = Math.max(0.1, Math.min(5, scale));
    this.updateImageTransform();
  }

  // 旋转
  rotate() {
    this.imageState.rotation = (this.imageState.rotation + 90) % 360;
    this.updateImageTransform();
  }

  // 切换缩放
  toggleZoom() {
    if (this.imageState.scale === 1) {
      this.setImageScale(2);
    } else {
      this.resetImageState();
    }
  }

  // 重置图片状态
  resetImageState() {
    this.imageState = {
      scale: 1,
      rotation: 0,
      translateX: 0,
      translateY: 0
    };
    this.updateImageTransform();
  }

  // 更新图片变换
  updateImageTransform() {
    const { scale, rotation, translateX, translateY } = this.imageState;
    this.image.style.transform = 
      `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`;
  }

  // 下载图片
  download() {
    const currentImg = this.images[this.currentIndex];
    if (!currentImg) return;
    
    const link = document.createElement('a');
    link.href = currentImg.src;
    link.download = currentImg.alt || 'image';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// 添加样式
const lightboxStyles = `
<style>
.tibetan-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tibetan-lightbox.active {
  opacity: 1;
}

.tibetan-lightbox-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.tibetan-lightbox-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(215, 48, 39, 0.3);
  border: 2px solid var(--tibetan-copper);
}

.tibetan-lightbox-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(90deg, var(--tibetan-red-primary), var(--tibetan-copper));
  color: white;
}

.tibetan-lightbox-counter {
  font-weight: 600;
  font-size: 0.9em;
}

.tibetan-lightbox-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-small);
  transition: var(--transition-fast);
}

.tibetan-lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.tibetan-lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 300px;
  background: var(--bg-color-primary);
}

.tibetan-lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(215, 48, 39, 0.8);
  border: none;
  color: white;
  padding: var(--spacing-md);
  font-size: 1.5em;
  cursor: pointer;
  border-radius: var(--border-radius-medium);
  transition: var(--transition-fast);
  z-index: 10;
}

.tibetan-lightbox-nav:hover {
  background: var(--tibetan-red-primary);
  transform: translateY(-50%) scale(1.1);
}

.tibetan-lightbox-prev {
  left: var(--spacing-md);
}

.tibetan-lightbox-next {
  right: var(--spacing-md);
}

.tibetan-lightbox-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  min-height: 400px;
  position: relative;
}

.tibetan-lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: grab;
}

.tibetan-lightbox-image:active {
  cursor: grabbing;
}

.tibetan-lightbox-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-color-secondary);
}

.tibetan-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color-light);
  border-top: 3px solid var(--tibetan-red-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.tibetan-lightbox-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--bg-color-secondary);
  border-top: 1px solid var(--border-color-light);
}

.tibetan-lightbox-caption {
  flex: 1;
  color: var(--text-color-secondary);
  font-size: 0.9em;
}

.tibetan-lightbox-actions {
  display: flex;
  gap: var(--spacing-xs);
}

.tibetan-lightbox-actions button {
  background: none;
  border: 1px solid var(--border-color-light);
  color: var(--text-color-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition-fast);
}

.tibetan-lightbox-actions button:hover {
  background: var(--tibetan-red-primary);
  color: white;
  border-color: var(--tibetan-red-primary);
}

@media (max-width: 768px) {
  .tibetan-lightbox-container {
    max-width: 95%;
    max-height: 95%;
  }
  
  .tibetan-lightbox-nav {
    padding: var(--spacing-sm);
    font-size: 1.2em;
  }
  
  .tibetan-lightbox-header,
  .tibetan-lightbox-footer {
    padding: var(--spacing-xs) var(--spacing-sm);
  }
  
  .tibetan-lightbox-actions {
    gap: var(--spacing-xs);
  }
  
  .tibetan-lightbox-actions button {
    padding: var(--spacing-xs);
    font-size: 0.8em;
  }
}
</style>
`;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 插入样式
  document.head.insertAdjacentHTML('beforeend', lightboxStyles);
  
  // 创建灯箱实例
  window.tibetanLightbox = new TibetanLightbox();
});

// 导出供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TibetanLightbox;
}
