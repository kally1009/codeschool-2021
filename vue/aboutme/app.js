var app = new Vue ({
    el: "#app",
    data : {
        gretting:"Hello! Learn more about me here",
        name:"Kalicia",
        major:"Software Engineering",
        what_im_typing:"",
        info: false
    },
    methods:{
        changeName: function(newName){
            this.name = newName
        },
        click: function(){
            this.info = true;
        }
    }
})