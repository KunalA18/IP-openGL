#version 460 core
// Outputs colors in RGBA
out vec4 FragColor;

//Inputs color from the Vertex Shader
in vec3 color;
// Inputs the texture coordinates from the Vertex Shader
in vec2 texCoord;

uniform sampler2D tex0;

void main()
{
   FragColor = texture(tex0,texCoord);
}
