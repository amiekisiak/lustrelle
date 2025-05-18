document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  })

   function openModal(src) {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      modal.style.display = "block";
      modalImg.src = src;
    }

    function closeModal() {
      document.getElementById("imageModal").style.display = "none";
    }

     const img = document.getElementById("zoom-img");

  img.addEventListener("mousemove", function(e) {
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";
  });

  img.addEventListener("mouseleave", function() {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
  });