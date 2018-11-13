const app = new Vue({
    el: '#app',
    data: {
        posts: []
    },
    created() {
        fetch('https://arivkc4qr0.execute-api.us-west-2.amazonaws.com/dev/posts')
            .then(response => response.json())
            .then(json => {
                this.posts = json
            })
            
    }
})