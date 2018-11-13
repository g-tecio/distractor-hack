const app = new Vue({
    el: '#app',
    data: {
        products: []
    },
    created () {
        //fetch('https://api.myjson.com/bins/74l63')
        fetch('http://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            this.products = json//.products
        })
    }
})