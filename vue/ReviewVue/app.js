var app = new Vue({
    el:"#app",

    data:{
        greeting:"Mouse Event, V-bind, Global Events",
        clicked: false,
        hovering: false,
        position:"right",
        names: [
            "bob",
            "jill",
            "sam"
        ],
        piece_x:0,
        piece_y:0,
        goal_x:0,
        goal_y:0
    },
    created:function(){
        window.addEventListener("keydown", this.keyEvents);
        this.goal_x=Math.floor(Math.random()*20) * 15;
        this.goal_y=Math.floor(Math.random()*20) * 15;

    },
    methods:{
        click: function(){
            this.clicked= !this.clicked;
        },
        mouseOver: function(){
            this.hovering=true;
        },
        mouseLeave: function(){
            this.hovering=false;
        },
        keyEvents:function(event){
            if(event.which == 39){
                event.preventDefault()
                this.moveRight();
            }
            else if(event.which == 37){
                event.preventDefault();
                this.moveLeft();
            }
            else if(event.which == 38){
                event.preventDefault();
                this.moveUp();
            }
            else if(event.which==40){
                event.preventDefault();
                this.moveDown();
            }
            },
            moveRight:function(){
                this.position="right";
                this.piece_x += 15;
            },
            moveLeft:function(){
                this.position="left";
                this.piece_x -= 15;
            },
            moveUp:function(){
                this.position="up"
                this.piece_y-=15;
            },
            moveDown:function(){
                this.position="down"
                this.piece_y+=15
            }
        },

    computed:{
        computeClass:function(){
            return{
                purple:this.clicked,
                bold:this.hovering
            }
        },
        positionClass:function(){
            return{
                'text-left':this.position == "left",
                'text-right': this.position == "right"
            }
        },
        pieceStyle: function(){
            return{
                left: this.piece_x + "px",
                top: this.piece_y+"px"
                
            }
        },
        goalStyle: function(){
            return{
                left: this.goal_x + "px",
                top: this.goal_y + "px"
            }
        },
        victory: function(){
            return this.piece_x == this.goal_x && this.piece_y==this.goal_y
        }
    }
})