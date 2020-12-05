var readlineSync=require("readline-sync")
const chalk=require('chalk')
console.log(chalk.bold("---------welcome to our quiz-------"))
console.log(chalk.red("--prevention is better than cure--"))
console.log(chalk.bold("can you answer this basic 5 questions about covid-19"))
var userName=readlineSync.question(chalk.bold("enter your name"))
questions=[{
question:`How is COVID-19 passed on?
optionA:Through droplets that come from your mouth and nose when you cough or breathe out

optionB:In sexual fluids, including semen, vaginal fluids or anal mucous

optionC:By drinking unclean water

optionD:All of the above 
`,
answer:"A"
},
{
question:`What are the common symptoms of COVID-19? 
optionA:A new and continuous cough
optionB:Fever
optionc:Tiredness
optionD:All of the above`,
answer:"D"
},
{
question:`Can washing your hands protect you from COVID-19? 
optionA:Yes – but only if you use a strong bleach
optionB:Yes – normal soap and water or hand sanitizer is enough
optionC:No – Washing your hands doesn’t stop COVID-19`,
answer:"B"
},
{
question:`Which of the following people is COVID-19 more dangerous for? (select all correct responses)
optionC:Children
optionB:Older people – especially those aged 70 and above
optionC:People with certain underlying health conditions
optionD:European people`,
answer:"C"
},
{
question:`Which of the following is an example of physical distancing? 
optionA:You stop going to crowded places and visiting other people’s houses

optionB;You stop talking to the people you live with

optionC:You stop speaking to your friends on the phone`,

answer:"A"
}
]
var score=0
function startQuiz(question,answer){

  var userAnswer=readlineSync.question(chalk.bold(question))
  if(userAnswer.toUpperCase()==answer)
  {
    console.log(chalk.green("correct answer"))
    console.log(chalk.green("your score is   "+  ++score))
  }
  else
  {
    console.log(chalk.red("oops wrong answer"))
    console.log(chalk.red("your score is "+score))
  }
  

}

for(var i=0;i<questions.length;i++)
{
startQuiz(questions[i].question,questions[i].answer)
}
console.log("your total score is---- "+score )
var participants=[
  {
name:"Astha",
totalScore:3
}
]
participants.push({name:userName,totalScore:score})
participants.sort(function(a,b){
  if(a.totalScore > b.totalScore)return -1;
if(a.totalScore < b.totlScore)return 1;
return 0;
});
if(userName==participants[0].name)
console.log(chalk.red("~~~~~congrats you have high score~~~~~~"))
for(var i=0;i<participants.length;i++)
{
  console.log(chalk.blue(participants[i].name +"->" + participants[i].totalScore))

}


