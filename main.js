new Vue({
  el: '#app',
  data: {
    name: 'Max',
    elements: []
  },
  methods: {
    changeName: function() {
      this.name = 'Anna'
    },
    addElement: function() {
      this.elements.push(this.elements.length + 1);
    }
  }
})
