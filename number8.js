
var _npt_days = document.getElementById("npt-days");
var _npt_startDate = document.getElementById("npt-start-date");
var _npt_codeCountry = document.getElementById("npt-country-code");
var _btn_action = document.getElementById("btn-generate");
var _pnl_calendars = document.getElementById("pnl-calendar");


_btn_action.addEventListener("click", function () {
    var startDate = new Date(_npt_startDate.value); // set the start date
    var days_npt = parseInt(_npt_days.value); // set count days 

    while (days_npt > 0) { // while there are days to consume
        var calculateDays = 0;
        var daysInMonth = new Date(startDate.getFullYear(), startDate.getUTCMonth(), 0).getUTCDate();

        //Validating remaining days
        if (startDate.getUTCDate() + days_npt > daysInMonth) {
            calculateDays = daysInMonth - startDate.getUTCDate();
            days_npt -= (daysInMonth - startDate.getUTCDate()); // set remaining days
        } else {
            calculateDays = days_npt;
            days_npt = 0; //consume all days
        }

        //Calculating parameters
        var weeks = 1;
        var initDay = startDate.getUTCDay();
        var dayLimit = startDate.getDate() + calculateDays;
        weeks += calculateDays / 7;

        _pnl_calendars.appendChild(
            buildCalendar(
                dic_months[startDate.getUTCMonth()] + "-" + startDate.getFullYear(),
                weeks,
                initDay,
                startDate.getUTCDate(),
                calculateDays)
        );
        if (startDate.getMonth() === 11) {
            startDate = new Date(startDate.getFullYear() + 1, startDate.getMonth() + 1, 1)
        }
        else {
            startDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
        }

    }

}, false);

var dic_months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

function buildCalendar(title, weeks, initDay, initDate, daysCount) {
    var i = 0;
    var tbl = builDomCalendar(title);
    while (weeks > 0) {
        var tr = document.createElement('tr');
        for (i = 0; i < 7; i++) {
            var td = document.createElement('td');
            if (i >= initDay && initDate < daysCount) {

                var color = '';

                if (i === 0 || i === 6) color = "yellow";
                else color = "green"

                td.innerHTML = "<a class='ui " + color + " circular label'>" + initDate + "</a>";
                initDate += 1;
                initDay += 1;
            }
            else {
                td.innerHTML = "<a class='ui grey circular label'>-</a>";
            }
            tr.appendChild(td);
        }
        initDay = 0;
        weeks -= 1
        tbl.tBodies[0].appendChild(tr);
    }
    return tbl;   // return the calendar per month
}


//build all dom calendar represented as table
function builDomCalendar(title) {

    var tbl = document.createElement('table');
    tbl.className = "ui celled small structured unstackable table"
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.innerHTML = "S";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "M";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "T";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "W";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "T";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "F";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = "S";
    tr.appendChild(th);
    thead.appendChild(tr);

    tr = document.createElement('tr');
    th = document.createElement('th');
    th.innerHTML = title;
    th.colSpan = 7;
    th.className = "ui center aligned"
    tr.appendChild(th);

    thead.appendChild(tr);
    tbl.appendChild(thead);
    var tbody = document.createElement('tbody');
    tbl.appendChild(tbody);
    return tbl;
}