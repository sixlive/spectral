import { Spectral } from '../../../spectral';
import { commonOasRules } from '../index';

const ruleset = { rules: commonOasRules() };

describe('path-declarations-must-exist', () => {
  const s = new Spectral();
  s.addRules({
    'path-declarations-must-exist': Object.assign(ruleset.rules['path-declarations-must-exist'], {
      enabled: true,
    }),
  });

  test('validate a correct object', async () => {
    const results = await s.run({
      swagger: '2.0',
      paths: { '/path/{parameter}': {} },
    });
    expect(results.length).toEqual(0);
  });

  test('return errors if parameter is empty', async () => {
    const results = await s.run({
      swagger: '2.0',
      paths: { '/path/{}': {} },
    });
    expect(results).toMatchSnapshot();
  });
});
