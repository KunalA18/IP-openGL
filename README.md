# Image Processing using OpenGL Compute Shaders

## ALGORITHMS IMPLEMENTED
- <b>Color inversion</b> <br>
 We have access to each of the colors of the render output so it's not so hard to return the inverse of these colors in the fragment shader. We take  the color of the screen texture and inverse it by subtracting it from 1.0:
 
- <b>Grayscale conversion</b> <br>
We remove all colors from the scene except the white, gray and black colors; effectively grayscaling the entire image. This is done by taking all the color components and averaging their results

- <b>Edge detection</b> <br>
   For this we use a kernel(or convulation matrix) which multiplies the surrounding pixels by several weights determined in the kernel and balances the      result by multiplying the current pixel by a large negative weight.<br>
   ![Screenshot from 2022-04-07 15-39-26](https://user-images.githubusercontent.com/83249996/162176101-b8977414-ca55-473c-91f8-20d978d6cd5a.png)<br>
   This kernel highlights all edges and darkens the rest, which is pretty useful when we only care about edges in an image.

- <b>Gamma correction</b> <br>
  <image src="https://user-images.githubusercontent.com/83249996/162174705-557b1bdf-70c9-469e-bf1d-aeb55664b2e8.png" alt = "original" width = 200><br>
  The idea of gamma correction is to apply the inverse of the monitor's gamma to the final output color before displaying to the monitor.We multiply each   of the linear output colors by the inverse gamma curve (making them brighter) and as soon as the colors are displayed on the monitor, the monitor's       gamma curve is applied and the resulting colors become linear. We effectively brighten the intermediate colors so that as soon as the monitor darkens     them, it balances all out.
  
<br>
<p align="center">
  
## PRE-REQUISITES
  ```
  sudo apt-get install cmake pkg-config
  sudo apt-get install mesa-utils libglu1-mesa-dev freeglut3-dev mesa-common-dev
  sudo apt-get install libglew-dev libglfw3-dev libglm-dev
  sudo apt-get install libao-dev libmpg123-dev
  ```
## TESTING CODE
  ``` Note: You will have to change the path of images in Main.cpp and Gamma.cpp files. Also change the path of shaders in ShaderClass.cpp ```
  1. Clone the repository
  ```
  git clone https://github.com/KunalA18/IP-openGL.git
  ```
  2. Build files and test
  ```
  cd IP-openGL
  cd build
  cmake ../src
  make
  cd ../bin
  ./working
  ```
  
## OUTPUT  
<h3> Original Image </h3>  
<image src="https://user-images.githubusercontent.com/83249996/162069982-9b99476b-c0a7-42c9-bab3-6ec0a5f695ff.png" alt = "original" width = 350>
</p>   
  
Color Inversion             |  Grayscale conversion
:-------------------------:|:-------------------------:
<image src="https://user-images.githubusercontent.com/83249996/162070023-0ad382be-b9b4-40bb-b746-6e5c6fc257ff.png" alt = "inversion" width = 350>  | <image src="https://user-images.githubusercontent.com/83249996/162070050-8df01f17-2380-4c70-abc6-c1f42c2e66b1.png" alt = "grayscale" width = 350> 
  
Edge detection             |  Gamma correction
:-------------------------:|:-------------------------:
<image src="https://user-images.githubusercontent.com/83249996/162070085-157dc5fb-da0b-46f6-b8f9-889f2454b866.png" alt = "edge-detection" width = 350> |   <image src="https://user-images.githubusercontent.com/83249996/162070112-c7bce182-80f7-4010-82b8-201f4f90118a.png" alt = "gamma_correction" width = 350> 



 
    

