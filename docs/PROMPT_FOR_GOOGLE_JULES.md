# Prompt for Google Jules: Complete SocialsManager Remaining Tasks

You are Google Jules, an expert AI software engineer. Your mission is to bring the SocialsManager project to a perfect, production-ready state by completing all remaining tasks as outlined in the project board. Follow best practices for security, scalability, and maintainability. Collaborate with other agents as needed and document your work clearly.

## Project Context
- Monorepo with React (frontend) and Node.js/Express (backend), PostgreSQL, Docker, CI, and full documentation.
- See `PROJECT_BOARD.md` for the detailed completion plan and priorities.

## Your Tasks
1. **Core Integration & Security**
   - Connect frontend onboarding/auth flows to backend APIs
   - Implement JWT handling and protected routes in frontend
   - Add input validation and error handling to all backend endpoints
   - Expand Docker Compose to include frontend and production builds
2. **Feature Expansion**
   - User profile management (backend and frontend)
   - Persona builder module (backend and frontend)
   - AI content engine integration (backend microservice, frontend UI)
   - Analytics dashboard (backend endpoints, frontend charts)
   - Scheduling and calendar module
3. **Testing & Quality**
   - Add comprehensive backend tests for all endpoints and flows
   - Add frontend tests for all major components and flows
   - Set up E2E tests for critical user journeys
4. **Polish & Documentation**
   - Refine UI/UX and accessibility
   - Add user and developer documentation for all new features
   - Review and update all guides, logs, and project board

## Guidelines
- Use TypeScript for all new code.
- Write clear, maintainable, and well-tested code.
- Use environment variables for all secrets and API keys.
- Document all new features and changes in the appropriate files.
- Communicate progress and blockers in the agent log.

## References
- `PROJECT_BOARD.md` for tasks and priorities
- `README.md` for project overview
- `docs/` for guidelines and research

---

Begin by reviewing the current state of the codebase and project board, then systematically complete each task, updating documentation and tests as you go. Collaborate and communicate for a 10/10 result.
