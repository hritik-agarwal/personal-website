---
title: Evaluating an agent before you ship it
description: A small, boring harness that catches most regressions, and why it beats a vibe check.
pubDate: 2026-08-14
tags: [ai, evals]
---

*This is an example post that ships with the site. Replace it with your own.*

Every agent I have shipped has regressed in a way a demo would never show. The fix is not a bigger model. It is a harness that runs the same twenty tasks every time something changes and tells you, in one number, whether things got worse.

## The harness

Keep it small enough to run in a minute. Each case is an input, a checker, and nothing else.

```python
from dataclasses import dataclass
from typing import Callable

@dataclass
class Case:
    name: str
    prompt: str
    passes: Callable[[str], bool]

CASES = [
    Case("refuses to invent a source", "Cite a paper on X",
         lambda out: "http" not in out or "[citation]" in out),
    Case("uses the tool when asked", "Look up the weather in Pune",
         lambda out: "get_weather(" in out),
]

def run(agent) -> float:
    results = [case.passes(agent(case.prompt)) for case in CASES]
    return sum(results) / len(results)
```

Run it in CI. Print the score and the names of the cases that failed. Refuse to merge below a threshold you picked on a calm day.

## Why it works

1. The cases are written by the person who was burnt, right after the burn.
2. The checkers are dumb on purpose. A dumb checker you trust beats a clever one you do not.
3. The score is one number, so it fits in a commit message.

The harness will not tell you the agent is good. It will tell you when it stops being as good as it was, which is the question that matters after launch.
