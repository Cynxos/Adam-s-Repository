import random

class QuantumParticle:
    def __init__(self, x=0, y=0.0, p=0.5):
        self.position = x
        self.momentum = y
        self.spin = p
        self.entangled_particle = None

    def measure_position(self):
        self.disturbance()
        self.position = random.randint(1, 10000)
        return self.position

    def measure_momentum(self):
        self.disturbance()
        self.momentum = random.uniform(0, 1)
        return self.momentum

    def measure_spin(self):
        self.disturbance()
        self.spin = random.choice([0.5, -0.5])
        if self.entangled_particle:
            self.entangled_particle.spin = -self.spin
        return self.spin

    def disturbance(self):
        self.position = random.randint(1, 10000)
        self.momentum = random.uniform(0, 1)
        print('Quantum Interferences!!')

    def entangle(self, other_particle):
        if isinstance(other_particle, QuantumParticle):
            self.entangled_particle = other_particle
            other_particle.entangled_particle = self
            print('Spooky Action at a Distance !!')
        else:
            print('Cannot entangle with a non-QuantumParticle object')

    def __repr__(self):
        return (f"QuantumParticle(position={self.position}, "
                f"momentum={self.momentum}, spin={self.spin})")

p1 = QuantumParticle(x=1, y=5.0)
p2 = QuantumParticle(x=2, y=5.0)
p1.entangle(p2)
print('Particle p1 is now in quantum entanglement with Particle p2')

p1 = QuantumParticle()
p2 = QuantumParticle()
p1.entangle(p2)
print('Spooky Action at a Distance')
