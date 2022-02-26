import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  constructor() { }
  body = <HTMLBodyElement>document.querySelector('body')
  ngOnInit(): void {
    this.toggleMenu();
    this.toggleMode();
    this.toggleActive();
    this.toggleDropdown();
  }

  toggleMenu() {
    const sidebar = <HTMLElement>document.querySelector('nav'),
      toggle = <Element>document.querySelector(".toggle"),
      searchBtn = <Element>document.querySelector(".search-box");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    });
  }

  toggleMode() {
    const modeSwitch = <Element>document.querySelector(".toggle-switch"),
      modeText = <HTMLElement>document.querySelector(".mode-text");
    modeSwitch.addEventListener("click", () => {
      this.body.classList.toggle("dark");

      modeText.innerText = this.body.classList.contains("dark") ? "Light mode" : "Dark mode";
    });
  }

  toggleActive() {
    const li = document.querySelectorAll(".nav-links > li:not(.dropdown)");
    li.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }

  toggleDropdown() {
    let arrow = document.querySelectorAll(".nav-links > li.dropdown");
    arrow.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("showMenu");
      });
    });
  }
}
