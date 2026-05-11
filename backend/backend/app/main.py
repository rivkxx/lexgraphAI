from fastapi import FastAPI
from .routes import upload, search, graph, brief

app = FastAPI(title="LexGraph AI")

app.include_router(upload.router)
app.include_router(search.router)
app.include_router(graph.router)
app.include_router(brief.router)

@app.get("/")
def home():
    return {
        "message": "LexGraph backend running"
    }
