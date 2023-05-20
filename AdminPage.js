
import './AdminPage.css';


function App() {
  return (
    <div className="App">
      <nav class="sidebar">
      <a href="#" class="logo">PES COLLEGE OF ENGINEERING</a>

      <div class="menu-content">
        <ul class="menu-items">
          <div class="menu-title">Admin Page</div>

          <li class="item">
            <a href="#">Faculty list</a>
          </li>

          <li class="item">
            <div class="submenu-item">
              <span>Subject lists</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Select the semester
              </div>
              <li class="item">
                <a href="#">2nd sem</a>
              </li>
              <li class="item">
                <a href="#">3rd sem</a>
              </li>
              <li class="item">
                <a href="#">4th sem</a>
              </li>
              <li class="item">
                <a href="#">5th sem</a>
              </li>
              <li class="item">
                <a href="#">6th sem</a>
              </li>
              <li class="item">
                <a href="#">7th sem</a>
              </li>
              <li class="item">
                <a href="#">8th sem</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <div class="submenu-item">
              <span>Students list</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Choose the semester
              </div>
              <li class="item">
                <a href="#">1st sem</a>
              </li>
              <li class="item">
                <a href="#"> 2nd sem</a>
              </li>
              <li class="item">
                <a href="#"> 3rd sem</a>
              </li>
              <li class="item">
                <a href="#"> 4th sem</a>
              </li>
              <li class="item">
                <a href="#"> 5th sem</a>
              </li>
              <li class="item">
                <a href="#"> 6th sem</a>
              </li>
              <li class="item">
                <a href="#"> 7th sem</a>
              </li>
              <li class="item">
                <a href="#"> 8th sem</a>
              </li>
             
            </ul>
          </li>

          <li class="item">
            <a href="#">Seat allocation</a>
          </li>

          <li class="item">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close"></i>
    </nav>

    <main class="main">
      <h1>Admin Dashboard Content</h1>
    </main>
    </div>
  );
}

export default App;
