console.log('script conected!');

const arrayOfLoveWishes = [
    "Ти – найбільший подарунок у моєму житті!",
    "Кохаю тебе більше, ніж зірки на небі!",
    "Ти освітлюєш мій світ, як сонце після дощу!",
    "Моє серце належить тільки тобі!",
    "З тобою кожен день – це казка!",
    "Люблю тебе до безмежності і назад!",
    "Ти – моя доля, моя радість і мій всесвіт!",
    "Без тебе світ був би сірим і похмурим!",
    "Ти – найдорожчий скарб у моєму житті!",
    "Моя любов до тебе зростає з кожним днем!",
    "З тобою я відчуваю справжнє щастя!",
    "Ти – моє натхнення, моя муза і моя мрія!",
    "Кожна мить з тобою – це чарівний подарунок долі!",
    "Ти – найкраще, що зі мною сталося!",
    "Я вдячний/вдячна долі за те, що ти поруч!",
    "Ти – моя підтримка, моє кохання, моє все!",
    "Я хочу провести з тобою все своє життя!",
    "Ти робиш мене найщасливішою людиною на світі!",
    "З тобою я відчуваю гармонію і спокій!",
    "Ти – моя друга половинка, моя любов, моє серце!"
  ];  

document.getElementById('btn_wishes').addEventListener('click', function() {
    // alert('Button clicked!');

    console.log('Button clicked!');

    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);

    // console.log('Номер елементу масиву: ', index);

    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
})

let countOfHearts = 5;
console.log('countOfHearts: ' + countOfHearts);

document.getElementById('heartsforwishes').innerText = '💖' .repeat(countOfHearts)

document.getElementById('btn_wishes').addEventListener('click', ()=> { 
  countOfHearts--;
  console.log('countOfHearts: ' + countOfHearts);
  document.getElementById('heartsforwishes').innerText = '💖' .repeat(countOfHearts) + '🤍' .repeat(5-countOfHearts);

  if (countOfHearts == 0) {
    document.getElementById('btn_wishes').style.display = 'none';
  }
});

document.getElementById('btnbuyhearts').addEventListener('click', ()=> {

  countOfHearts = 5;
  document.getElementById('heartsforwishes').innerText = '💖' .repeat(countOfHearts);
  document.getElementById('btn_wishes').style.display = 'inline-block';
  document.getElementById('p_wishes').innerText = '';

  console.log('btnbuyhearts clicked!');
});

