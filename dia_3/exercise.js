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


function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const GetDayList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayArray = dezDaysList[index];
        const dayListItem2 = document.createElement('li');

        if (dayArray === 4 | dayArray === 11 | dayArray === 18) {
            dayListItem2.className = 'day holiday';
            dayListItem2.innerHTML = dayArray;
            GetDayList.appendChild(dayListItem2);
        } else if (dayArray === 24 | dayArray === 31) {
            dayListItem2.className = 'day holiday';
            dayListItem2.innerHTML = dayArray;
            GetDayList.appendChild(dayListItem2);
        } else if (dayArray === 25) {
            dayListItem2.className = 'day friday holiday';
            dayListItem2.innerHTML = dayArray;
            GetDayList.appendChild(dayListItem2);
        } else {
            dayListItem2.className = 'day';
            dayListItem2.innerHTML = dayArray;
            GetDayList.appendChild(dayListItem2);
        }
    };
};

createDaysOfTheMonth();

function createButtonsContainer(buttonName) {
    let getFatherBtnContainer = document.querySelector('.buttons-container');
    let childBtnContainer = document.createElement('button');
    let childBtnContainerID = 'btn-holiday';

    childBtnContainer.innerHTML = buttonName;
    childBtnContainer.id = childBtnContainerID;

    getFatherBtnContainer.appendChild(childBtnContainer);

    // 2º forma para adicionar um nó texto entre tags: childBtnContainer.textContent
};

createButtonsContainer('Feriado');

function executeChangeBackground() {
    let executaEvento;
    let getBtnHoliday = document.querySelector('#btn-holiday');

    executaEvento = getBtnHoliday.addEventListener('click',eventChangeBackground);
};

function eventChangeBackground() {
    let getHoliday = document.querySelector('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setColor = 'rgb(255,255,255)';

    for (let index = 0; index < getHoliday.length; index += 1) {
        if (getHoliday[index].style.backgroundColor === setColor) {
            getHoliday[index].style.backgroundColor = backgroundColor;
        } else {
            getHoliday[index].style.backgroundColor = setColor;
        }
        
    }
};

executeChangeBackground();

