
var _npt_days = document.getElementById("npt-days");
var _npt_startDate = document.getElementById("npt-start-date");
var _npt_codeCountry = document.getElementById("npt-country-code");
var _btn_action = document.getElementById("btn-generate");
var _pnl_calendars = document.getElementById("pnl-calendar");


_btn_action.addEventListener("click", function () {
    var startDate = new Date(_npt_startDate.value); // set the start date
    var calculateDays = _npt_days.value; // set count days - test on console
 
    var daysInMonth = new Date(startMonthDay.getFullYear(), startMonthDay.getUTCMonth(), 0).getUTCDate();
  
    var weeks = 1;
    var initDay = startMonthDay.getUTCDay();
    var dayLimit = startMonthDay.getDate() + calculateDays;
    weeks += calculateDays / 7;

    // _pnl_calendars.appendChild(
    //     buildCalendar(
    //         weeks, 
    //         startMonthDay.getUTCMonth() + "-" + startMonthDay.getFullYear(), 
    //         initDay, 
    //         startMonthDay.getUTCDate(),
    //         calculateDays)
    //     );
 
    // testing calendar

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
    
    return ;  // return the calendar per month
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
    tr.appendChild(th);

    thead.appendChild(tr);
    tbl.appendChild(thead);
    var tbody = document.createElement('tbody');
    tbl.appendChild(tbody);
    return tbl;
}