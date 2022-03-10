new Vue({
    el: '#app',
    data:{
        firstName: 'Andrea',
        lastName: 'Vidal'
    },
    methods: {
        getFullName: function(first, last) {
            return first + ' ' + last;
        }
    }
});