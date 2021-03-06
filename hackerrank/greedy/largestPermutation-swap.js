function solution(input) {
  input = input.split('\n')
  var K = +input[0].split(' ')[1]
  var A = input[1].split(' ')
  var i
  for (i = 0; i < A.length; i++) A[i] = +A[i]

  var indexes = {}
  for (i = 0; i < A.length; i++) indexes[A[i]] = i

  for (i = 0; i < A.length; i++) {
    var N = A.length-i

    if (A[i] !== N) {
      var _Ai = A[i], _AN = A[indexes[N]], _iN = indexes[N]
      A[i] = _AN
      A[_iN] = _Ai
      indexes[_Ai] = _iN
      indexes[N] = i
      if (!--K) break;
    }
  }

  console.log(A.join(' '))
}

module.exports = solution

/*
You are given an array of  integers which is a permutation of the first  natural numbers. You can swap any two elements of the array. You can make at most  swaps. What is the largest permutation, in numerical order, you can make?

Input Format
The first line of the input contains two integers,  and , the size of the input array and the maximum swaps you can make, respectively. The second line of the input contains a permutation of the first  natural numbers.

Output Format
Print the lexicographically largest permutation you can make with at most  swaps.
*/