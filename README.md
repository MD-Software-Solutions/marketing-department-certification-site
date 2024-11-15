NOTES ON MAKING THE POP VIDEO PLAYER for the page 'programVideo.html'

I made the html perfect so all you gotta is the JS, so don't mess with the html, because it is correct.

WHAT YOU NEED TO DO FOR JS:

Create a open and then a close function for both #videoModal and #VideoModal-side.

Open Func:
Grab the id from the html (ex:videoModal) and then add the css styling: display:block to the class modal inside of video.css.
This is because the object/window for the video start at display: none to hide it, so just add on the display:block styling to make it show.

Pop up animation for open func: the next part is to add to the classlist for modal: .modal.show, which will animation the popup,
since the modal class start at opacity 0 and scale .9, the class .show will scale it back up and make it visisble, NOTE you need to have a 
delay element in your function to delay the adding of the .show class


Close func:
Do the same thing as open func, but in reverse order, grabbed the same id as before, and then first thing you should do is to remove the class
.show from the .modal classlist, and then in your delay element, change the css styling from display:block to none.


Now create two set of these both for videoModal and videoModal-Side