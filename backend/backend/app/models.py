from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    citation = Column(String)
    summary = Column(Text)
    full_text = Column(Text)
