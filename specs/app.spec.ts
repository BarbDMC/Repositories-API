import app from '../app';

describe('App', () => {
  it('should start the Express application', () => {
    expect(app).toBeDefined();
  });
});