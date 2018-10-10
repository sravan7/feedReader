/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

  describe('RSS Feeds', function() {
    let allFeedsLength = allFeeds.length;

    //checks allFeeds the to be Defined and non Empty
    it('all Feeds are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeedsLength).not.toBe(0);
    });

    // checks allFeeds.url and allFeeds.name are define and all are non empty
    it('all urls and names are defined and are non empty', function() {
      console.log(allFeedsLength, allFeeds[1].url.length);
      allFeeds.forEach(function(feed) {
        expect(feed.url && feed.name).toBeDefined();
        expect(feed.url.length && feed.name.length).not.toBe(0);
      });
    });
  });

  describe('the Menu test', function() {
    //checks menu is hidden by default (after page load)
    it('Menu is hidden by defualt', function() {
      let hidden = $('.menu-hidden');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    //checks menu was visible and hidden (toggle between )  on CLick Hamurger icon
    it('Menu was hide and show test', function() {
      const menu = $('.menu-icon-link');
      menu.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menu.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });
    // checks arre all feed rows are to be defined
    it("Initial Entries are exist", function(done) {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });

  });

  describe('New Feed Selection', function() {
    let oldFeed, newFeed;
    beforeEach(function(done) {
      let z = $('.feed')
      $('.feed').empty();
      loadFeed(0, function() {
        oldFeed = $('.feed').html();
        loadFeed(1, function() {
          newFeed = $('.feed').html();
          done();
        });
      });
    });

    //checks feed content are not similar
    it('new feed loaded', function(done) {
      let z = $('.feed')
      //console.log(` it ${oldFeed}, ${newFeed}`);
      expect(oldFeed != newFeed).toBe(true);
      done();
    });

  });

}());
