# AI Model Selection and Orchestration Policy

**OpenCode + OpenRouter**

## 1. Objective

Establish a cost-effective and flexible approach to using multiple AI models through OpenCode and OpenRouter. The aim is to use affordable models for routine tasks, escalate complex work to more capable models, and introduce independent reviews when accuracy and reliability are critical.

## 2. Model Selection

| Role | Model | Purpose |
| --- | --- | --- |
| Default | `github Copilot` | Routine coding, simple scripts, small fixes and basic troubleshooting. |
| Escalation | `Ice man` | Complex features, difficult bugs, architectural decisions and challenging edge cases. |
| Independent Reviewer | `google/gemini-2.5-pro` | Reviewing important implementations, identifying errors and checking solution quality. |

> Model availability and pricing should be verified on OpenRouter before implementation.

## 3. Escalation and Review Rules

Start with the default free model for tasks with clear requirements, predictable outputs and low business impact.

**Escalate to a more capable model when:**

- The default model produces incorrect or incomplete results.
- The task involves complex logic, multiple components or difficult edge cases.
- The work affects architecture, security or data integrity.

**Introduce an independent reviewer when:**

- Changes affect authentication, security or access control.
- Database migrations or production deployments are involved.
- Errors could cause service disruption or significant business impact.
- The implementation requires additional assurance.

The reviewer must independently assess the requirements, implementation, potential risks and test results. Identified issues must be resolved before approval.

## 4. Execution Workflow

1. **Define:** Clearly specify the task, inputs, expected outputs and edge cases.
2. **Execute:** Submit the task to the default model through OpenCode.
3. **Evaluate:** Check the output and run appropriate tests.
4. **Escalate:** Change to a more capable model if the result is insufficient.
5. **Review:** Engage a different model for independent assessment when risk justifies it.
6. **Approve:** Resolve outstanding issues, validate the final output and proceed.

## 5. Risk-Based Calibration

The level of scrutiny should depend on three factors:

- **Stakes:** How serious would an incorrect result be?
- **Reversibility:** How easily can the change be undone?
- **Scrutiny:** How much testing, review and approval does the task require?

Low-risk, reversible tasks need basic validation. High-impact or difficult-to-reverse changes require stronger models, independent review, appropriate testing and formal approval.

## Operating Principle

Use the cheapest capable model first, escalate when complexity demands it, and introduce independent review when the consequences of failure justify the additional cost.

This approach balances development cost, flexibility, quality and reliability without depending on a single AI model or provider.
