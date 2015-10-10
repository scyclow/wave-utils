import * as blah from '../src/index';

describe('Is this shit working?', () => {
  it('If this works, then probably', () => {
    let expectedOutput = blah.crap;
    let x = (function*(ouput){
      yield true;
    })(expectedOutput);

    expect(x.next().value).toBe(expectedOutput);
  });
});
