var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        name: "",
        city: ""
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));

    },
    methods: {

        add: function(name,city){
            this.usersService.add(name,city).then(response=>{
                this.usersService.get().then(response=>(this.users=response.data));
            });
        },
        remove: function(index){
            
            this.usersService.remove(index).then(response=>{
                this.usersService.get().then(response=>(this.users=response.data));
            });
        },
        modify: function(index){
            name = document.getElementById('newName' + index).value;
            city = document.getElementById('newCity' + index).value;
            this.usersService.modify(index,name,city).then(response=>{
                this.usersService.get().then(response=>(this.users=response.data));
            });
        }
    }
})