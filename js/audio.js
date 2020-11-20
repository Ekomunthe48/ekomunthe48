// LIST LAGU
const mulai = document.querySelector('#mulai');
var myQuestions = [
    {
        question: 'Song 1',
        answers: {
            a: 'Mirai no Bokura wa Shitteru yo - Aquors',
            b: "Sore wa Bokutachi no Kiseki - μ’s",
            c: 'Nijiiro Passions! -  Nijigasaki High School Idol Club',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Song 2',
        answers: {
            a: 'Wanted!! Wanted!! - Mrs. Green Apple',
            b: "Ao to Natsu - Mrs. Green Apple",
            c: 'Inferno - Mrs. Green Apple',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Song 3',
        answers: {
            a: 'ONE - Aimer',
            b: "Ref:rain - Aimer",
            c: 'ReAlizE - AliA',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Song 4',
        answers: {
            a: 'As Long As You Love Me - Backstreet Boys',
            b: "End Of The Roads - Boyz II Men",
            c: 'If I Let You Go - Weslife',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Song 5',
        answers: {
            a: 'CHASE!! - Setsuna Yuki',
            b: "DIVE! - Setsuna Yuki",
            c: 'Melody - Setsuna Yuki',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Song 6',
        answers: {
            a: 'Andai Aku Bisa - Chrisye',
            b: "ak Mampu Pergi - Sammy Simorangkir",
            c: 'Teman Hidup - Tulus',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Song 7',
        answers: {
            a: 'When I Was Your Man - Bruno Mars',
            b: "Heal the Worlds - Michael Jackson",
            c: 'That Should Be Me -  Justin Bieber ft. Rascal Flatts',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Song 8',
        answers: {
            a: 'Demi Cinta - Kerispatih',
            b: "Kisah Tak Sempurna - Samsons",
            c: 'Kisah Cintaku -  Peterpan',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Song 9',
        answers: {
            a: 'Orang Ketiga - HiVi',
            b: 'Dekat di Hati - RAN',
            c: "Untitled - Maliq & D'Essentials",
        },
        correctAnswer: 'c'
    },
    {
        question: 'Song 10',
        answers: {
            a: 'Shelter - Porter Robinson',
            b: "Stay the Night - Zedd ft. Hayley Williams",
            c: 'Wake Me Up! -  Avichi',
        },
        correctAnswer: 'a'
    },
]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var resultButton = document.getElementById('result');


let skor = 0 ;


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
    
        for(var i = 0; i < questions.length; i++){
            
            answers = [];
    
            for(letter in questions[i].answers){
    
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            output.push(
                '<div class="qst"> <div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div></div>'
            );
        }
    
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
	
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;
            }
        }
    
        skor = numCorrect * 10
    }

    function set(id){
        return document.getElementById(id);
    }
    
    let cardSong = set('cardSong');
    let musik = new Audio();
    let ext = '.mp3';
    let isPlay = false;
    let playTrack;
    
    let song = {
        song01: ['Mirai no Bokura wa Shitteru yo - Aquors', 'song01', 'Song 01'],
        song02: ['Ao to Natsu - Mrs. Green Apple', 'song02', 'Song 02'],
        song03: ['ONE - Aimer', 'song03', 'Song 03'],
        song04: ['If I Let You Go - Weslife', 'song04', 'Song 04'],
        song05: ['DIVE! - Setsuna Yuki', 'song05', 'Song 05'],
        song06: ['Teman Hidup - Tulus', 'song06', 'Song 06'],
        song07: ['When I Was Your Man - Bruno Mars', 'song07', 'Song 07'],
        song08: ['Kisah Tak Sempurna - Samsons', 'song08', 'Song 08'],
        song09: ["Untitled - Maliq & D'Essentials", 'song09', 'Song 09'],
        song10: ['Shelter - Porter Robinson', 'song10', 'Song 10'],
    }
    
    for (let newSong in song){
        let songList = document.createElement("div");
        let playButton = document.createElement("button");
        let quiz = document.createElement("div");
        
        songList.className = 'songList';
        playButton.className = 'playButton';
        quiz.className = 'quiz'
        
        quiz.innerHTML = song[newSong][2];
        playButton.id = song[newSong][1];
        
        playButton.addEventListener('click', listSong)
        
        songList.appendChild(quiz);
        songList.appendChild(playButton);
        
        cardSong.appendChild(songList)
    }
    
    let timer = 100 

    let downloadTimer = setInterval(() => {
        if (timer === 0){
            clearInterval(downloadTimer)
            alert(`Your score is (score = ${skor})`)
            musik.pause()
            e.target.style.background = "url('../src/images/play.png') center center/cover"
            musik.currentTime = 0
            skor = 0
            timer = 0
            location.reload()
        } else {
            document.getElementById("timer").innerHTML = timer + " seconds remaining";
        }
        timer -= 1
    }, 1000);
    
    function listSong(e) {
        let fileName = `../src/audios/${e.target.id}${ext}`;
        

        
        if (isPlay){
            if(playTrack !== e.target.id){
                isPlay = true;
                set(playTrack).style.background = "url('../src/images/play.png') center center/cover"
                e.target.style.background = "url('../src/images/pause-button.png') center center/cover"
                musik.src = fileName;
                musik.play()
            } else {
                musik.pause();
                isPlay = false;
                e.target.style.background = "url('../src/images/play.png') center center/cover"
            }
        } 
        else {
            isPlay = true;
            e.target.style.background = "url('../src/images/pause-button.png') center center/cover";
            if (playTrack !== e.target.id){
                musik.src = fileName;
            }
            musik.play()	
            showQuestions(questions, quizContainer);
        }
        playTrack = e.target.id;

        resultButton.onclick = function(){
            clearInterval(downloadTimer)
            alert(`Your score is (score = ${skor})`)
            musik.pause()
            e.target.style.background = "url('../src/images/play.png') center center/cover"
            musik.currentTime = 0
            skor = 0
            timer = 0
            location.reload()
        }
    }

    submitButton.onclick = function(){
        showResults(questions, quizContainer);
    }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

