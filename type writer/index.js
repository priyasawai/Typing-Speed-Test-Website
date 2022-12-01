const setofwords=["My name is priyanka sawai I am software developer",
"Hope you are having fun this is a simple game you can make",
"If you want the source code then find out my github repository and you can see code",
"so you can create your own version of this challenge",
"you can improve your knowledge"];

const msg=document.getElementById('msg');
//console.log(msg)
const mywords=document.getElementById('mywords');
const btn=document.getElementById('btn')
let startTime,endTime;

const playGame=()=>
{
    let randomNumber=Math.floor(Math.random()*setofwords.length);
    msg.innerText=setofwords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    console.log(startTime);
    btn.innerText="Done"
}

const endplay=()=>
{
    let date=new Date();
    let endTime=date.getTime();
    let totalTime=(endTime-startTime)/1000;
    //console.log(totalTime);

    let totalStr=mywords.value;
    let wordCount=wordCounter(totalStr)

    let speed=Math.round(wordCount/totalTime)*60;

    let finalMsg="you typed total at " + speed + " words per minutes" +". " ;
    finalMsg += comparewords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
}

const comparewords=(str1,str2)=>
{
   let words1=str1.split(" ");
   console.log(words1)
   let words2=str2.split(" ");
   let count=0;
   words1.forEach(function(item,index)
   {
    if(item==words2[index])
    {
        count++;
    }
   });

   let errorwords=words1.length-count;
   return (count + " correct out of " + words1.length + " words and the total number of error are " +errorwords+ ".");
}
const wordCounter=(str)=>
{
  let response=str.split("").length;
  return response;
}
btn.addEventListener('click',function()
{
   // console.log(this)
    if(this.innerText=='Start')
    {
        mywords.disabled=false;
        playGame();
    }
    else{
        if(this.innerText='Done')
        {
            mywords.disabled=true;
            btn.innerText='Start';
            endplay();
        }
    }
})

