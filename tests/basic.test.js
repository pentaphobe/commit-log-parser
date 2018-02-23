const expect = require('chai').expect
const parser = require('../log-parser')

describe('parser', () => {
  it('WILL parse a basic log without errors', () => {
    let log = `fix(utils) [#23] TAG general title
More body text`

    expect(parser.parse(log)).to.have.property('type', 'fix')
  })

  it('WILL complain on invalid logs', () => {
    let badLog = `fux(noobtils) [#23]`

    expect(() => parser.parse(badLog)).to.throw()
  })
})
