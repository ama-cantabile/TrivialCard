$(document).ready(() => {

    //const variables..
    //questions variable that stores the arrrays of objects of questions with all the necessary properties.
    const questionsAndChoices = [{ question: "What is the capital of New York?", choice: ["New York City", "Buffalo", "Syracuse", "Albany"], hint: "The capital is not the largest city!" },
    { question: "Which is the largest state in the US?", choice: ["Utah", "Texas", "California", "Alaska"], hint: "The largest state is located in the northwest of the country!" },
    { question: "What is the longest river in the US?", choice: ["Ohio River", "Rio Grande", "Mississippi", "Missouri"], hint: "This river is rising in the Rocky Mountains of western Montana!" },
    { question: "What is the highest mountain in the US?", choice: ["Mount Elbert", "Capitol Peak", "Mount Rainier", "Mount McKinley"], hint: "Denali is the another name of this mountain!" },
    { question: "The film Jaws was set in a fictional beach resort in which part of America?", choice: ["Florida", "The west coast", "Hawaii", "New England"], hint: "It is located in the northeast corner of the USA!" }];

    //HTML wired const variables..
    $questionText = $('.question-text');

    const $hintBox = $('.hint-box');
    const $hint = $('.hint');
    const $hintText = $('.hide-hint-text');

    const $correctAnswer = $('.correct-answer');
    const $corretAnswerText = $('.correct-answer-text');

    const $wrongAnswer1 = $('.wrong-answer-one');
    const $wrongText1 = $('.wrong-text-one');

    const $wrongAnswer2 = $('.wrong-answer-two');
    const $wrongText2 = $('.wrong-text-two');

    const $wrongAnswer3 = $('.wrong-answer-three');
    const $wrongText3 = $('.wrong-text-three');

    const $smileyFace = $('.smiley');
    const $frownyFace = $('.frown');

    const $reset = $('.reset-box');

    //click event handlers..
    $hintBox.on('click', () => {
        $hint.slideToggle(500);
    })

    //Three click events for the wrong answers..
    $wrongAnswer1.on('click', () => {
        //fadeout slow experiment
        $wrongText1.fadeOut('slow');

        frownyFaceShow();
    })

    $wrongAnswer2.on('click', () => {
        //fadeout fast experiment
        $wrongText2.fadeOut('fast');
        frownyFaceShow();
    })

    $wrongAnswer3.on('click', () => {
        //fadeout with specific value experiment
        $wrongText3.fadeOut(500);
        frownyFaceShow();
    })

    //click event handler for the correct answer
    $correctAnswer.on('click', () => {

        //generating a randomnumber according to the question array length.
        var randomNumber = Math.floor(Math.random() * questionsAndChoices.length);

        //hide frowny face and display smiley face.
        smilyFaceShow();

        //fade away wrong answers..
        fadeOut(500);

        //new questions appears at here..
        $questionText.text(questionsAndChoices[randomNumber].question);
        $hintText.text(questionsAndChoices[randomNumber].hint);
        $wrongText1.text(questionsAndChoices[randomNumber].choice[0]);
        $wrongText2.text(questionsAndChoices[randomNumber].choice[1]);
        $wrongText3.text(questionsAndChoices[randomNumber].choice[2]);
        $corretAnswerText.text(questionsAndChoices[randomNumber].choice[3]);

        fadeIn(100);

        $hint.fadeOut('fast');
        $frownyFace.hide();

    })

    //This will reset the faded out questions including face images..
    $reset.on('click', () => {

        fadeIn(500);

        $frownyFace.hide();
        $smileyFace.hide();
    })

    //functions..
    function fadeIn(time) {
        $wrongText1.fadeIn(time);
        $wrongText2.fadeIn(time);
        $wrongText3.fadeIn(time);
    }

    function fadeOut(time) {
        $wrongText1.fadeOut(time);
        $wrongText2.fadeOut(time);
        $wrongText3.fadeOut(time);
    }

    function frownyFaceShow() {
        $frownyFace.show();
        $smileyFace.hide();
    }

    function smilyFaceShow() {
        $smileyFace.show();
        $frownyFace.hide();
    }
});

