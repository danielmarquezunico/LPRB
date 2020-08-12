import React from "react";


class footer extends React.component {
  render() {
    return (
      <div className="container-fluid">
        <div class="col-sm-7 col-md-7 col-lg-7 col-xl-8 text-justify">
    <div class="embed-responsive embed-responsive-21by9">
      <video id="imagen" src=""
      autoplay
      muted
      loop></video>
    </div>
  </div>
  </div>
  <br>
  <br>
  <div class="p-3 mb-2 bg-danger text-white">
  <section id="contactanos">
    <form>
      <div class="form-group row"  class="embed-responsive embed-responsive-21by9">
        <label for="staticEmail" class="col-sm-5 col-md-5col-lg-5 col-xl-5-form-label">Email</label>
        <div class="col-sm-10" class="embed-responsive embed-responsive-21by9">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="deja tu Email">
        </div>
      </div>
      </div>
    </form>
    <h1>Para adquirir mas informacion: </h1>
  <section>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">CORREO ELECTRONICO</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu direccion de correo electronico con alguien mas</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Revisar</label>
      </div>
     
      <button type="button" class="btn btn-secondary">Enviar</button>
    </form>
  </section> 

  </section>

  
 
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/q6uMxPuE1NA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <footer class="font-weight-light" class="font-weight-bold">    2020 Daniel Antonio Marquez 11-3 </footer>
</body>
  </html>
      </div>
    );
  }
}
export default footer;