# Create a new problem

If you want to make some problems, but if you don't know how to make problems? Then watch this!

# Step 1

Go to the admin panel.
Then, you can see this screen.

![https://cdn.discordapp.com/attachments/1018073277635252264/1018357889942962246/unknown.png](https://cdn.discordapp.com/attachments/1018073277635252264/1018357889942962246/unknown.png)

# Step Two

Fill in the inputs below.

1.  `Problem Name`
2.  `Problem Number` [0 ≤ Problem Number ≤ 100000 ]
3.  `Max Time Limit`
4.  `Problem Memory Limit`
5.  `Problem Points` [ 1 ≤ Problem Points ≤ 100 ].

Like This!

![https://cdn.discordapp.com/attachments/1018073277635252264/1018359396042014773/unknown.png](https://cdn.discordapp.com/attachments/1018073277635252264/1018359396042014773/unknown.png)

# Step three

Make a problem article. You need to make a markdown with the rules below.

1. warp variable names with `'$'` [ex: `$N$`]
2. warp numbers with \`
3. ⚠️ Important! **Write source**

This is an markdown for [problem 1000](https://dioh.kr/problem/1000)

````md
## 문제

두 정수 $A$와 $B$를 입력받은 다음, $A$ + $B$를 출력하는 프로그램을 작성하시오.

## 입력

$A$와 $B$가 공백을 사이에 두고 주어진다. (`0` < $A$, $B$ < `10`)

## 출력

$A$ + $B$를 출력한다.

## 예제 입출력

### 예제 입력 1

```text
1 1
```

### 예제 출력 1

```text
2
```

### 예제 입력 2

```text
1 2
```

### 예제 출력 2

```text
3
```
````

# Step four

Make test cases. It must be stronger and fewer.

```ts
Testcases: Array < Array < Score | {
    "input": string;
    "output": string;
} > >
```

Example

```json
[
    [
        score,
        {
            "input":"",
            "output":""
        },
        {
            "input":"",
            "output":""
        }
    ],
    [
        score,
        {
            "input":"",
            "output":""
        },
        {
            "input":"",
            "output":""
        }
    ],
    ...
]
```

```

```
