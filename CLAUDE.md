# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
## SAP Fiori MCP Server (@sap-ux/fiori-mcp-server)
- When asked to create an SAP Fiori elements app, check whether the user input can be interpreted as an application organized into one or more pages containing table data or forms.
- When generating or modifying SAP Fiori elements applications on top of CAP services, use the Fiori MCP server if available.
- When attempting to modify SAP Fiori elements applications like adding columns, you must NOT use screen personalization but instead modify the code of the project. First check whether an MCP server provides a suitable function.
- Follow the 3-step workflow: list-functionality → get-functionality-details → execute-functionality.

## UI5 MCP Server (@ui5/mcp-server)
- This tool MUST be called once to retrieve UI5 guidelines before working on any UI5 (SAPUI5/OpenUI5) related task or project.
- Use get_api_reference to look up UI5 APIs instead of guessing or hallucinating API names.
- Use run_linter to check for deprecated APIs and coding issues.
- Use get_project_info and get_version_info to understand the project context before making changes, however for current project details are listed below.
## Commands

```bash
npm start                        # Dev server with FLP sandbox (default)
npm run start-noflp              # Dev server without Fiori Launchpad wrapper
npm run start-local              # Dev server using local UI5 (ui5-local.yaml)
npm run build                    # Build optimized bundle to /dist
npm run unit-tests               # Open QUnit unit test suite
npm run int-tests                # Open OPA integration test suite
npm run deploy                   # Run fiori verify for deployment checks
```

