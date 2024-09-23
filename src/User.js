class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if(this.password === true){
      console.log(`${this.username} has logged in successfully.`)
    } else {
      throw Error('Incorrect password')
    }
  }
   logout(){
    this.loggedIn = false;
    console.log(`${this.username} has logged out.`);
   }
}

module.exports = User
