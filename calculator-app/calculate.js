const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch (e) {
    display.value = 'خطأ';
  }
}



document.addEventListener('keydown', function (e) {
    const key = e.key;
  
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
      appendValue(key);
    }
  
    if (key === 'Enter') {
      calculate();
    }
  
    if (key === 'Backspace') {
      deleteLast();
    }
  
    if (key === 'Escape') {
      clearDisplay();
    }
  });

  



  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  