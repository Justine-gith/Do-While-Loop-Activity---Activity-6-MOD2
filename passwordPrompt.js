function password() {
  let loggedIn = true;
  let password;
  
  do{
      password = window.prompt(`Enter your password`);
  
      if(password === "justinepogi17"){
          loggedIn = true;
          alert("Access granted");
      }
      else{
          alert("Incorrect, try again");
      }
  }  while(!loggedIn)
}