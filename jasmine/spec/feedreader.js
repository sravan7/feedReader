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

         //checks the allFeeds to be Defined and non Empty
        it('all Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeedsLength).not.toBe(0);
        });

        // checks allFeeds.url and allFeeds.name are define and all are non empty
        it('all urls and names are defined and are non empty', function(){
          console.log(allFeedsLength,allFeeds[1].url.length );
            for(let i=0;i<allFeedsLength;i++){
              expect(allFeeds[i].url && allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].url.length && allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

describe('the Menu test' ,function(){
  //let spyE = spyOnEvent($('.menu-link-icon'), 'click');
  //console.log(hidden);
  //checks menu is hidden by default (after page load)
    it('Menu is hidden by defualt', function(){
      let  hidden=$('.menu-hidden');
        expect(hidden).toBeDefined();
    });

    //checks menu was visible and hidden (toggle between )  on CLick Hamurger icon
    it('Menu was hide and show test', function(){
      const menu = $('.menu-icon-link');
      menu.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menu.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });


});

describe('Initial Entries', function(){
  beforeEach(function(done){
    loadFeed(0, function(){
      done();
    });
  });
    // checks arre all feed rows are to be defined
  it("Initial Entries are exist", function(done){
      expect($('.entry')).toBeDefined();
      done();
  });

});

describe('New Feed Selection', function(){
  let firstEntry, lastEntry;
    beforeEach(function(done){
      let z = $('.feed')
      $('.feed').empty();
      loadFeed(0, function(){
        firstEntry = $('.feed').find(allFeeds.url);
        console.log(`first call  ${firstEntry.innerHtml}`);
        done();
      })
      loadFeed(0, function(){
        lastEntry = $('.feed').find(allFeeds.url);
        console.log(` 2nd call ${lastEntry}`);
        done();
      });

    });
    //checks feed content are not similar
    it('new feed loaded', function(done){
      let z = $('.feed')
        console.log(` it ${firstEntry}, ${lastEntry}`);
      expect(firstEntry!=lastEntry).toBe(true);
        done();
    });

});

}());
