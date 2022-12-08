var quiz = {
    title: "My Quiz",
    questions:[
        {
            text: "Question 1",
            responses:[
                {text:"Wrong, too bad"},
                {text:"Right!", correct:true}
            ]
        },
        {
            text:"Question 2",
            responses:[
                {text: "Right answer", correct:true},
                {text: "wrong answer"}
            ]
        }
    ]
};
var app = new Vue ({
    el:"#app",
    data:{
        quiz:quiz,
        questionIndex: 0,
        userResponses: Array(quiz.questions.length).fill(false)
    },
    methods:{
        next: function() {
            this.questionIndex++;
        },
        prev: function() {
            this.questionIndex--;
        },
        score: function() {
            return this.userResponses.filter(function(value){return value}).length
        }
    }
})