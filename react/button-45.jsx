export default () => (
  <>
    <button class="btn-45"><span>Button</span></button>

    <style jsx>{`
      .btn-45 {
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
      .btn-45 {
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

.btn-45 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-45:before,
.btn-45:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;

  background: #000;
  transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
  will-change: transform;
}
.btn-45:hover:before,
.btn-45:hover:after {
  transform: translateX(100%);
}
.btn-45:after {
  background: #fff;
  transition-delay: 0.1s;
}

    `}</style>
  </>
)