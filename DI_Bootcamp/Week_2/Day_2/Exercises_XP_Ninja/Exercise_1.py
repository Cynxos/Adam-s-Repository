import random

class Cell:
    def __init__(self, state=False):
        self.state = state

    def is_alive(self):
        return self.state

    def set_alive(self):
        self.state = True

    def set_dead(self):
        self.state = False

class Grid:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.grid = [[Cell() for _ in range(cols)] for _ in range(rows)]

    def initialize(self, live_cells):
        for cell in live_cells:
            self.grid[cell[0]][cell[1]].set_alive()

    def display(self):
        for row in self.grid:
            print("".join(['O' if cell.is_alive() else '.' for cell in row]))
        print("\n")

    def get_neighbours(self, row, col):
        neighbours = []
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue
                if 0 <= row + i < self.rows and 0 <= col + j < self.cols:
                    neighbours.append(self.grid[row + i][col + j])
        return neighbours

    def update(self):
        new_grid = [[Cell() for _ in range(self.cols)] for _ in range(self.rows)]
        for row in range(self.rows):
            for col in range(self.cols):
                alive_neighbours = sum(1 for cell in self.get_neighbours(row, col) if cell.is_alive())
                if self.grid[row][col].is_alive():
                    if alive_neighbours < 2 or alive_neighbours > 3:
                        new_grid[row][col].set_dead()
                    else:
                        new_grid[row][col].set_alive()
                else:
                    if alive_neighbours == 3:
                        new_grid[row][col].set_alive()
        self.grid = new_grid

import time

class GameOfLife:
    def __init__(self, rows, cols, initial_state):
        self.grid = Grid(rows, cols)
        self.grid.initialize(initial_state)

    def run(self, generations, delay=1):
        for _ in range(generations):
            self.grid.display()
            self.grid.update()
            time.sleep(delay)

if __name__ == "__main__":
    initial_state = [(1, 2), (2, 2), (3, 2)]
    game = GameOfLife(5, 5, initial_state)
    game.run(10, 0.5)

class ExpandableGrid(Grid):
    def __init__(self, initial_state, max_size=10000):
        super().__init__(max_size, max_size)
        self.initialize(initial_state)

    def update(self):
        new_grid = [[Cell() for _ in range(self.cols)] for _ in range(self.rows)]
        for row in range(self.rows):
            for col in range(self.cols):
                alive_neighbours = sum(1 for cell in self.get_neighbours(row, col) if cell.is_alive())
                if self.grid[row][col].is_alive():
                    if alive_neighbours < 2 or alive_neighbours > 3:
                        new_grid[row][col].set_dead()
                    else:
                        new_grid[row][col].set_alive()
                else:
                    if alive_neighbours == 3:
                        new_grid[row][col].set_alive()
        self.grid = new_grid
        self.trim_grid()

    def trim_grid(self):
        pass
