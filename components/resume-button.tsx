"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateResumePDF } from "@/app/actions"

export function ResumeButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      const pdfDataUrl = await generateResumePDF()

      // Create an invisible link element to trigger the download
      const link = document.createElement("a")
      link.href = pdfDataUrl
      link.download = "Bhaskar_Kulshrestha_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("There was an error generating the PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      size="lg"
      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
    >
      {isGenerating ? (
        <>
          <span className="animate-pulse mr-2">⏳</span> Generating PDF...
        </>
      ) : (
        <>
          <Download size={18} className="mr-2" /> Download Resume
        </>
      )}
    </Button>
  )
}
