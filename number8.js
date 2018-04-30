
var dom_days = document.getElementById("npt-days");
var dom_startDate = document.getElementById("npt-start-date");
var dom_codeCountry = document.getElementById("npt-country-code");
var dom_btn = document.getElementById("btn-generate");
var dom_pnl = document.getElementById("pnl-calendar");


dom_btn.addEventListener("click", function () { 
    var startDate = new Date(dom_startDate.value); // set the start date
    var days_npt = dom_days.value; // set count days
 
    // testing calendar
 
}, false);
  
function buildCalendar( ) {
    
    return ; // return the calendar per month
}


//build all dom calendar represented as table
function builDomCalendar(title){
    
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