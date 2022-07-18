#version 460 core

out vec4 FragColor;
in vec2 texCoords;

uniform sampler2D screenTexture;
uniform float gamma;

const float offset_x = 1.0f / 700.0f;  
const float offset_y = 1.0f / 700.0f;  

vec2 offsets[9] = vec2[]
(
    vec2(-offset_x,  offset_y), vec2( 0.0f,    offset_y), vec2( offset_x,  offset_y),
    vec2(-offset_x,  0.0f),     vec2( 0.0f,    0.0f),     vec2( offset_x,  0.0f),
    vec2(-offset_x, -offset_y), vec2( 0.0f,   -offset_y), vec2( offset_x, -offset_y) 
);

float kernel[9] = float[]
(
    1,  1, 1,
    1, -8, 1,
    1,  1, 1
);

void main()
{
    //edge detection
    //vec3 color = vec3(0.0f);
    //for(int i = 0; i < 9; i++)
    //    color += vec3(texture(screenTexture, texCoords.st + offsets[i])) * kernel[i];
    //FragColor = vec4(color, 1.0f);

    //inversing color
    FragColor = vec4(1.0f)-texture(screenTexture,texCoords);

    //grayscale
    //FragColor = texture(screenTexture,texCoords);
    //float average = (FragColor.r + FragColor.g + FragColor.b) / 3.0;
    //FragColor = vec4(average, average, average, 1.0);

    //gamma correction
    //vec4 fragment = texture(screenTexture, texCoords);
    //FragColor.rgb = pow(fragment.rgb, vec3(1.0f / gamma));
}