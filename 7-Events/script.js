new Vue({
    el: '#app',
    methods:{
        clickedButton: function() {
            alert("Clicked!");
        },
        clickedButton2: function(message, event) {
            console.log(event);
            alert(message);
        }
        
    }
});