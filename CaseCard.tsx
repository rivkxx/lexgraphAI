export default function CaseCard({ caseData }: any) {
  return (
    <div className="border rounded-xl p-5 shadow-sm">
      <h2 className="text-xl font-bold mb-2">
        {caseData.title}
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        {caseData.citation}
      </p>

      <p>{caseData.summary}</p>
    </div>
  );
}
