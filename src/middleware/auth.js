
function User() { };

var users = [
  {
    uname: 'root',
    pwd: 'toor'
  },
  {
    uname: 't',
    pwd: 't'
  }
]

User.prototype = {

  login: function (user, callback) {
    let found = false;
    for (var i = 0; i < users.length; i++) {
      if (user.uname == users[i].uname && user.pwd == users[i].pwd) {
        found = true;
        break;
      }
    }
    if (found == true)
      callback(1)
    else
      callback(0)
  }

}


module.exports = User;