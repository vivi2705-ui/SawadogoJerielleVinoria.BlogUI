"use client"

import { useState } from "react"
import Image from "next/image"

interface FormArticle {
  title: string
  author: string
  content: string
  category: string
}

const categories = ["Manga", "Anime", "Otaku Culture", "Cosplay", "Events"]

const Formulaire = () => {
  const [formData, setFormData] = useState<FormArticle>({
    title: "",
    author: "",
    content: "",
    category: "",
  })

  const [error, setError] = useState<string>("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.title || !formData.author || !formData.content || !formData.category) {
      setError("Veuillez remplir tous les champs.")
      return
    }

    const modal = document.getElementById("success_modal") as HTMLDialogElement
    modal.showModal()

    setFormData({ title: "", author: "", content: "", category: "" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-base-100 shadow-xl rounded-2xl overflow-hidden">

        {/* Image Side */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://maremosso.lafeltrinelli.it/media/tmjere5p/banner_manga.jpg?anchor=center&mode=crop&width=450&height=321&rnd=133193013357530000"
            alt="Manga banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30 flex flex-col items-center justify-center text-white p-8">
            <span className="text-5xl mb-4">⛩️</span>
            <h2 className="text-3xl font-black tracking-wider text-center">
              <span>Otaku</span>Zone
            </h2>
            <p className="text-sm mt-2 text-white/80 text-center">
              Partage ta passion avec la communauté
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6">✍️ Créer un Article</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label"><span className="label-text font-semibold">Titre</span></label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Titre de l'article"
              />
            </div>

            <div>
              <label className="label"><span className="label-text font-semibold">Auteur</span></label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Nom de l'auteur"
              />
            </div>

            <div>
              <label className="label"><span className="label-text font-semibold">Contenu</span></label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Contenu de l'article"
                rows={5}
              />
            </div>

            <div>
              <label className="label"><span className="label-text font-semibold">Catégorie</span></label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {error && <p className="text-error text-sm">{error}</p>}

            <button type="submit" className="btn btn-primary w-full">
              Create article
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <dialog id="success_modal" className="modal">
        <div className="modal-box relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg"> Succès !</h3>
          <p className="py-4">Votre article a été créé avec succès.</p>
        </div>
      </dialog>
    </div>
  )
}

export default Formulaire