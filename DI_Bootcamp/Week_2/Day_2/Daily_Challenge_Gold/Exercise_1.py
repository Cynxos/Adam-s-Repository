import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.choice([0, 1])

    def mutate(self):
        self.value = 1 - self.value 

    def __repr__(self):
        return str(self.value)

class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5: 
                gene.mutate()

    def __repr__(self):
        return ''.join(map(str, self.genes))

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for chromosome in self.chromosomes for gene in chromosome.genes)

    def __repr__(self):
        return '\n'.join(map(str, self.chromosomes))

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

def evolve_to_all_ones(environment, max_generations=10000):
    generations = 0
    organism = Organism(DNA(), environment)

    while not organism.dna.is_all_ones() and generations < max_generations:
        organism.mutate()
        generations += 1

    return generations, organism.dna

environment = 0.1 
generations, final_dna = evolve_to_all_ones(environment)

print(f"Generations: {generations}")
print("Final DNA:")
print(final_dna)
