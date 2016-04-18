import Mocha from 'mocha';

Mocha.setup('bdd');

System.import(
    'app/specs/first-spec'
    ).then(() => {
  Mocha.checkLeaks();
  Mocha.run();
});
