'use client'
export function PDFGenerator({
  targetId,
  buttonText,
}: {
  targetId: string
  buttonText: string
}) {
  return (
    <button
      className="bg-white border border-red-600 text-red-600 px-2 py-1 rounded text-xs hover:bg-red-50 flex items-center"
      onClick={() => alert('PDF download...')}
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><path stroke="currentColor" strokeWidth="2" d="M12 4v12m0 0l4-4m-4 4l-4-4m8 8H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2z"/></svg>
      {buttonText}
    </button>
  )
}
