/*---------------------------------------------------------------------- THEME_SWITCH_START ----------------------------------------------------------------------*/

const toggleSwitchsecond = document.querySelector('.theme-switch-second input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitchsecond.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  }    
}
const currentThemeSecond = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentThemeSecond) {
    document.documentElement.setAttribute('data-theme', currentThemeSecond);

    if (currentThemeSecond === 'dark') {
        toggleSwitchsecond.checked = true;
    }
    else if (currentThemeSecond === 'light') {
    }
}



/* ----------------------------- INFO-POPUP ----------------------------- */

window.addEventListener('load', () => {
    document.getElementById('infoMain').style.opacity = 1
    document.getElementById('infoMain').style.zIndex = 9999
})
function startTest(){
    document.getElementById('infoMain').style.opacity = 0
    document.getElementById('infoMain').style.zIndex = -2
    document.getElementById('bar').style.animationPlayState = 'running'
    document.addEventListener('contextmenu', event => event.preventDefault());
}



/* ----------------------------- DONT-LEAVE-THE-TAB-MAN ----------------------------- */

document.addEventListener('visibilitychange', function(){
    if(document.visibilityState == 'hidden'){
        if(window.getComputedStyle(document.getElementById('infoMain')).opacity == 0){
            final()
        }
    }
})



/* ----------------------------- ALSO-DONT-RELOAD ----------------------------- */

document.addEventListener('keydown', function(event){
    if(window.getComputedStyle(document.getElementById('infoMain')).opacity == 0){
        if(event.key == 'F5' ||
            (event.ctrlKey && event.key === 'r') ||
            (event.metaKey && event.key === 'r')){
                event.preventDefault()
        }
    }
})



/* ----------------------------- JASON-DATA ----------------------------- */

questions = [
      {
        "id": 1,
        "question": "QUES/1.jpg",
        "options": ["BirdMan", "The Godfather", "Pulp Fiction", "The Dark Knight"],
        "answer": "BirdMan",
        "ansID": "1"
      },
      {
        "id": 2,
        "question": "QUES/2.jpg",
        "options": ["Titanic", "Enemy", "Forrest Gump", "The Matrix"],
        "answer": "Enemy",
        "ansID": "2"
      },
      {
        "id": 3,
        "question": "QUES/3.jpg",
        "options": ["Swades", "Gladiator", "Barfi", "Salam Bombay"],
        "answer": "Swades",
        "ansID": "1"
      },
      {
        "id": 4,
        "question": "QUES/4.jpg",
        "options": ["MindHunter", "Jurassic Park", "Severance", "Zodiac"],
        "answer": "MindHunter",
        "ansID": "1"
      },
      {
        "id": 5,
        "question": "QUES/5.jpg",
        "options": ["There Will Be Blood", "Harry Potter", "The Avengers", "Spider-Man"],
        "answer": "There Will Be Blood",
        "ansID": "1"
      },
      {
        "id": 6,
        "question": "QUES/6.jpg",
        "options": ["Pather Panchali", "Mother India", "Gangubai Kathiawadi", "Salam Bombay"],
        "answer": "Gangubai Kathiawadi",
        "ansID": "3"
      },
      {
        "id": 7,
        "question": "QUES/7.jpg",
        "options": ["Peaky Blinders", "Finding Nemo", "Sherlock", "Toy Story"],
        "answer": "Peaky Blinders",
        "ansID": "1"
      },
      {
        "id": 8,
        "question": "QUES/8.jpg",
        "options": ["The Family Man", "Mirzapur", "Sacred Games", "Paatal Lok"],
        "answer": "Paatal Lok",
        "ansID": "4"
      },
      {
        "id": 9,
        "question": "QUES/9.jpg",
        "options": ["Severance", "Sherlock", "The Last of Us", "Zodiac"],
        "answer": "Severance",
        "ansID": "1"
      },
      {
        "id": 10,
        "question": "QUES/10.jpg",
        "options": ["Shahid", "Court", "Masaan", "Oye Lucky! Lucky Oye!"],
        "answer": "Masaan",
        "ansID": "3"
      },
      {
        "id": 11,
        "question": "QUES/11.png",
        "options": ["Newton", "Bareilly Ki Barfi", "Omerta", "Panchayat"],
        "answer": "Newton",
        "ansID": "1"
      },
      {
        "id": 12,
        "question": "QUES/12.png",
        "options": ["The Departed", "Breaking Bad", "The Office", "Casino"],
        "answer": "The Office",
        "ansID": "3"
      },
      {
        "id": 13,
        "question": "QUES/13.png",
        "options": ["Little Woman", "Whiplash", "The Greatest Showman", "La La Land"],
        "answer": "Little Woman",
        "ansID": "1"
      },
      {
        "id": 14,
        "question": "QUES/14.png",
        "options": ["Squid Game", "Sherlock", "Chernobyl", "Black Mirror"],
        "answer": "Chernobyl",
        "ansID": "3"
      },
      {
        "id": 15,
        "question": "QUES/15.png",
        "options": ["Breaking Bad", "The Office", "The Big Bang Theory", "MindHunter"],
        "answer": "Breaking Bad",
        "ansID": "1"
      }
    ]




/* ----------------------------- QUESTION-PROGRESS-DATA ----------------------------- */

let id = 1
let total = 0
const displayQuestionProgress = questions.map((value) => {
    total += 1
    return `<div class="box box-selected-bg" onclick="jump(${value.id})" id="box${value.id}">${value.id}</div>`
})

document.getElementById("questionProgress").innerHTML = displayQuestionProgress.join("")



/* ----------------------------- ANSWER-DATA ----------------------------- */

let ansData = []
function boxCheck(boxID, btnID){
    document.getElementById(`box${boxID}`).innerHTML = "&#10003;"


    const existingIndex = ansData.findIndex(value => value.questionID === boxID);
    if (existingIndex !== -1) {
        ansData.splice(existingIndex, 1);
    }
    ansData.push(
        {
            questionID : boxID,
            answerID : btnID
        }
    )
    console.log(ansData)
}



/* ----------------------------- DISPLAYING-ALL-QUESTIONS ----------------------------- */

displayQuestion()

function displayQuestion(){
    const displayQuestions = questions.map((value) => {
        if(id == value.id){
            return `
            <div class="questionWrapper"></div>
            <img src="${value.question}" class="question" id="question${value.id}"></span>
            <div class="answers">
                <button id="1" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans">${value.options[0]}</button>
                <button id="2" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans">${value.options[1]}</button>
                <button id="3" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans">${value.options[2]}</button>
                <button id="4" onclick="boxCheck(${value.id}, this.id); showSelected(${value.id});" class="ans">${value.options[3]}</button>
            </div>
            <div class="nextPrevBtns">
                <button class="prev" onclick="prev(); showSelected();">Prev</button>
                <button class="next" onclick="next(); showSelected();">Next</button>
            </div>
            <button class="finish" onclick="final();">Finish</button>
            <!-- <div class="progress"></div> -->
            `
        }
    })
    document.getElementById("questionCard").innerHTML = displayQuestions.join(" ")
    showSelected(id);
}



/* ----------------------------- KEEPING-ANSWERS ----------------------------- */

function showSelected(currentQuestionId) {
    
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });

    ansData.forEach(value => {
        if (value.questionID == currentQuestionId) {
            const selectedButton = document.getElementById(value.answerID);
            if (selectedButton) {
                selectedButton.style.backgroundColor = 'limegreen';
                selectedButton.style.color = 'white';
            }
        }
    });
}



/* ----------------------------- JUMP-TO-QUESTION ----------------------------- */

function jump(ID){
    id = parseInt(ID)-1
    next()
}



/* ----------------------------- NEXT-QUESTION ----------------------------- */

document.querySelector('.question').addEventListener('load', function() {
    document.querySelector('.questionWrapper').classList.add('loaded');
});

document.querySelectorAll('.box').forEach(box => {
    box.classList.remove('box-selected-bg')
});
document.getElementById(`box1`).classList.add('box-selected-bg')

function next(){
    if(id == total){
        
    }
    else{
        id += 1
        displayQuestion()

        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')
        
        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }

    document.querySelector('.question').addEventListener('load', function() {
        document.querySelector('.questionWrapper').classList.add('loaded');
    });

}



/* ----------------------------- PREVIOUS-QUESTION ----------------------------- */

function prev(){
    if(id>=2){
        id -= 1
        displayQuestion()
        
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('box-selected-bg')
        });
        document.getElementById(`box${id}`).classList.add('box-selected-bg')

        document.getElementById(`box${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        showSelected(id);
    }

    document.querySelector('.question').addEventListener('load', function() {
        document.querySelector('.questionWrapper').classList.add('loaded');
    });
    
}

// ansCounter = 0
// q = []
// function checkAns(qID, aID){
//     questions.map((value) => {
//         console.log("QUESTIONS : ",qID, value.questionID)
//         if(qID == value.questionID){
//             console.log("ANSWERS : ",aID,value.answerID)
//             aID == value.answerID;
//             ansCounter += 1
//             console.log("IN",ansCounter)
//         }
//     })
//     console.log("OUT",ansCounter)
//     if(qID == total){
//         final(ansCounter)
//     }
// }



/* ----------------------------- SHOWING-RESULT-ON-TIMEOUT ----------------------------- */

function animationEndCall(){
    final()
}
document.getElementById("bar").addEventListener('animationend',animationEndCall)



/* ----------------------------- FINAL-RESULT ----------------------------- */

let result = ""
countAns = 0
function final(){

    document.body.style.height = "100dvh"
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.getElementById('questionProgress').style.display = "none"
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.getElementById('bar').style.display = 'none'
    document.getElementById('seeAllAnswers').style.display = 'block'
    document.getElementById('questionProgress').style.borderRadius = '20px'

    document.querySelectorAll('.box').forEach(function(box){
        box.style.backgroundColor = '#e0e0e0'
    })

    questions.map((value) => {
        ansData.map((valueAns) => {
            if(value.id == valueAns.questionID){
                if(value.ansID == valueAns.answerID){
                    countAns += 1
                }
            }
        })
    })

    console.log(countAns)

    if((parseInt(countAns)*100)/parseInt(total) > 50){
        result = "CINEPHILE"
        document.getElementById("questionCard").innerHTML = `
        You scored <span style="color: limegreen; font-weight: bold;">${countAns}</span> out of ${total} Questions!
        <span class="result" style="background-color: limegreen;" id="result">${result}</span>
        <img class="cinephile" src="RES/CINEPHILE.gif">
        `
    }
    else{
        result = "CINEPHOBE"
        document.getElementById("questionCard").innerHTML = `
        You scored <span style="color: red; font-weight: bold;">${countAns}</span> out of ${total} Questions!
        <span class="result" style="background-color: red;" id="result">${result}</span>
        <img class="cinephobe" src="RES/CINEPHOBE.gif">
        `
    }
}


function seeAllAnswers(){

    document.getElementById('seeAllAnswers').style.display = 'none'
    document.getElementById('questionProgress').style.display = "none"

    const allAnswers = questions.map((value) => {
        return `
            <div class="allAnswers">
                <img src="${value.question}">
                <span>${value.answer}</span>
            </div>
        `
    })
    document.getElementById('ansAll').innerHTML = allAnswers.join(" ")
    document.getElementById("questionCard").innerHTML = `<div class="ansAll" id="ansAll">`+document.getElementById('ansAll').innerHTML+`</div>`
    document.getElementById('ansAll').style.display = 'grid'
    document.getElementById('ansAll').style.opacity = 1
}


function updateProgressWidth() {
    document.getElementById('progress').style.width = document.getElementById('questionProgress').offsetWidth + 'px';
    document.getElementById('progress').style.height = document.getElementById('questionProgress').offsetHeight + 'px';
}

window.addEventListener('resize', updateProgressWidth);
updateProgressWidth();