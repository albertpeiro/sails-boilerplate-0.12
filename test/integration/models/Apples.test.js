describe('Apples', function() {
  it ('should not be empty', function(done) {
    Apple.find().exec(function (err, apples) {
      apples.length.should.be.eql(fixtures['apple'].length);

      done(err);
    });
  });
});
