new Vue({
    el: '#app',
    methods:{
        clickedButton: function() {
            alert("Hay 2 eventos de click. Pero uno solo aparece una vez.");
        }
    }
});