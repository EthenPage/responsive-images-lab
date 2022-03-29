## Build Responsive Things In HTML.

- Images are always heavy in size. It is no point to use a very high quality image in a low resolution device while the case is completely different in high resolution one. High resolution devices have high Device Pixcel Ratio (DPR), which demands good quality of images. However, high DPR devices may not need heavy images in some cases. For example, 30x30 sized image. Do you need super high quality image for that?
- We need width and DPR contorlled image selection method, which makes our images responsive in every devices.
- Image selection for different types of devices with different width can be possible in html `img` markup tag.
- `srcset` attribute makes things easy for us.



## Table of Contains
- [Possible Ways](#possible-ways)
    - [By Depending only on DPR](#by-depending-only-on-dpr)
    - [By Specifing Width of Images](#by-specifing-width-of-images)
    - [By Using sizes Attribute](#by-using-size-attribute)
- [Special Thanks](#special-thanks)
- [Author](#author)
- [Date](#date)

## Possible Ways

### By Depending only on DPR:
- The image only changes with the change of Device Pixcel Ratio (DPR), not with the change of device width.

```html
    <img srcset="images/clock-240.jpg,
                 images/clock-480.jpg 2x,
                 images/clock-720.jpg 3x,
                 images/clock-960.jpg 4x,
                 images/clock-1920.jpg 8x" src="images/clock-240.jpg" alt="clocks">
```

- The downside of this method: It downloads the image no matter what the width is. Small width `div` containing image does not need to download high quality image. But this method does.
- This method should be avoided.

### By Specifing Width of Images:

- The image changes with not only for the width of the device or viewport but also for Device Pixcel Ratio (DPR).

```html
    <img srcset="images/clock-240.jpg 240w,
                 images/clock-480.jpg 480w,
                 images/clock-720.jpg 720w,
                 images/clock-960.jpg 960w,
                 images/clock-1920.jpg 1920w" src="images/clock-240.jpg" alt="clocks">
```

### By Using size Attribute:

- If the size of images is less than the view port, it is wise to apply the method with `sizes` attribute not to download heavy images.

```html
    <img srcset="images/clock-240.jpg 240w,
                 images/clock-480.jpg 480w,
                 images/clock-720.jpg 720w,
                 images/clock-960.jpg 960w,
                 images/clock-1920.jpg 1920w" 
         sizes="(min-width:760px) 50vw, 100vw" 
         src="images/clock-240.jpg" alt="clocks">
```

## Special Thanks

- [Kevin Powell YouTube](https://www.youtube.com/watch?v=2QYpkrX2N48)

## Author

Mirza Monirul Alam (Ethen)

## Date: 
Created: March 29, 2022
