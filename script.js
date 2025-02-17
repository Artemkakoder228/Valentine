console.log('script conected!');

document.getElementById('btn_wishes').addEventListener('click', function() {
    alert('Button clicked!');
    document.getElementById('p_wishes').innerText = 'Happy Birthday!'; 
})
