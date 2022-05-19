export default () => (
  <>
    <button class="btn-96"><span>Button</span></button>

    <style jsx>{`
      .btn-96 {
        all: unset;
        text-align: center;
        curosr: default;
        font-family: sans-serif;
        font-weight: 900;
        box-sizing: border-box;
        padding: 25px 50px;
        width: auto !important;
        height: auto !important;
      }
      .btn-96 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;

  perspective: 800px;
  transform-style: preserve-3d;
}

.btn-96 span {
  position: absolute;
  inset: 0;

  background: white;
  color: black;

  display: grid;
  place-items: center;

  transform-origin: top center;
  transform: rotateX(0deg);
  transition: 0.2s;
}
.btn-96:hover span {
  transform: rotateX(35deg);
}
.btn-96:before,
.btn-96:after {
  z-index: -1;
  content: "";

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: #ddd;

  transform: rotateX(0deg);
}

.btn-96:after {
  width: 0%;
  background: #ccc;
}

.btn-96:hover:after {
  animation: progress-bar 1.2s;
}
@keyframes progress-bar {
  0% {
    width: 0%;
    opacity: 1;
  }
  10% {
    width: 15%;
    opacity: 1;
  }
  25% {
    width: 25%;
    opacity: 1;
  }
  40% {
    width: 35%;
    opacity: 1;
  }
  55% {
    width: 75%;
    opacity: 1;
  }
  60% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}

    `}</style>
  </>
)