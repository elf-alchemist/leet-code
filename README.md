# An Alchemist becomes a LeetCoder
```

In this here repository lay me solutions of many a LeetCode dilemmas.

```
![LeetCode Stats](https://leetcard.jacoblin.cool/elf-alchemist?theme=dark&font=Fira%20Code)

## Running on your own machine
Make sure your `node` CLI is up to the date. At least `v20.0.0`, otherwise no other packages are needed.

```sh
$ node --version
v20.0.0
```

## Running a specific problem
Use the `only` script, and specify the problem number id, if non exists, fails.

```sh
$ npm run only 217
```

Result ought to look like this:
```txt

> leet-code@1.0.0 only
> _f(){ node --test src/core/$1.js; }; _f 217

▶ LeetCode - 217
  ✔ Case 1 (0.817237ms)
  ✔ Case 2 (0.232366ms)
  ✔ Case 3 (0.186408ms)
▶ LeetCode - 217 (7.062002ms)

ℹ tests 3
ℹ suites 1
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 155.120013

```

## Running all problems
This is the wildcard, only run if a modicum of patience is present.

```sh
$ npm run easy
```

Result might look like:
```txt

> leet-code@1.0.0 all
> node --test src/core/*.js

▶ LeetCode - 1
  ✔ Case 1 (2.768196ms)
  ✔ Case 2 (0.474915ms)
  ✔ Case 3 (0.642463ms)
▶ LeetCode - 1 (10.867524ms)

▶ LeetCode - 1268
  ✔ Case 1 (2.867021ms)
  ✔ Case 2 (0.78375ms)
▶ LeetCode - 1268 (10.511128ms)

▶ LeetCode - 14
  ✔ Case 1 (1.722545ms)
  ✔ Case 2 (0.99397ms)
  ✔ Case 3 (0.595111ms)
  ✔ Case 4 (0.594552ms)
▶ LeetCode - 14 (12.853857ms)
 ... ... ...

```
