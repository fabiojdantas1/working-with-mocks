class User {
    constructor ({id, name, professional, age}) {
        this.id = parseInt(id)
        this.name = name
        this.professional = professional
        this.birthDay  = new Date().getFullYear() - age
    } 
}

module.exports = User;