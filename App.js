
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="collegeName">P E S COLLEGE OF ENGINEERING</div>

    <input type="checkbox" id="flip"/>
    <div class="cover">
      <div class="front">
        <img src="https://github.com/Kshithijb20/images/blob/main/loginImg.jpg?raw=true" alt=""/>
        <div class="text">
            <p class="text-1">Welcome back folks!<br/> Login to know</p>
            <p class="text-2">your seat position</p>
        </div>
      </div>
      <div class="back">
        <img class="backImg" src="https://github.com/Kshithijb20/images/blob/main/register.jpg?raw=true" alt=""/>
        <div class="text">
          <p class="text-1">Admin block</p>
          <p class="text-2">Only for authorised person</p>
        </div>
      </div>
    </div>
    <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Student Login</div>
          <form action="#">
            <div class="input-boxes">
              <div class="input-box">
                
                <input type="text" placeholder="Enter your USN" required/>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div class="text"><a href="passwordRecovery.html" target="_blank">Forgot password?</a></div>
              <div class="button input-box">
                <input type="submit" value="Submit"/>
              </div>
              <div class="text sign-up-text">Are you an admin? <label for="flip">Login here</label></div>
            </div>
        </form>
      </div>
        <div class="signup-form">
           <div class="collegeName1">P E S COLLEGE OF ENGINEERING</div> 

          <div class="title">Admin LogIn</div>
        <form action="#">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Enter user name" required/>
              </div>
              
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter secret key" required/>
              </div>
              <div class="button input-box">
                <input type="submit" value="Submit"/>
              </div>
              <div class="text sign-up-text">Are you a student ? <label for="flip">Login here</label><br/>Contact developer if forgotten secret key</div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  );
}

export default App;
