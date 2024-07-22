class Node:

    def __init__(self, value=None):
        self._value = value
        self._next = None

    @property
    def value(self):
        return self._value
    
    @value.setter
    def value(self, value):
        self._value = value

    @property
    def next(self):
        return self._next

    @next.setter
    def next(self, node):
        self._next = node
