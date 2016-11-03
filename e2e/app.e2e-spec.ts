import { Angular2FileUploadPage } from './app.po';

describe('angular-2-file-upload App', function() {
  let page: Angular2FileUploadPage;

  beforeEach(() => {
    page = new Angular2FileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
