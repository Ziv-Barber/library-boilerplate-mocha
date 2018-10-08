import { expect } from 'chai'
// assert

import * as someModule from '../lib/someModule'

/** @test {someModule} */
describe('someModule test suits', function () {
  // Executed before each test:
  beforeEach(done => {
    done()
  })

  it('#test()', done => {
    expect(someModule).to.be.an('object')
    // assert(123 === 123)
    done()
  })
})
