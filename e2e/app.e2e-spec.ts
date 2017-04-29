import { ElectronNg2SoundboardPage } from './app.po';

describe('electron-ng2-soundboard App', () => {
  let page: ElectronNg2SoundboardPage;

  beforeEach(() => {
    page = new ElectronNg2SoundboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
