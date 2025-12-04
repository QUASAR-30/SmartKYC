"""
SmartKYC FastAPI Application
Main entry point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="SmartKYC API",
    description="Le Badge de Confiance du B2B Africain",
    version="1.0.0-hackathon"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "SmartKYC API",
        "version": "1.0.0-hackathon",
        "status": "running"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

# TODO: Import and include routers
# from app.api import auth, trustscores, documents, badges, verify
# app.include_router(auth.router, prefix="/auth", tags=["auth"])
# app.include_router(trustscores.router, prefix="/trustscores", tags=["trustscores"])
# app.include_router(documents.router, prefix="/documents", tags=["documents"])
# app.include_router(badges.router, prefix="/badges", tags=["badges"])
# app.include_router(verify.router, prefix="/verify", tags=["verify"])
