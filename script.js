var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button')
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);

function displaydata(){
    let input=document.getElementById('date').value;
      if(Date.parse(input)){
          var inputdate=new Date(input);
          var currentdate=new Date();
          var millisecdiff=currentdate.getTime()- inputdate.getUTCMilliseconds();
          console.log(millisecdiff);

          var seconddiff=Math.floor(millisecdiff/1000);
          console.log(seconddiff);

          var minutediff=Math.floor(seconddiff/60);
          console.log(minutediff);

          var hoursdiff=Math.floor(minutediff/60);
          console.log(hoursdiff);
        
          var daydiff=Math.floor(hoursdiff/24);
          console.log(daydiff);

          var yeardiff=currentdate.getFullYear() - inputdate.getFullYear();
          console.log(yeardiff);

          var monthdiff=yeardiff*12+(currentdate.getMonth() - inputdate.getMonth());
          console.log(monthdiff);
      } else{
          console.log("give a proper valid date");
      }

      var year=document.createElement('div');
      year.innerHTML=`Year differences : ${yeardiff}`;
      document.body.append(year);

      var month=document.createElement('div');
      month.innerHTML=`Month differences : ${monthdiff}`;
      document.body.append(month);

      var day=document.createElement('div');
      day.innerHTML=`Day differences : ${daydiff}`;
      document.body.append(day);

      var hour=document.createElement('div');
      hour.innerHTML=`Hour differences: ${hoursdiff}`;
      document.body.append(hour);

      var minute=document.createElement('div');
      minute.innerHTML=`Minute differences : ${minutediff}`;
      document.body.append(minute);

      var second=document.createElement('div');
      second.innerHTML=`Second differences : ${seconddiff}`;
      document.body.append(second);

      var millisecond=document.createElement('div');
      millisecond.innerHTML=`Millisecond differences : ${millisecdiff}`;
      document.body.append(millisecond);



}