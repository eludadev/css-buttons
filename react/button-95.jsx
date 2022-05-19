export default () => (
  <>
    <button class="btn-95">
  <svg viewBox="0 0 241.016 241.016">
    <path
      d="M210.818,96.393l-49.202,1.644L108.753,0H83.279c-2.791,0-5.052,2.259-5.052,5.055l27.504,94.843l-50.097,2.037
			c-4.312,0.004-8.372,0.732-11.97,1.997l-18.925-32.14L8.857,71.788c-2.105,0.004-3.811,1.708-3.811,3.814l13.848,42.361v5.09
			L5.047,165.414c-0.002,2.105,1.704,3.814,3.809,3.814l15.885,0.004l19.257-32.713c3.514,1.197,7.455,1.885,11.637,1.885
			l50.288,2.046l-27.698,95.516c0,2.795,2.259,5.05,5.052,5.05h25.474l53.227-98.696l48.84,1.631
			c13.894,0,25.152-10.652,25.152-23.779C235.971,107.041,224.713,96.393,210.818,96.393z"
    ></path>
  </svg>
</button>

    <style jsx>{`
      .btn-95 {
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
      .btn-95 {
  --size: 80px;

  display: block;
  width: var(--size);
  aspect-ratio: 1;

  margin: 1rem auto;

  border-radius: 50%;

  position: relative;

  background: rgba(255, 255, 255, 0.2);
  background-clip: content-box;

  transition: 0.2s;
}

.btn-95:hover {
  background: rgba(255, 255, 255, 1);
}

.btn-95 svg {
  fill: white;
  padding: 15px;
}

.btn-95:hover svg {
  fill: black;
}
.btn-95:before {
  inset: 1px;
  content: "";
  position: absolute;
  pointer-events: none;
  outline: 5px solid white;
  border-radius: 50%;

  opacity: 0;
  transform: scale(2);

  transition: 0.2s;
}

.btn-95:hover:before {
  opacity: 1;
  transform: scale(1);
}

    `}</style>
  </>
)