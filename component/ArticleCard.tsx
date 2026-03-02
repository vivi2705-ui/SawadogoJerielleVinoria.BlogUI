import Link from "next/link"

interface ArticleCardProps {
  id: number
  cover: string
  title: string
  category: string
  tags: string[]
  desc?: string
  author?: string
  date?: string
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "shonen":      return "badge-error"
    case "shojo":       return "badge-secondary"
    case "seinen":      return "badge-neutral"
    case "nouveauté":   return "badge-success"
    case "top 10":      return "badge-warning"
    case "cosplay":     return "badge-accent"
    case "figurines":   return "badge-primary"
    default:            return "badge-outline"
  }
}

const ArticleCard = ({ id, cover, title, category, tags, desc, author, date }: ArticleCardProps) => {
  return (
    <div className="card bg-base-100 shadow-md w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">

      {/* Cover Image */}
      <figure className="relative overflow-hidden h-48">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge over image */}
        <span className={`badge ${getCategoryColor(category)} absolute top-2 left-2 shadow`}>
          {category}
        </span>
      </figure>

      <div className="card-body p-4 gap-2">

        {/* Title */}
        <h2 className="card-title text-base font-bold leading-snug line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        {desc && (
          <p className="text-sm text-base-content/60 line-clamp-2">{desc}</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-xs text-base-content/50">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer: author + date + button */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-base-200">
          <div className="text-xs text-base-content/40">
            {author && <p className="font-medium">{author}</p>}
            {date && <p>{date}</p>}
          </div>
          <Link
            href={`/article/${id}`}
            className="btn btn-primary btn-xs rounded-full px-4"
          >
            Lire 
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ArticleCard