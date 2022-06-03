

// const imgOptions = {
//    threshold:0,
//    rootMargin: "0px 0px 50px 0px"
// };


// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () =>{
//     image.removeAttribute('data-src');
//     };
// };


// if ('IntersectionObserver' in window){
//     const imgObserver = new IntersectionObserver((items,observer) =>{
//         items.forEach((item) => {
//         item.remove;
//         })
//     }, imgOptions);

//     imagesToLoad.forEach((img) => {
//         imgObserver.observe(img);
//     });
// } else{

// }




// function preloadImage(img){
//    const src = img.getAttribute("data-src");
//    src.innerHTML("")
//    if(!src){
//        return;
//    }

//    img.src = src;
// }

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
   const src = img.getAttribute("data-src");
   if(!src){
       return;
   }
   img.src = src;
}

const imgOptions = {
   threshold:1,
   rootMargin: "0px 0px -10px 0px"
};

const imgObserver = new IntersectionObserver((entries,imgObserver) =>{
   entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      }else{
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
 });
 },imgOptions);

images.forEach(image => {
   imgObserver.observe(image);
});

