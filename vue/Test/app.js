var app = new Vue ({
    el:"#app",
    data: {
       alumni: 0,
       deans: 0,
       merit: 0,
       roach: 0,
       page: "test",
       result: "",
        questions: [
            {question:"How many different Bachelor Degrees are at Dixie State?",
                option1:"50",
                option2:"51",
                option3: "49",
                choice:""
                
            },
            {
                question:"What is the school's mascot's name?",
                option1:"Brooks",
                option2:"Brian",
                option3:"Rooks",
                choice:""
            },
            {
                question:"Who was the first person to graduate from Dixie State?",
                option1:"Mike Larn",
                option2:"Brooks",
                option3:"",
                choice:""
            },
            {
                question:"What year was Dixie founded?",
                option1:"",
                option2:"",
                option3:"",
                choice:""
            },
            
        ],
        submitted: false,
        methods:{
            answer: function(index){
                this.questions.forEach(function(question){
                    if(question.choice == "option1"){
                        
                    }
                    else if(question.choice == "option2"){
                        

                    }
                    else if(question.choice=="option3"){
                        
                    }
                })
            }
        },
        computed: {
            rank: function(){
                var complete=true;
                this.questions.forEach(function(question){
                    if(question.choice==""){
                        complete=false;
                    }
                })
                if(complete){
                    if(this.alumni>this.deans && this.alumni>this.merit && this.alumni>this.roach){
                        return "Alumni Ranking"
                    }
                    else if(this.deans>this.alumni && this.deans>this.merit && this.deans>this.roach){
                        return "Deans"
                    }
                    else if(this.merit>this.alumni && this.merit>this.deans && this.merit>this.roach){
                        return "Merit"
                    }
                    else if(this.roach>this.alumni && this.roach>this.deans && this.roach>this.merit){
                        return "Roach"
                    }
                }
            },
            check: function(option){

            }
        }
        
    }
})