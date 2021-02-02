/* myLib start */
/*;(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };
  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };
  window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
    window.myLib.removStatus = function(target) {
    target.classList.remove('popup-button-status');
  };
     window.myLib.addStatus = function(item) {
    item.classList.add('popup-button-status');
  //  console.log(item);
  }; 
})();*/
/* myLib end */
 /* popup start */

//document.addEventListener('DOMContentLoaded', function() {
  var popup_button = document.querySelector('.popup-button');
//  var v2p3h2= document.querySelector('.v2p3h2-0.iEkjLa');
//  myLib.addStatus(v2p3h2.parentElement);
  var showPopup = function(target) {
    target.classList.add('is-active');
  };
  var closePopup = function(target) {
    target.classList.remove('is-active');
  };
  var removStatus = function(target) {
    target.classList.remove('popup-button-status');
  };
     var addStatus = function(item) {
    item.classList.add('popup-button-status');
  }; 


  var q8c6tt = document.querySelector('.q8c6tt-0.iYciHm');//q8c6tt-0 iYciHm
  addStatus(q8c6tt);
  

  var closePopup_button = function() {
  	popup_button.setAttribute('style', 'display: none;');
  	removStatus(q8c6tt);
  }
  var showPopup_button = function() {
  	popup_button.setAttribute('style', 'display: flex;');
  }

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
 q8c6tt.addEventListener('click', function(e) {
   let over = e.target.className;
   let overTag = e.target.tagName;
  // *********
  var target = e.target;
  var popupClass = myLib.closestAttr(target, 'data-mpopup');
  var buttonStatus = myLib.closestItemByClass(target, 'popup-button-status');

     if (buttonStatus == null) {
        return;
     }
  //   myLib.removStatus(buttonStatus);
     if (popupClass === null) {
      return;
    }
   // e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    var popup_viber = document.querySelector('.popup-viber.is-active');
    var popup_call = document.querySelector('.popup-call.is-active');

   if (popup && !popup_viber && !popup_call) {
      showPopup(popup);
      closePopup_button();
  // addStatus(out);

}
});} else {
  

q8c6tt.onpointerenter = q8c6tt.onpointerleave = q8c6tt.onpointermove = handler;


 function handler(e) {
  if (e.type == 'pointerenter') {
   let over = e.target.className;
   let overTag = e.target.tagName;
  // *********
  var target = e.target;
  var popupClass = myLib.closestAttr(target, 'data-mpopup');
  var buttonStatus = myLib.closestItemByClass(target, 'popup-button-status');

  	 if (buttonStatus == null) {
  	  	return;
  	 }
  //	 myLib.removStatus(buttonStatus);
  	 if (popupClass === null) {
      return;
    }
   // e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    var popup_viber = document.querySelector('.popup-viber.is-active');
    var popup_call = document.querySelector('.popup-call.is-active');

   if (popup && !popup_viber && !popup_call) {
      showPopup(popup);
      closePopup_button();
      }
  // ****************** 
     } 
  if ((e.type == 'pointerleave') && (e.type !== 'pointermove'))  {
      let out = e.target;
      let outTag = e.target.tagName;
   addStatus(out);

 //  console.log(out, e.target);
    }
}
}
  let widgetElement = document.getElementById('gb-widget-6677');

  widgetElement.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-mpopup');

    if (popupClass === null) { return;}
 //   e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    var popupAll = document.querySelector('.popup-all.is-active');

    if (popup && (popup.classList[1] !== 'popup-all')) {
      showPopup(popup);
      }
      if (popupAll) {
          closePopup(popupAll);
      showPopup_button(); 
  	      return; 
      } 
  });

 widgetElement.addEventListener('click', function(e) {
    var target = e.target;
    var buttonStatus= document.querySelector('.popup-button-status');
    var popup_call = myLib.closestItemByClass(target, 'popup-call');
    var popup_viber = myLib.closestItemByClass(target, 'popup-viber');
    if ((popup_call || popup_viber) && myLib.closestItemByClass(target, 'popup-closes')) {
          var popup = myLib.closestItemByClass(target, 'Mpopup');
             closePopup(popup);
   // if (!buttonStatus) {myLib.addStatus(buttonStatus)}
    } 
    
    if (myLib.closestItemByClass(target, 'popup-closes') && !popup_viber && !popup_call) {
          var popup = myLib.closestItemByClass(target, 'Mpopup');

          closePopup(popup);
        	      showPopup_button();
                 if (buttonStatus) {removStatus(buttonStatus);
            }
           }
  });

//});
/* popup end */

