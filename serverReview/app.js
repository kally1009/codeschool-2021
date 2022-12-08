

var app = new Vue ({
    el: "#app",
    data: {
        name:"",
        score:""
    },
    methods:{
        btn_click: function(){
            fetch('https://highscoreapi.herokuapp.com/scores').then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    var scoreList = document.querySelector("#displayHighScore")
                    scoreList.innerHTML = "";
                    data.forEach(function (thescore){
                    console.log("In the loop");
                    var eachScore = document.createElement("li");
                    eachScore.classList.add("highScores");
                    eachScore.innerHTML = thescore.name + ": " + thescore.score;
                    scoreList.appendChild(eachScore);
                })
            })
        })
    },
        newscore_click: function(){
            var data={
                name:this.name,
                score:this.score

            }
            fetch('https://highscoreapi.herokuapp.com/scores',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(data)
            })
            this.name = ""
            this.score = ""
        }

}
})