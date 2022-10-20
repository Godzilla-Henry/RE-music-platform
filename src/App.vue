<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid navbar-content">
      <a class="navbar-brand" href="#">
        <div class="logoImg"></div>
        LOGO名稱
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">熱門排行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">推薦歌單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">最新發行</a>
          </li>
        </ul>
        <div class="d-flex">
          <button class="system-btn">登入/註冊</button>
          <div class="search__box">
            <div class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="#fff" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div class="search-bar">
              <input type="text" class="search-input" maxlength="17" />
              <div class="close-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div id="main">
    <router-view/>
  </div>

  <div id="footer"></div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    /* Search */
    onMounted(function () {
      const searchBox = document.querySelector(".search__box");
      const searchIcon = document.querySelector(".search-icon");
      const searchBar = document.querySelector(".search-bar");
      const SVG = document.querySelector(".search-icon svg");
      const closeBtn = document.querySelector(".close-icon svg");
      
      searchIcon.addEventListener("click", () => {
        setTimeout(() => {
          searchBar.classList.add("active__bar");
          searchBox.classList.add("active__box");
        }, 650);

        searchIcon.classList.add("active__icon");
        SVG.setAttribute("fill", "#515151");
        closeBtn.style.cursor = "pointer";
      });

      closeBtn.addEventListener("click", () => {
        setTimeout(() => {
          searchIcon.classList.remove("active__icon");
          SVG.setAttribute("fill", "#fff");
        }, 650);
        searchBar.classList.remove("active__bar");
        searchBox.classList.remove("active__box");
        closeBtn.style.cursor = "auto";
      });
    });
    /* End Search */
  },
}
</script>

<style>
@import './assets/css/Navbar.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main{
  padding: 25px 0px;
}

#footer{
  width: 100%;
  height: 286px;
  background: #515151;
}
</style>
