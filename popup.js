var str = ''


document.querySelector('#submit-button').addEventListener('click', function(e) {
    var format = document.getElementById('input_value');
    jsonData = JSON.parse(format.value)
    const quizAnswer = findQuizAnswer(jsonData);
    const contentAnswer = ContentQuestions(jsonData)
    const writngAnswer = WritingQuestions(jsonData)
    openInternalPopup(str)

}, false);



function findQuizAnswer(jsonData) {
    console.log(jsonData)
    const quizData = jsonData.data.UserModuleInfo.quiz.Questions;
    str += '<h1>Quiz Answer</h1>'
    const times = quizData.length
    for (let i = 0; i < times; i++) {
        
        qqq = quizData[i];
        quesss = qqq.Question;
        quesss = quesss.replace(/\\/g, '');
        str += `<strong>${quesss}</strong>`;
        

        lengthAnswer = qqq.Answers.length
        for (let i = 0; i < lengthAnswer; i++) {
            aaa = qqq.Answers[i]
            if (aaa.Points >= 2){
                str += `<li style="color:green; font-size: 20px" >${aaa.Answer}</li>`;

            }
            else {str += `<li>${aaa.Answer}</li>`}
           // console.log(aaa.Points)
        }


    }
    str += '<br><br><br><br>'
}

function ContentQuestions(jsonData){
    const quizData = jsonData.data.UserModuleInfo.storyChallenge.ContentQuestions;
    str += '<h1>Content Answer</h1>'
    const times = quizData.length
    for (let i = 0; i < times; i++) {
        
        qqq = quizData[i];
        quesss = qqq.Question;
        quesss = quesss.replace(/\\/g, '');
        str += `<strong>${quesss}</strong>`;
        

        lengthAnswer = qqq.Answers.length
        for (let i = 0; i < lengthAnswer; i++) {
            aaa = qqq.Answers[i]
            if (aaa.Points >= 2){
                str += `<li style="color:green; font-size: 20px" >${aaa.Answer}</li>`;

            }
            else {str += `<li>${aaa.Answer}</li>`}
           // console.log(aaa.Points)
        }


    }
    str += '<br><br><br><br>'
}
function WritingQuestions(jsonData){
    const quizData = jsonData.data.UserModuleInfo.storyChallenge.WritingQuestions;
    str += '<h1>Writing Answer</h1>'
    const times = quizData.length
    for (let i = 0; i < times; i++) {
        
        qqq = quizData[i];
        quesss = qqq.Question;
        quesss = quesss.replace(/\\/g, '');
        str += `<strong>${quesss}</strong>`;
        

        lengthAnswer = qqq.Answers.length
        for (let i = 0; i < lengthAnswer; i++) {
            aaa = qqq.Answers[i]
            if (aaa.Points >= 2){
                str += `<li style="color:green; font-size: 20px" >${aaa.Answer}</li>`;

            }
            else {str += `<li>${aaa.Answer}</li>`}
           // console.log(aaa.Points)
        }


    }

}


function openInternalPopup(str) {
  // 팝업 창의 크기 및 위치 설정
  const popupWidth = 700;
  const popupHeight = 600;
  const leftPosition = (screen.width - popupWidth) / 2;
  const topPosition = (screen.height - popupHeight) / 2;
  
  // 내부 HTML로 팝업 창 열기
  const popupWindow = window.open("", "_blank", `width=${popupWidth}, height=${popupHeight}, top=${topPosition}, left=${leftPosition}, scrollbars=yes`);

  // 팝업 창에 내부 HTML 로드
  const popupContent = str
  
  popupWindow.document.write(popupContent);
  popupWindow.document.close();
}