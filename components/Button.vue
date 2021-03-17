<template>
  <div class="btn-bg Pokemon">
    <div class="btn-group">
      <div class="btn ball">
        <button>
          <div class="pokemon-ball"></div><a>Shop Now<span data-letters="Go!"></span><span data-letters="Go!"></span></a>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-bg {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: inherit;
}

.btn-bg.Pokemon .btn-group .ball button {
  border: 3px solid #50514f;
  border-radius: 5px;
  background: transparent;
  overflow: hidden;
  position: relative;
}
.btn-bg.Pokemon .btn-group .ball button:hover {
  border-color: #85B5CE;
}
.btn-bg.Pokemon .btn-group .ball button:hover .pokemon-ball::before {
  transform: translate3d(0, -100%, 0);
  transition: transform 0.25s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.btn-bg.Pokemon .btn-group .ball button:hover .pokemon-ball::after {
  transform: translate3d(0, 100%, 0);
  transition: transform 0.25s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.btn-bg.Pokemon .btn-group .ball button:hover a {
  transition: none;
  color: transparent;
  z-index: 999;
}
.btn-bg.Pokemon .btn-group .ball button:hover a::before {
  transform: translate3d(100%, 0, 0);
}
.btn-bg.Pokemon .btn-group .ball button:hover a span:first-child::before,
.btn-bg.Pokemon .btn-group .ball button:hover a span:nth-child(2)::before {
  transition-delay: 0.3s;
  transform: translate3d(0, 0, 0);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.btn-bg.Pokemon .btn-group .ball button .pokemon-ball {
  position: absolute;
  content: 'Go!';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.btn-bg.Pokemon .btn-group .ball button .pokemon-ball::before,
.btn-bg.Pokemon .btn-group .ball button .pokemon-ball::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #85B5CE;
  transform: translate3d(0, 0, 0);
  transition: transform 0.25s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.btn-bg.Pokemon .btn-group .ball button .pokemon-ball::after {
  top: 50%;
  background: #85B5CE;
}
.btn-bg.Pokemon .btn-group .ball button a {
  color: #1C2437;
  font-weight: 600;
  font-size: 1.5em;
  transition: color 0.5s 0.25s;
  overflow: hidden;
  display: inline-block;
  position: relative;
  z-index: 999;
}
.btn-bg.Pokemon .btn-group .ball button a::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 5px;
  background: #50514f;
  top: calc(50% - 2.5px);
  transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  transform: translate3d(-100%, 0, 0);
}
.btn-bg.Pokemon .btn-group .ball button a span {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.btn-bg.Pokemon .btn-group .ball button a span::before {
  position: absolute;
  content: attr(data-letters);
  left: 0;
  width: 100%;
  color: #EEF0F2;
  transition: transform 0.5s;
}
.btn-bg.Pokemon .btn-group .ball button a span:first-child::before {
  top: 0;
  color: #85B5CE;
  transform: translate3d(0, 100%, 0);
}
.btn-bg.Pokemon .btn-group .ball button a span:nth-child(2) {
  top: 50%;
}
.btn-bg.Pokemon .btn-group .ball button a span:nth-child(2)::before {
  bottom: 0;
  transform: translate3d(0, -100%, 0);
}
.btn-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
}
@media screen and (max-width: 480px) {
  .btn-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
.btn {
  margin: 0 30px 30px 30px;
  display: block;
}

button {
  cursor: pointer;
  overflow: visible;
  outline: none;
  color: #fff;
  position: relative;
  letter-spacing: 0.05em;
  font-weight: 400;
  padding: 0.5rem 1rem 0.3rem 1rem;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 0.7em;
}
button a {
  text-decoration: none;
}

</style>