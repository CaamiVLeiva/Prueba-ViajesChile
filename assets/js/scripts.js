$(document).ready(function () {
  // Smooth scrolling para la navegación
  $("a.nav-link").on("click", function (event) {
    console.log("Clicked!"); // Verifica que el evento de clic se activa
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      console.log("Hash:", hash); // Verifica que el hash se está capturando correctamente
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 56,
        },
        800
      );
    }
  });
});
