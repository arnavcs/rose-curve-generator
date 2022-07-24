# Rose Curve Generator
This program uses p5.js, a javascript library for graphics, in order to parametrically generate rose curves. You can try it out at [arnavcs.github.io/rose-curve-generator](https://arnavcs.github.io/rose-curve-generator/).

## What is a Rose Curve?
Rose curves, also knows as Rhodonea curves, are parametrically defined most easily through the polar equation $r = a \cos(k \theta)$, but can also be defined according to the following parametric equation:
$$x(\theta) = a \cos(\frac{n}{d}\theta)\cos(\theta)$$
$$y(\theta) = a \cos(\frac{n}{d}\theta)\sin(\theta)$$

## How to use the Website?
The values of $a$ is chosen automatically based on the size of the window. If the window is resized, refresh the page to change the values of $a$.

The values of $n$ and $d$ are based on the relative position of the user's mouse on the window area. Move the mouse in order to change the values of $n$ and $d$.
