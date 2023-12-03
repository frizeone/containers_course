/**
 * Created by vasa on 12.11.13. Modified by vitality on 29.06.21
 */
var gnMaxPages = 39; // число слайдов в разделе
angular.module('course').value('razdelName', 'Контейнерные поезда');
angular.module('course').value('sectionName', '');
angular.module('course').value('pageCount', gnMaxPages);
var SdanoFlag = true;

var InteractionFlag = []; // указание слайдов с интерактивностями

var dlina; // подобрано эмпирически
switch (gnMaxPages) {
    case 1:
    case 2:
    case 3:
    case 4:
        dlina = "130px";
        break;
    case 5:
    case 6:
        dlina = "160px";
        break;
    case 7:
        dlina = "190px";
        break;
    case 8:
        dlina = "210px";
        break;
    case 9:
        dlina = "240px";
        break;
    case 10:
        dlina = "220px";
        break;
    case 11:
        dlina = "240px";
        break;
    case 12:
        dlina = "260px";
        break;
    case 13:
        dlina = "280px";
        break;
    case 14:
        dlina = "300px";
        break;
    case 15:
        dlina = "320px";
        break;
    case 16:
        dlina = "340px";
        break;
    case 17:
        dlina = "360px";
        break;
    case 18:
        dlina = "380px";
        break;
    case 19:
        dlina = "400px";
        break;
    case 20:
        dlina = "420px";
        break;
    case 21:
        dlina = "440px";
        break;
    case 22:
        dlina = "460px";
        break;
    case 23:
        dlina = "480px";
        break;
    case 24:
        dlina = "500px";
        break;
    case 25:
        dlina = "520px";
        break;
    case 26:
        dlina = "540px";
        break;
    case 27:
        dlina = "560px";
        break;
    case 28:
        dlina = "580px";
        break;
    case 29:
        dlina = "600px";
        break;
    case 30:
        dlina = "620px";
        break;
    case 31:
        dlina = "640px";
        break;
    case 32:
        dlina = "660px";
        break;
    case 33:
        dlina = "680px";
        break;
    case 34:
        dlina = "700px";
        break;
    case 35:
        dlina = "720px";
        break;
    case 36:
        dlina = "740px";
        break;
    case 37:
        dlina = "760px";
        break;
    case 38:
        dlina = "780px";
        break;
    case 39:
        dlina = "800px";
        break;
    case 40:
        dlina = "820px";
        break;
    case 41:
        dlina = "840px";
        break;
    case 42:
        dlina = "860px";
        break;
    case 43:
        dlina = "880px";
        break;
    case 44:
        dlina = "900px";
        break;
    case 45:
        dlina = "920px";
        break;
    case 46:
        dlina = "940px";
        break;
    default:
        dlina = "500px";
        break;
}
