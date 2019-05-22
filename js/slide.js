export default class Slide {
  // Construtor da classe
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  // Inicia o evento
  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  // Evento de movimento
  onMove() {
    
  }

  // Finaliza o evento
  onEnd() {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  // Adiciona os eventos ao slide
  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  // Realiza os bind`s dos eventos
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  // Método de inicialização do slide
  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
