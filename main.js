nameofstudent=[];
function button_click() {
    var display_of_student=[];
    for(var j=1; j<=4; j++) {
        var name1=document.getElementById("student_series"+j).value;
        nameofstudent.push(name1);
        console.log (nameofstudent);
    }    
    var len=nameofstudent.length;
    for(var k=0; k<len; k++) {
        display_of_student.push("<h2> Name-"+nameofstudent[k]+"</h2>");
    }


   
    
    document.getElementById("eashan").innerHTML=display_of_student;
    console.log (display_of_student);
    var remove1= display_of_student.join("");
    document.getElementById("Eashan1").innerHTML=remove1;
    console.log (remove1);
    document.getElementById("button_sumbit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

}
function button_click2() {
    nameofstudent.sort();  
    var display_of_student1=[];
    var len=nameofstudent.length;
    for(var k=0; k<len; k++) {
        display_of_student1.push("<h2> Name-"+nameofstudent[k]+"</h2>");
    }
    var remove2= display_of_student1.join("");
    document.getElementById("Eashan1").innerHTML=remove2;
    console.log (remove2);
    console.log (dispay_of_studennt1)
   
}