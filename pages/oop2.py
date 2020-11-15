class Car:
    def __init__(self, color, mileage):
        self.color = color
        self.mileage = mileage

    def __str__(self):
        return 'This car has {self.color} color and {self.mileage}'.format(self=self)

    def __repr__(self):
        return '{self.__class__.__name__}({self.color}, {self.mileage})'.format(self=self)

my_car = Car('red', 95455)
print(str(my_car))
print(repr(my_car))

#default implementation for str calls repr internally
