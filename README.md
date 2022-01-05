# vertical-slider

This app can be used as vertical slider block in your store theme.
## Note: If you want to alter the app, clone this repository and run 'npm i react-slick' and 'npm i slick-carousel' in react directory. (Only for app development)

# Steps to use this block in your store theme:
# step1:
Add echidna.vertical-slider@0.0.1 as dependancy in your store theme menifest.json file as shown below:

dependencies:{
"echidna.vertical-slider":"0.x"
}

# step2:
Add the block "vertical-slider" wherever you want to display the slider.

example: In home.jsonc =>
         {
         "store.home": {
         "blocks": [
          "vertical-slider"
              ]
           }
# step3:
Declare the block as shown below: (It is recommonded to copy the below block and make your changes with props)

 "vertical-slider":{
 "props":{
 "arrayOfImages":["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2uJRCXuUXYl9vvCEDyjwZqYr47-SipR9kkwxGqH69asRoT6JkEg-lPd6eUbRjn-rp8A&usqp=CAU",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnWwxf8BsDdKeXDMVb1bNm1QXQiJolPDVOZvpx4rkemw4LJF-tts2-6fib58_3KvTOlg&usqp=CAU"
                 ],
 "imageHeight":"200px",
 "imageWidth":"200px",
 "blockClass":"verticalSlider",
 "settings" :{
 "infinite": true,
 "speed": 500,
 "slidesToShow": 2,
 "slidesToScroll":1,
 "autoplay":true,
 "pauseOnHover":true
        }
      }
    },
  
 
# Props
       "arrayOfImages":                    Array           Add image urls here
       "imageHeight":                      string          you can set image or slider height here,It should be a string with px unit.(ex:"200px")
       "imageWidth":                       string          For setting image width.  
       "blockClass":                       string          class name you want to give for your block.
       "settings":                         object          Slider settings can be given here, this is an objectyou can find about this object in settings section below.
                                            
# settings
     
       "infinite":                         bolean        whether sliding should be done infinitly or not you can set here.
       "speed":                            number        Set the sliding speed (ex:"speed":500)
       "slidesToShow":                     number        Set how many slide it should display on screen(ex:slidesToShow":1) 
       "slidesToScroll":                   number        Set how many slides it should scroll at a time.
       "autoplay":                         boolean       Set slider should be in autoplay mode or not.
       "pauseOnHover":                     boolean       whether auto sliding should stop on hovering or not.
       
# Available CSS handles:
       .SliderContainer
       .buttonContainer
       .prevButton
       .nextButton
       .leftArrowHead
       .rightArrowHead
                                            
    
