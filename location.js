(function () {
  // drag&drops

  let limits = {
    bottom:
      window.index.container.offsetHeight +
      window.index.container.offsetTop -
      window.index.form.offsetHeight,
    top: window.index.container.offsetTop,
    left: window.index.container.offsetLeft,
    right:
      window.index.container.offsetWidth +
      window.index.container.offsetLeft -
      window.index.form.offsetWidth,
  };

  window.index.hand.onmousedown = function (event) {
    let shiftX = event.clientX - window.index.form.offsetLeft;
    let shiftY = event.clientY - window.index.form.offsetTop;

    window.index.form.style.position = "absolute";
    window.index.form.style.margin = 0;
    window.index.form.style.zIndex = 1000;

    function moveAt(evt) {
      let newPositionX = evt.clientX - shiftX;
      let newPositionY = evt.clientY - shiftY;
      if (newPositionX < limits.left) newPositionX = limits.left;
      else if (newPositionX > limits.right) newPositionX = limits.right;
      if (newPositionY < limits.top) newPositionY = limits.top;
      else if (newPositionY > limits.bottom) newPositionY = limits.botoom;
      window.index.form.style.left = newPositionX + "px";
      window.index.form.style.top = newPositionY + "px";
    }

    function onMouseMove(event) {
      moveAt(event);
    }

    document.addEventListener("mousemove", onMouseMove);

    window.index.form.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      window.index.form.onmouseup = null;
    };
  };
})();
