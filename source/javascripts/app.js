export default {
  init: function() {
    this.on('updated', function() {
      console.log('Updated!')
    });
    this.on('mount', function() {
      // right after the tag is mounted on the page
      console.log('mount!');
    });

  },
  getOpts: function() {
      return this.opts
  },

  setOpts: function(opts, update) {
      this.opts = opts

      if(!update) {
          this.update()
      }

      return this
  }
}
