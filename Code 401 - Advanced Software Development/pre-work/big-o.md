**Big O** describes the worst case performance scenario of an algorithm.

**O(1)** descrbies an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.

```c#
bool IsFirstElementNull(IList<String> elements)
{
    return elements[0] == null;
}
```

**O(N)** describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

```c#
bool ContainsValue(IEnumerable<string> elements, string value)
{
    foreach(var element in elements)
    {
        if (element == value) return true
    }
    return false;
}
```

**O(N<sup>2</sup>)** represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is commong with algorithms that involved nested iterations over the data set. Deeper nests result in **O(N<sup>3</sup>)** etc.

```c#
bool ContainsDuplicates(IList<string> elements)
{
    for (var outer = 0; outer < elements.Count; outer++)
    {
        for (var inner = 0; inner < elements.Count; inner++)
        {
            //Don't compare with self
            if (outer == inner) continue;

            if(elements[outer] == elements [inner]) return true;
        }
    }
    return false;
}
```

**O(2^N)** denotes an algorithm whose growth doubles with eac haddition to the input data set.
```c#
int Fibonacci(int number)
{
    if (number <= 1) return number;

    return Fibonacci(number - 2) + Fibonacci(number -1);
}
```

## Logarithms
**O(log N)**: a binary search example produces a growth curve that peaks at the beginning and slowly falttens out as the data set size increases. Think of the phone book from CS50.