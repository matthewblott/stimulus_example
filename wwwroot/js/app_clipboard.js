(() => {

  const app = Stimulus.Application.start();

  import('./controllers/clipboard.js').then(module => {
    app.register('clipboard', module.default)
  });

})();