function openRainDust() {
    document.getElementById("raindust").style.display = "block";
    document.getElementById("raindust-fr").innerHTML = `<iframe width="560" height="315" src='https://www.youtube.com/embed/eVa1CVopRD8' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }

  function closeRainDust() {
    document.getElementById("raindust").style.display = "none";
    document.getElementById("raindust-fr").innerHTML = "";
  }