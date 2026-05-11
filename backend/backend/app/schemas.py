from pydantic import BaseModel

class CaseSchema(BaseModel):
    title: str
    citation: str
    summary: str
    full_text: str

    class Config:
        from_attributes = True
