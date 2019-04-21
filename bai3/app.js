new Vue({
    el: '#vue-app',
    data: {
        name: '',
        a: 0,
        b: 0,
        age: 10,
        available: false,
        nearby: false
    },
    methods: {
  
    },
    computed: {
        addToA: function() {
            return this.a + this.age;
        },
        addToB: function() {
            return this.b + this.age;
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
})