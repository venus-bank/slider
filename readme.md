# super slider

```html
<div class="overflow-hidden">
  <div class="slider w-full flex text-6xl transition ease-in duration-500">
    <div class="slider-item min-w-[100%] h-full bg-red-300">1</div>
    <div class="slider-item min-w-[100%] h-full bg-green-300">2</div>
    <div class="slider-item min-w-[100%] h-full bg-yellow-300">3</div>
    <div class="slider-item min-w-[100%] h-full bg-blue-300">4</div>
    <div class="slider-item min-w-[100%] h-full bg-purple-300">5</div>
  </div>
</div>

<!------ button ------>
<div class="fixed bottom-10 left-1/2">
  <button class="px-2 py-1 bg-blue-700 text-white rounded" id="back-btn">
    back
  </button>

  <button class="px-2 py-1 bg-blue-700 text-white rounded" id="forward-btn">
    forward
  </button>
</div>

<!------ pagination ------>

<div class=" flex bg-blue-300 h-8">
  <div class="js-pagination-item">1</div>
  <div class="js-pagination-item">2</div>
  <div class="js-pagination-item">3</div>
  <div class="js-pagination-item">4</div>
  <div class="js-pagination-item">5</div>
</div>

<script>
  superSlide({
    slide: '.slider', // slides container
    backBtn: '#back-btn',
    forwardBtn: '#forward-btn',
    paginationItems: '.js-pagination-item', // pagination items
  });
</script>
```
