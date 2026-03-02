import ArticleForm from "@/component/Formulaire"
import Navbar2 from "@/component/Navbar2"

export default function FormulairePage() {
  return (
    <div>
      <Navbar2/>

      <div className="min-h-screen bg-base-200 py-10">
      <ArticleForm />
    </div>

    </div>
    
  )
}