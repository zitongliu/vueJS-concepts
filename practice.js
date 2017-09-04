new Vue({
  el: '#practice',

  data: function() {
    return {
      hobbies: ['Swimming', 'coding', 'movies', 'food'],
      newUserHobby: ''
    }
  },
  methods: {
    addHobby: function() {
      this.hobbies.push(this.newUserHobby);
      this.newUserHobby = '';
    }
  }
})
