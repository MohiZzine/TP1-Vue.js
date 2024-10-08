new Vue({
  el: '#app',
  data: {
      titre: 'Cliquez moi!',
      compteur: 0,
      inputText: '',
      showWarning: false
  },
  methods: {
      changeTitle() {
          this.titre = 'Cliqué!';
      },
      increment() {
          this.compteur++;
      },
      decrement() {
          this.compteur--;
      },
      reset() {
          this.compteur = 0;
      },
      checkInput() {
          this.showWarning = this.inputText.includes(' ');
      }
  }
});
