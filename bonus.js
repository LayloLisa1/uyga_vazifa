const database = {
    studentsList: {
        'xamidullo': {
            name: "xamidullo",
            age: 33,
            id: 123,
            tolov: false
        },
        'laylo':{
            name:"laylo",
            age:16,
            id:777,
            tolov:true

        },
        'mushtariy':{
            name:"mushtariy",
            age:31,
            id:555,
            tolov:true

        }
    },
    create(user) {
        this.studentsList[user.name] = user;
        return this.studentsList;
    },

    read(name) {
       
        return this.studentsList[name];
    },

    update(name, user) {
        if (this.studentsList[name]) {
            this.studentsList[name] = {...this.studentsList[name], ...user};
            return this.studentsList;
        } else {
            return "User not found!";
        }
    },

    delete(name) {
        delete this.studentsList[name];
        return "User deleted successfully!";
    }
};
database.create({
    name: "xamidullo",
    age: 33,
    id: 123,
    tolavat: false
});
console.log(database.studentsList);

database.update("xamidullo", {
    name: "azizbek",
    age: 21,
    tolov: true
});
database.update("laylo",{
    name:"mushtariy",
    age:30,
    tolov:false
});
database.update("mushtariy",{
    name:"laylo",
    age:16,
    tolov:true
});
console.log(database.studentsList);

database.delete("xamidullo");
console.log(database.studentsList);
