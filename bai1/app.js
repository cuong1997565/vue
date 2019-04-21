new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://vuejs.org/v2/guide/',
        webJob: '<a href="https://vuejs.org/v2/guide/"> Click link 2</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name
        }
    },
})