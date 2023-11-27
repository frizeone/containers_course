// константы для вычислений
var nCompleted = 1;   // число просмотренных слайдов
var gnPage = 1;  // текущий слайд - при загрузке всегда первый
var gaPagesCompleted = []; // Для отслеживания просмотра слайдов
var i;
var EndSdo = false;

gaPagesCompleted[0] = true; // первый слайд считать просмотренным
for (i = 1; i < gnMaxPages; i++) gaPagesCompleted[i] = false; // все остальные оставить не просмотренными

// переход к слайду
function GoToPage(n) {
    if (gnPage != n) {
        gnPage = n;
        window.location.hash = "#/page/" + n;
        gaPagesCompleted[gnPage - 1] = true;
        MarkPageCompleted();
    }
}

// переход к слайду
function GoToPageSafe(n) {
    if (gnPage != n) {
        gnPage = n;
        gaPagesCompleted[gnPage - 1] = true;
        MarkPageCompleted();
    }
}

// подсчет всех просмотренных слайдов в nCompleted
function MarkPageCompleted(){
    nCompleted = 0;
    for (i = 0; i < gnMaxPages; i++) {
        if (gaPagesCompleted[i]) nCompleted++;
    }
    if ((nCompleted == gnMaxPages) && (EndSdo == false) && (gnPage == gnMaxPages)){
        EndSdo = true; // флаг закрытия взаимодействия с СДО
        MarkIfCompletedEnd();
    }
}

// завершаем работу с СДО, если все пройдены!
function MarkIfCompletedEnd() {
    console.log("курс пройден, последний слайд! передаём результаты");
    doLMSSetValue("cmi.core.score.raw", 100);
    SaveSuspendData();
    //  проставлять ли статус сдано для теоретического раздела?
    if (SdanoFlag == true)
    {
        doQuit('passed');
        console.log("передаем - passed и закрываем сеанс");
    }
    else {
        doQuit('completed');
        console.log("передаем - completed и закрываем сеанс");
    }
}

//  восстанавливаем данные из СДО, если не первый запуск
function RestoreFromSuspend() {
    if (doLMSGetValue("cmi.suspend_data") != '') {
        gaPagesCompleted = JSON.parse(doLMSGetValue("cmi.suspend_data"));
        console.log("повторный сеанс - пользовательские данные suspend_data восстановлены");

        nCompleted = 0;
        for (i = 0; i < gnMaxPages; i++) {
            if (gaPagesCompleted[i]) nCompleted++;
        }
        MarkPageCompleted();
        // повторное открытие пройденного раздела
        if (nCompleted == gnMaxPages) {
            EndSdo = true; // флаг закрытия взаимодействия с СДО
        }
    }
    else {
        // нет пользовательских данных
        // проверка, раздел пройден ли?

        if (doLMSGetValue("cmi.core.lesson_mode") == "browse")

        // статус - browse - отмечаем все как пройдено!
        {
            console.log("пройденный раздел. сеанс просмотра");
            for (i = 0; i < gnMaxPages; i++) gaPagesCompleted[i] = true; // все проставить просмотренными !
        }
        else {
            console.log("новый сеанс");
        }
        // конец - проверка, раздел пройден ли?
    }
}

// сохраняем данные в СДО
function SaveSuspendData() {
    console.log("сохраняем пользовательские данные");
    doLMSSetValue("cmi.suspend_data", JSON.stringify(gaPagesCompleted));   // сохраняем массив просмотренных страниц
}

// сохраняем данные по закрытию окна
function SCOSessionTerminatingHandler() {
    console.log("Проверка пройденного материала при закрытии окна");
    if (nCompleted == gnMaxPages) {
        console.log("закрытие - пройдено полностью - результат передан ранее");
        SaveSuspendData();
        //  проставлять ли статус сдано для теоретического раздела?
        if (SdanoFlag == true)
        {
            doQuit('passed');
            console.log("передаем - passed и закрываем сеанс");
        }
        else {
            doQuit('completed');
            console.log("передаем - completed и закрываем сеанс");
        }
    }
    else {
        console.log("закрытие - не полностью - передача текущего результата");
        doLMSSetValue("cmi.core.score.raw", Math.round(nCompleted * 100 / gnMaxPages));
        SaveSuspendData();
        doQuit('incomplete');
    }
}









