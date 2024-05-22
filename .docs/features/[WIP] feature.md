# Feature Command

```Example
crispr feature [option]
```

# Problem Statement

With `feature` command team can perform all the actions(document, develop, review, build, testing) related to feature development

# Solution

## Functional Requirements

- Project manager can create feature branch (featureName) with following documents locally on manager system

  Files:

  - .docs/crispr/:`featureName`.md
  - src/modules/:`featureName`/component.tsx
  - src/modules/:`featureName`/client-component.tsx
  - src/modules/:`featureName`/lib.ts
  - src/modules/:`featureName`/communication.tsx
  - src/modules/:`featureName`/.crispr/
  - src/modules/:`featureName`/index.tsx

## UX/UI

_Attach UX flows, UI screen design, or other design material that helps to shape the feature._

## Business Logic

_The business logic defines the rules and workflows that dictate how the feature must function, its boundaries, and all actions executed —manually or automatically— when in use._

- **Include relevant diagrams** (e.g. flow diagram, sequence diagram) **or any other material** that helps to understand how the feature will work
- CRUD definition
- List potential edge cases

# Resources

_Include documentation to any external services like API that are needed for this feature to work_
