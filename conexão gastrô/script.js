function openModal(personId) {
    var modal = document.getElementById("modal");
    var photo = document.getElementById("modal-photo");
    var name = document.getElementById("modal-name");
    var bio = document.getElementById("modal-bio");
  
    // Defina as informações do modal com base no ID da pessoa
    if (personId === 1) {
      photo.src = "foto1.jpg";
      name.innerText = "Nome da Pessoa 1";
      bio.innerText = "Biografia da Pessoa 1";
    } else if (personId === 2) {
      photo.src = "foto2.jpg";
      name.innerText = "Nome da Pessoa 2";
      bio.innerText = "Biografia da Pessoa 2";
    }
    // Defina mais informações de pessoas aqui
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  