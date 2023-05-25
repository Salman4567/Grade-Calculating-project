function calculate() {
   var a = parseInt(document.getElementById("bookOne").value);
   var b = parseInt(document.getElementById("bookTwo").value);
   var c = parseInt(document.getElementById("bookThree").value);
   var d = parseInt(document.getElementById("bookFour").value);
   var e = parseInt(document.getElementById("bookFive").value);

   if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
      alert("Please Enter Correct Value");
   } else {
      var obtaine = a + b + c + d + e;
      document.getElementById("obtain").innerHTML = obtaine;
      var per = obtaine / 500 * 100;
      document.getElementById("per").innerHTML = per;
      if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
         document.getElementById("remarks").innerHTML = "<span style='color:#292'>Pass</span>";

      } else {
         document.getElementById("remarks").innerHTML = "<span style='color:Red'>Fail</span>";


      }
      if (obtaine >= 80) {
         document.getElementById("grade").innerHTML = "A"
      }

      else if (obtaine >= 70) {
         document.getElementById("grade").innerHTML = "B"

      } else if (obtaine >= 60) {
         document.getElementById("grade").innerHTML = "C"

      } else if (obtaine >= 50) {
         document.getElementById("grade").innerHTML = "D"

      }
      else if (obtaine >= 40) {
         document.getElementById("grade").innerHTML = "E"

      } else {
         document.getElementById("grade").innerHTML = "Fail"

      }

   }

}