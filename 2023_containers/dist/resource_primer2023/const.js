/**
 * Created by vasa on 12.11.13.
 */
var gnMaxPages = 40; // число слайдов в разделе
angular.module('course').value('razdelName', 'Название раздела');
angular.module('course').value('sectionName', '');
angular.module('course').value('pageCount', gnMaxPages);
var SdanoFlag = false;  // передавать ли статус сдано за раздел? если курс без теста - то true

var InteractionFlag = [2, 3, 4, 5, 6, 7, 8, 12]; // указание слайдов с интерактивностями

var dlina;
switch (gnMaxPages) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dlina = "160px";
        break;
    case 6:
        dlina = "185px";
        break;
    case 7:
        dlina = "210px";
        break;
    case 8:
        dlina = "240px";
        break;
    case 9:
        dlina = "270px";
        break;
    case 10:
        dlina = "300px";
        break;
    case 11:
        dlina = "330px";
        break;
    case 12:
        dlina = "370px";
        break;
    case 13:
        dlina = "400px";
        break;
    case 14:
        dlina = "430px";
        break;
    case 15:
        dlina = "465px";
        break;
    case 16:
        dlina = "500px";
        break;
    case 17:
        dlina = "530px";
        break;
    case 18:
        dlina = "565px";
        break;
    case 19:
        dlina = "600px";
        break;
    case 20:
        dlina = "630px";
        break;
    case 21:
        dlina = "660px";
        break;
    case 22:
        dlina = "695px";
        break;
    case 23:
        dlina = "730px";
        break;
    default:
        dlina = "840px";
        break;
}
