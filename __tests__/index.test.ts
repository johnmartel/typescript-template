describe('index test suite', () => {
  let originalConsole: Console;

  beforeEach(() => {
    originalConsole = global.console;
    // @ts-ignore
    global.console = {
      log: jest.fn(),
    };
  });

  afterEach(() => {
    global.console = originalConsole;
  });

  it('should print Hello World', () => {
    require('../src/index');
    expect(console.log).toHaveBeenCalledWith('Hello World');
  });
});
