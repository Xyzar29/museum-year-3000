# Museum of the Year 3000

[![Museum of the Year 3000](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![Rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Xyzar29/museum-year-3000/rank.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![Reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Xyzar29/museum-year-3000/reward.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)

An entry for the [Museum of the Year 3000](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb) competition on [make.fun](https://make.fun).

## The entry

One line: the museum label a museum in the year 3000 places next to an
ordinary object from today — a CAPTCHA.

> CAPTCHA, c. 2024. Citizens proved they were human by identifying traffic lights in photographs, often failing until a machine believed them.

## How it works

`main.ts` (Node 22) deterministically writes exactly that one line — no
trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`). The line is 140 characters, inside the 1–200
character limit.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
