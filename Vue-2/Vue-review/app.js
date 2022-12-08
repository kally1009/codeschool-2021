var app = new Vue({
    el: "#app",
    data: {
        page: "home",
        message: "",
        selected: "",
        selected_2: "",
        options: [
            {
                text:'One',
                value:'A'
            },
            {
                text:"Two",
                value: 'B'
            },
            {
                text: "third",
                value: 'C'
            }
        ]
    },
    methods:{
        makeActive: function(item){
            this.page=item;
        }
    }
})