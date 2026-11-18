# Decision Record 01 – AI Model and Gateway Selection

## Decision
OpenCode as the AI development agent and OpenRouter as the central gateway for accessing multiple AI models.

## 1. Background
The objective is to use AI models to support development tasks while controlling costs and maintaining flexibility. Rather than depending on one model or provider, the solution should allow different models to handle tasks according to their complexity.

## 2. Selected Approach

| Component | Selection | Reason |
| --- | --- | --- |
| AI Agent | OpenCode | Provides the development interface for working with different models. |
| Gateway | OpenRouter | Provides access to multiple AI model providers through one API. |
| Default Model | copilot | Suitable starting point for routine coding and simple fixes. |
| Escalation Model | DeepSeek V3.2 | Used for complex coding, difficult bugs and advanced reasoning. |
| Reviewer | Gemini 2.5 Pro | Provides a different model perspective for reviewing important changes. |

## 3. Alternatives Considered
- Direct connection to individual model providers: Rejected because managing multiple API keys and provider configurations separately creates additional work.
- Using only one AI model: Rejected because one model may not be suitable or cost-effective for every task.
- Using a paid premium model for everything: Rejected because routine tasks do not always require expensive models.
- Using a single provider's development environment: Rejected because it creates greater dependence on one provider.

## 4. Reasons for the Decision
The selected approach provides:
- Access to several AI models through one gateway.
- Lower costs by starting with a free model.
- The ability to escalate when tasks become more difficult.
- Independent review using a different model.
- Flexibility to replace models without changing the overall workflow.

## 5. Expected Outcome
Development tasks will start with the default model. More capable models will be introduced when the task requires additional reasoning, while independent reviews will be used for important changes.

Final Decision: Adopt OpenCode and OpenRouter as the standard AI development setup, with model selection based on task complexity, cost and risk.
--