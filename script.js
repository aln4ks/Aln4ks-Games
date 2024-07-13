// Блок FAQ

function toggleAnswer(questionNumber) {
    var answer = document.getElementById(`answer${questionNumber}`);
    var icon = answer.previousElementSibling.querySelector('.toggle-icon');

    if (answer.style.display === "none") {
      answer.style.display = "block";
      icon.textContent = '–';
    } else {
      answer.style.display = "none";
      icon.textContent = '+';
    }
  }


// Скролл навбара (смена цвета)

window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};


// Открытие модального окна

var modal = document.getElementById('modal');
var btns = document.querySelectorAll('.open-modal');
var span = document.getElementsByClassName('close')[0];
var overlay = document.getElementById('overlay');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
      overlay.style.display = "block";
      modal.style.display = "block";
  });
});

span.addEventListener('click', function() {
    overlay.style.display = "none";
    modal.style.display = "none";
});

overlay.addEventListener('click', function() {
  overlay.style.display = "none";
  modal.style.display = "none";
});


// Открытие бургер-меню

var menu = document.getElementById('burger-menu');
var menuBtn = document.getElementById('burger-btn');

menuBtn.addEventListener('click', function() {
  menu.style.display = "block";
});

document.addEventListener('click', function(event) {
  var isClickMenu = menu.contains(event.target);
  var isClickBtn = menuBtn.contains(event.target);

  if (!isClickMenu && !isClickBtn) {
    menu.style.display = "none";
  }
});
