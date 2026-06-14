# Impossible Login Page

An interactive web login form designed as a UX puzzle where the primary login button moves away from the mouse cursor.

## Overview

This project implements an unconventional user interface to explore frontend interactions. While the login form appears standard, the login button uses event handlers to prevent mouse clicks, forcing the user to find alternative navigation methods to submit the form.

## Features

- Mouseover Avoidance: The login button dynamically changes its position within the viewport when a mouse cursor hovers over it.
- Keyboard Navigation Bypass: Users can bypass the movement mechanic by using the Tab key to focus and click the button.
- Form Reset: A reset button clears input fields and restores the login button to its original layout position.

## Technical Structure

- HTML5: Defines the structure for the login form and input elements.
- CSS3: Handles the presentation, dark theme, and uses Flexbox for initial button alignment.
- JavaScript: Manages coordinate calculation for button relocation and form reset logic.     