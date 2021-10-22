const supertest = require( 'supertest' )
const should = require('should')

var server = supertest.agent( "https://localhost:4000" )

describe( 'First test with mocha', () => {
  it( 'Should return home page', () => {
    server
      .get( '/' )
      .expect( 'content-type', /text/ )
      .expect( 200 )
  })
})