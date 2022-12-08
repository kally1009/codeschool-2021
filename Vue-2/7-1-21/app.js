Vue.component('button-counter',{
    data: function(){
        return{
            count: 0
        }
    },
    template:'<button v-on:click="count++"> You Clicked me {{ count }} times.</button>'
});
Vue.component('blog-post',{
    props:['title'],
    template:'<h3> {{ title }}</h3>'
})
new Vue ({
    el:'#app'
})