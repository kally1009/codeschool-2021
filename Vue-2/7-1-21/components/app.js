Vue.component('blog-post',{
    props:['post'],
    template:`
        <div>
            <h3> {{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});
`new Vue({
    el:"#app"
})`





new Vue({
    el:'#app',
    data:{
        posts:[
            {
                id:1,
                title:'this title'
            },
            {
                id:2,
                title:"this title2"
            }
        ]
    }
})