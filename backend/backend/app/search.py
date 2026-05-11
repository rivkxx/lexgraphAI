from fastapi import APIRouter
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Case

router = APIRouter()

@router.get("/search")
def search_cases(q: str):
    db: Session = SessionLocal()

    results = db.query(Case).filter(
        Case.full_text.ilike(f"%{q}%")
    ).all()

    return results
