function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
 let days = document.getElementById('days'); 
  let daysContainer = document.querySelector(".days-container");
  for (let day in dezDaysList) {
     let criaElementoDia = document.createElement("li");
     criaElementoDia.className = 'day';
     criaElementoDia.innerText = dezDaysList[day];
     days.appendChild(criaElementoDia);
  }
  document.querySelectorAll(".day")[25].classList.add('holiday') 
  document.querySelectorAll(".day")[26].classList.add('holiday') 
  document.querySelectorAll(".day")[32].classList.add('holiday') 
  document.querySelectorAll(".day")[5].classList.add('friday') 
  document.querySelectorAll(".day")[12].classList.add('friday') 
  document.querySelectorAll(".day")[19].classList.add('friday') 
  document.querySelectorAll(".day")[26].classList.add('friday') 



  function createButton(Feriados) {
        let botao = document.createElement("button");
        botao.innerText = "Feriados"
        botao.id = "btn-holiday";
        document.querySelector(".buttons-container").appendChild(botao);
  }
