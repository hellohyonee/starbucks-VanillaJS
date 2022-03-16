//* 검색 요소 클릭 이벤트
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); 

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// * 해당 년 계산하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();