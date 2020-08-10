# media-query-mixins

NOW WITH JAVASCRIPT BREAKPOINTS (see at the bottom)

Extremely lightweight, very basic mixin set for responsive MOBILE FIRST SCSS, JAVASCRIPT ~~and Stylus~~ development. **(Stylus is discontinued)**
Currently, it adheres to the following breakpoints (inclusive for mobile-first and exclusive for desktop-first):
* sm: 568px
* md: 768px
* lg: 1024px
* xl: 1280px

And orientations:
* portrait
* landscape

And helper mixins for arbitrary media queries:
* min(size)
* max(size)

#### To use it, @import the _mixin.scss or _mixin.styl file and just call as regular mixins without parameters
###### SCSS
```scss
.responsive {
  @include landscape {
      width: 50%;
  }
  @include protrait {
      width: 100%;
  }
  @include sm {
    width: 50%;
  }
  @include rSm {
    width: 100%;
  }
}
```
Or even better with SASS
```sass
.responsive
  +landscape
      width: 50%
  +protrait
      width: 100%
  +sm
    width: 50%
  +rMd
    width: 100%
```
Will compile to
```css
@media (orientation: landscape) {
  .responsive {
    width: 50%;
  }
}
@media (orientation: portrait) {
  .responsive {
    width: 100%;
  }
}
@media (min-width: 568px) {
  .responsive {
    width: 50%;
  }
}
@media (max-width: 767px) {
  .responsive {
    width: 100%;
  }
}
```
###### JAVASCRIPT
Import media-query-mixins/_mixins.js
Every function breakpoint accepts a function and parameters to be passed to it. It returns an object with { result: "result of the callback", match: "Breakpoint Name (sm, md, lg, xl)" } OR null if doesnt match
That way you can fallback the callbacks from max to min

```javascript
xl(txt => `it's all fine, ${txt}`, 'xl') || 
lg(txt => `it's all fine, ${txt}`, 'lg') || 
md(txt => `it's all fine, ${txt}`, 'md') || 
sm(txt => `it's all fine, ${txt}`, 'sm') || 
min(txt => `it's all fine, ${txt}`, 'min')
```

This would return { result: "it's all fine, md", match: 'md' } for medium screens

###### Desktop first approache
To reverse the mixins/functions, simply prepend them with a "r" in camel case, making them

- rSm
- rMd
- rLg
- rXl

and instead of *min*, use *max*

For example, a javascript fallback chain in desktop first would be

```javascript
rSm(txt => `it's all fine, ${txt}`, 'sm') ||
rMd(txt => `it's all fine, ${txt}`, 'md') || 
rLg(txt => `it's all fine, ${txt}`, 'xl') || 
rXl(txt => `it's all fine, ${txt}`, 'xl') || 
max(txt => `it's all fine, ${txt}`, 'max')
```
