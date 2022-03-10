new Vue({
    el: '#app',
    methods:{
        pressedKey: function() {
            alert("You press Shift - Enter!");
        },
        buttonListener: function () {
            alert("you click the WindowsKey+button!")
        }
    }
});