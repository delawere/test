const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');

id1.addEventListener('click', () => console.log('id1'));
id2.addEventListener('click', () => console.log('id2'));
id3.addEventListener('click', () => console.log('id3'));
//я знаю, что это грубое решение и правильнее было вывести все дочерние элементы компонента с id root
//на них навесить слушатель по клику и выводить их id