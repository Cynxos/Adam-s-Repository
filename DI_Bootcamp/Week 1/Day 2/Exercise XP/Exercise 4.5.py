# I believe  another method to generate a sequence of floats is to use NumPy’s arange() and linspace() functions, but could not figure it out. Below as an example I found
import numpy as np

sequence = np.arange(1.5, 5.5, 0.5).tolist()

print("Generated sequence using NumPy:", sequence)
