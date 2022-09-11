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
