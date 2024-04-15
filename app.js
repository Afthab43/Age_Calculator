let inputDate=document.getElementById("inputDate");


inputDate.max =new Date().toISOString().split("T")[0];

let result=document.getElementById("result");



function checkAge(){
    let birthDate=new Date(inputDate.value);

    let birthDay=birthDate.getDate();
    let birthMonth=birthDate.getMonth()+1;
    let birthYear=birthDate.getFullYear();

    let today=new Date();

    let currDay=today.getDate();
    let currMonth=today.getMonth()+1;
    let currYear=today.getFullYear();

    let date,month,year;

    year=currYear - birthYear;

    if(currMonth >= birthMonth)
    {
        month=currMonth-birthMonth;
    }
    else{
        year--;
        month=12+currMonth-birthMonth;
    }

    if(currDay>=birthDay)
    {
        date=currDay-birthDay;
    }
    else
    {
        month--;
        date=getDaysInMonth(birthYear,birthMonth) + currDay -birthDay;
    }


    if(month<0)
    {
        month=12;
        year--;
    }
    result.innerHTML =`You are ${year} years,${month} months and ${date} days old `;

}

    function getDaysInMonth(isYear ,isMonth)
    {
        return new Date(isYear,isMonth, 0).getDate();
    }
