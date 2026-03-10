# Screenshot Capture Guide

Drop actual screenshots from the running app here. Each should be captured at **1280x800** viewport.

## Required Screenshots

| File | Page | What to capture |
|------|------|-----------------|
| `01-analyze-form.png` | `/analyze` | The upload form with diagram dropzone and text area |
| `02-progress.png` | `/analyze/[sessionId]` | Mid-analysis progress (some steps complete, one active) |
| `03-threat-table.png` | `/report/[id]` → Threats tab | Threat table showing STRIDE categories and DREAD scores |
| `04-mitre-mapping.png` | `/report/[id]` → MITRE tab | MITRE ATT&CK technique grid |
| `05-attack-tree.png` | `/report/[id]` → Attack Graphs tab | Attack tree Mermaid or React Flow graph |
| `06-secure-score.png` | `/report/[id]` → Summary tab | SecureScore gauge with breakdown bars |

## How to capture

1. Run the app: `cd frontend && npm run dev` + `cd backend && python -m uvicorn src.main:app`
2. Log in with the test user (`test@kinetriq.ai` / `Test1234!`)
3. Navigate to each page, resize browser to 1280x800
4. Use Cmd+Shift+4 (Mac) or browser DevTools screenshot to capture
5. Save as PNG with the filenames above

The demo will show gradient placeholders until screenshots are added.
