
import './StudentPage.css';

function App() {
  return (
    <div class="container">
    <nav class="sidebar">
      <a href="#" class="logo">PES COLLEGE OF ENGINEERING</a>

      <div class="menu-content">
        <ul class="menu-items">
          <div class="menu-title">Student Page</div>

          <li class="item">
            <a href="#">Show seat position</a>
          </li>
          
        </ul>
      </div>
    </nav>

    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close"></i>
    </nav>

    <main class="main">
      <h1>Student Dashboard Content</h1>
    </main>

    <script src="admin.js"></script>
  </div>
  );
}

export default App;
