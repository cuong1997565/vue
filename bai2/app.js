new Vue({
    el: '#vue-app',
    data: {
        age : 25
    },
    methods: {
        add: function(inc){
           this.age += inc;
        },
        subract: function(dec) {
            this.age -= dec;
        },
        logName: function() {
            console.log("name");
        },
        logAge: function() {
            console.log("age");
        }
    },
})