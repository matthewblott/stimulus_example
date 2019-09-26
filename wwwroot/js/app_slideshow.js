(() => {

  const app = Stimulus.Application.start();

  import('./controllers/slideshow.js').then(module => {
    app.register('slideshow', module.default)
  });

})();