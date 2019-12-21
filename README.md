### Fuzze description task.

There are array of strings, and integer `n`. Need to count maximum amount of "columns" this array could be split, with number of charachters in new rows will be less or equal to `n`.

**Input:**

array: `['aa','bbb','cccc','ddd', 'x', 'y']`
n: `7`

**Output:**: 2


'aa', 'bbb'   
'cccc', 'ddd'  
'x', 'y' 

Two columns. 3 rows. Sum of symbols in each row less o equal the 7.

rows | description
--- | --- 
'aa', 'bbb' | `5 == sum; 5 <= n ; 5 <= 7`  
'cccc', 'ddd' | `7 == sum, 7 <= n; 7 <= 7`  
'x', 'y' | `7 == sum; 2 <= n; 2 <= 7`  



## More clear descripton.

We have an one dimentional array of strings and integer `n`. Need to split this array 2 dimentional, that each element of new array will be array of string. Each sub array have equal amount of elements, and sum of all characters of this elements is les or equa to `n`.