# Specify the minimum version for CMake
cmake_minimum_required(VERSION 2.8)

# Project's name
project(OPENGL)

# Set the output folder where your program will be created
set(CMAKE_BINARY_DIR ${CMAKE_SOURCE_DIR}/../bin)
set(EXECUTABLE_OUTPUT_PATH ${CMAKE_BINARY_DIR})

# The following folder will be included
include_directories("${CMAKE_SOURCE_DIR}/../headers")

# add the files which are needed to generate the binary and also the name of the binary
add_executable(working ${PROJECT_SOURCE_DIR}/Main.cpp ${PROJECT_SOURCE_DIR}/stb.cpp ${PROJECT_SOURCE_DIR}/shaderClass.cpp ${PROJECT_SOURCE_DIR}/Texture.cpp ${PROJECT_SOURCE_DIR}/VBO.cpp ${PROJECT_SOURCE_DIR}/VAO.cpp ${PROJECT_SOURCE_DIR}/EBO.cpp)
target_link_libraries(working PRIVATE -lGLEW -lglfw -lGL -lm)