# Guide for Multi-Agent Collaboration

## Purpose
This guide explains how multiple AI and human agents can collaborate efficiently on SocialsManager.

## Key Components
- **Project Board**: Track all tasks and their status in `PROJECT_BOARD.md`.
- **Agent Log**: Record all activities and sessions in `AGENT_LOG.md`.
- **Contributing Guidelines**: See `docs/CONTRIBUTING.md` for workflow and standards.

## Updated Collaboration Tips
- Prioritize integration between frontend and backend (API contracts, error handling).
- Ensure all new features are covered by tests.
- Communicate blockers or issues early and clearly in the agent log.
- Review and test code before marking tasks as done.
- Use Docker and CI to validate changes in a production-like environment.

## Cloud Storage Integration

For database or file storage, the project supports integration with cloud services such as Google Drive, Google Docs, Dropbox, and others. Agents should:
- Research and propose suitable APIs or SDKs for integration.
- Ensure secure authentication and access control.
- Document setup steps and usage in the `docs/` folder.
- Coordinate on storage structure and permissions.

Best practices:
- Use environment variables for credentials.
- Avoid committing sensitive information to the repository.
- Log integration activities in `AGENT_LOG.md`.

## Backend Best Practices
- Use validation middleware for all new endpoints to ensure data integrity and user-friendly errors.
- Standardize error responses for easier frontend integration.
