import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.css']
})
export class FloatButtonComponent implements OnInit {
  public openMenu: boolean = false;
  isOver = false;

  ngOnInit() {
    // Đảm bảo nút "To Top" được ẩn khi khởi tạo
    const myBtn = document.getElementById("myBtn");
    if (myBtn !== null) {
      myBtn.style.display = "none";
    }

    // Đăng ký sự kiện cuộn chuột với throttle
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100) // Giới hạn tần suất thực thi hàm
    );

    scroll$.subscribe(() => {
      this.handleScroll();
    });
  }

  clickMenu() {
    this.openMenu = !this.openMenu;
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.openMenu = !this.openMenu;
  }

  handleScroll() {
    requestAnimationFrame(() => {
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Hiển thị hoặc ẩn nút "To Top" dựa trên vị trí cuộn so với chiều cao màn hình
      const myBtn = document.getElementById("myBtn");
      if (myBtn !== null) {
        if (scrollPosition > viewportHeight) {
          myBtn.style.display = "block";
        } else {
          myBtn.style.display = "none";
        }
      }
    });
  }

  darkMode() {
    const elementSun = document.getElementById('sun');
    if (elementSun !== null) {
      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        elementSun.classList.add('bi-sun');
        elementSun.classList.remove('bi-moon-fill');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        elementSun.classList.remove('bi-sun');
        elementSun.classList.add('bi-moon-fill');
      }
    }
    this.openMenu = !this.openMenu;
  }
}
