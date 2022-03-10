new Vue({
    el: '#app',
    data: {
        text: '',
    },
    methods: {
        update: function(event) {
            this.text = event.target.value
        },

        clickEvent: function() {
            alert("- Funciona el boton? \n\r - Si!");
        }
    }
});