"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Article from "@/component/Article"
import Navbar2 from "@/component/Navbar2"

interface ArticleType {
  id: number
  src: string
  title: string
  author: string
  content: string
}

export default function ArticlePage() {

  const params = useParams()
  const id = Number(params.id)

  const [article, setArticle] = useState<ArticleType | null>(null)

  useEffect(() => {
    fetch("/data/articles.json")
      .then(res => res.json())
      .then((data: ArticleType[]) => {
        const found = data.find(item => item.id === id)
        setArticle(found || null)
      })
  }, [id])

  if (!article) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <div>
      <Navbar2  />
      <div className="bg-base-200 min-h-screen py-10">
      <Article {...article} />
    </div>

    </div>
    
  )
}