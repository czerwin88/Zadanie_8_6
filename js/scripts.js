var a = 4;
  b = 10;
  value = (a * a) + (2 * a * b) - (b * b);

  if (value > 0) {
    console.log('Wynik jest dodatni')
    alert('WYnik jest dodatni');
  }  else if (value < 0) {
     console.log('Wynik jest ujemny')
     alert('Wynik jest ujemny');
  }  else {
      console.log('Wynik to 0')
     alert('Wynik to 0');
  }

  console.log(value)