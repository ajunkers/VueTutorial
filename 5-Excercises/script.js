new Vue({
    el: '#app',
    data:{
        movie: 'Uncharted',
        relased: '2022'
    },
    methods:{
        isOld: function() {
            return this.relased > 2000 ? 'New' : 'Old';
        }
    }
});