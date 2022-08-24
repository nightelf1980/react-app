import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light col-md-12 ">
          <a class="navbar-brand" href="/">
            <img class="animate__animated animate__fadeIn" src="/img/artemis-logo-color.png" alt="logo" width="100px"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Cactus</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/">Suculentas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Productos a la venta</a>
              </li>
            </ul>
          </div>

      </nav>
      <div class="row">
          <h1 class="text-center">JARDINERÍA ARTEMIS</h1>
          <p class="text-center">Productos de Jardinería, plantas de interior y exterior, cactus y suculentas.</p>
      </div>
    </div>




  );
}

export default App;
