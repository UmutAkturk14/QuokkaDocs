export interface DocFunction {
  id: string;
  name: string;
  module: string;
  signature: string;
  description: string;
  examples: {
    code: string;
    output: string;
  }[];
  parameters: {
    name: string;
    type: string;
    description: string;
  }[];
  returns: {
    type: string;
    description: string;
  };
  since: string;
}

export interface DocModule {
  id: string;
  name: string;
  description: string;
  functions: string[];
}

export const modules: DocModule[] = [
  {
    id: 'list',
    name: 'List',
    description: 'Functions for working with lists and arrays',
    functions: ['map', 'filter', 'reduce', 'find', 'head', 'tail']
  },
  {
    id: 'object',
    name: 'Object',
    description: 'Functions for working with objects',
    functions: ['prop', 'pick', 'omit', 'merge', 'keys', 'values']
  },
  {
    id: 'function',
    name: 'Function',
    description: 'Higher-order functions and function composition',
    functions: ['compose', 'pipe', 'curry', 'partial', 'memoize']
  },
  {
    id: 'logic',
    name: 'Logic',
    description: 'Logical operations and predicates',
    functions: ['and', 'or', 'not', 'cond', 'when', 'unless']
  }
];

export const functions: DocFunction[] = [
  {
    id: 'map',
    name: 'map',
    module: 'List',
    signature: 'map :: (a → b) → [a] → [b]',
    description: 'Takes a function and a functor, applies the function to each of the functor\'s values, and returns a functor of the same shape.',
    examples: [
      {
        code: 'R.map(x => x * 2, [1, 2, 3])',
        output: '[2, 4, 6]'
      },
      {
        code: 'R.map(R.toUpper, ["hello", "world"])',
        output: '["HELLO", "WORLD"]'
      }
    ],
    parameters: [
      {
        name: 'fn',
        type: '(a → b)',
        description: 'The function to be called on every element of the input list.'
      },
      {
        name: 'list',
        type: '[a]',
        description: 'The list to be iterated over.'
      }
    ],
    returns: {
      type: '[b]',
      description: 'The new list.'
    },
    since: 'v0.1.0'
  },
  {
    id: 'filter',
    name: 'filter',
    module: 'List',
    signature: 'filter :: Filterable f => (a → Boolean) → f a → f a',
    description: 'Takes a predicate and a Filterable, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate.',
    examples: [
      {
        code: 'R.filter(x => x > 2, [1, 2, 3, 4, 5])',
        output: '[3, 4, 5]'
      },
      {
        code: 'R.filter(R.propEq("age", 25), people)',
        output: '[{name: "John", age: 25}]'
      }
    ],
    parameters: [
      {
        name: 'predicate',
        type: '(a → Boolean)',
        description: 'The predicate function.'
      },
      {
        name: 'filterable',
        type: 'f a',
        description: 'The filterable to filter.'
      }
    ],
    returns: {
      type: 'f a',
      description: 'A new filterable containing only the elements that satisfy the predicate.'
    },
    since: 'v0.1.0'
  },
  {
    id: 'compose',
    name: 'compose',
    module: 'Function',
    signature: 'compose :: ((y → z), (x → y), …, (o → p), (i → o)) → i → z',
    description: 'Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.',
    examples: [
      {
        code: 'const classyGreeting = R.compose(R.join(" "), R.toUpper)',
        output: 'classyGreeting(["hello", "world"]) //=> "HELLO WORLD"'
      },
      {
        code: 'const f = R.compose(Math.abs, R.add(1), R.multiply(2))',
        output: 'f(-4) //=> 7'
      }
    ],
    parameters: [
      {
        name: '...functions',
        type: 'Function[]',
        description: 'The functions to compose.'
      }
    ],
    returns: {
      type: 'Function',
      description: 'A new function representing the composition of the given functions.'
    },
    since: 'v0.1.0'
  },
  {
    id: 'prop',
    name: 'prop',
    module: 'Object',
    signature: 'prop :: s → {s: a} → a | Undefined',
    description: 'Returns a function that when supplied an object returns the indicated property of that object, if it exists.',
    examples: [
      {
        code: 'R.prop("x", {x: 100})',
        output: '100'
      },
      {
        code: 'R.prop("x", {})',
        output: 'undefined'
      }
    ],
    parameters: [
      {
        name: 'property',
        type: 's',
        description: 'The property name.'
      },
      {
        name: 'obj',
        type: '{s: a}',
        description: 'The object to query.'
      }
    ],
    returns: {
      type: 'a | Undefined',
      description: 'The value at the given property or undefined.'
    },
    since: 'v0.1.0'
  }
];
