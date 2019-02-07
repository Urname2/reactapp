class User {
    constructor(authenticated = false, username, role, name) {
        this.authenticated = authenticated;
        this.username = username;
        this.role = role;
        this.name = name;
    }
}

export default User;