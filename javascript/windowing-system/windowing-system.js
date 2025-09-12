// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/* 1. Define Size for storing the dimensions of the window */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/* 2. Define Position to store a window position */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

/* 3-4-5. Define a ProgramWindow class 
&& Add a method to resize the window
&& Add a method to move the window*/
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.resize(
      Math.max(
        1,
        Math.min(newSize.width, this.screenSize.width - this.position.x)
      ),
      Math.max(
        1,
        Math.min(newSize.height, this.screenSize.height - this.position.y)
      )
    );
  }

  move(newPosition) {
    this.position.move(
      Math.max(
        0,
        Math.min(newPosition.x, this.screenSize.width - this.size.width)
      ),
      Math.max(
        0,
        Math.min(newPosition.y, this.screenSize.height - this.size.height)
      )
    );
  }
}

/* 6. Change a program window */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
