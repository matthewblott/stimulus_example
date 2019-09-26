(() => {

  const app = Stimulus.Application.start();

  import('./controllers/hello.js').then((module) => app.register('hello', module.hello));

  import('./controllers/foo.js').then(module => {
    app.register('hello', module.default)
  });

  import('./controllers/clipboard.js').then(module => {
    app.register('clipboard', module.default)
  });

})();