export default () => (
  <>
    <button class="btn-8"><span>Button</span></button>

    <style jsx>{`
      .btn-8 {
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
      .btn-8 {
  --tilt: 40px;

  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-8 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-8:before,
.btn-8:after {
  content: "";
  z-index: -1;
  width: calc(100% + var(--tilt));
  height: 100%;

  position: absolute;
  top: 0;
  background: white;
  clip-path: polygon(0 0, calc(100% - var(--tilt)) 0, 100% 100%, 0 100%);
  transition: transform 0.6s;
}
.btn-8:before {
  left: calc(-100% - var(--tilt));
}
.btn-8:after {
  left: 100%;
  transform: rotate(180deg);
}
.btn-8:hover:before {
  transform: translateX(100%);
}
.btn-8:hover:after {
  transform: rotate(180deg) translateX(100%);
}

    `}</style>
  </>
)