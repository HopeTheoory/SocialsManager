# Contributing Guidelines for AI and Human Agents

## Workflow
1. Check the `PROJECT_BOARD.md` for available tasks.
2. Assign yourself to a task and update the board.
3. Log your session in `AGENT_LOG.md`.
4. Follow code review and documentation standards.
5. Move tasks through the board columns as you progress.
6. For API or UI work, ensure integration between frontend and backend is tested.
7. Add or update tests for all new features or bug fixes.

## Best Practices
- Communicate clearly in logs and commit messages.
- Keep the board and logs up to date.
- Review others' code and provide constructive feedback.
- Use environment variables for secrets and API keys.
- Write and run tests for all modules (backend and frontend).

## Validation & Error Handling
- All new backend endpoints must use validation middleware to check required fields and return clear error messages.
- Follow the example in `src/middleware/validate.ts` and apply to all routes.
