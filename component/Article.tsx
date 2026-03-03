import Commentaire from "./Commentaire"

interface ArticleProps {
  cover: string
  title: string
  author: string
  date: string
  category: string
  tags: string[]
  content: string[]
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "shonen":
      return "badge-error"
    case "shojo":
      return "badge-secondary"
    case "seinen":
      return "badge-neutral"
    case "nouveauté":
      return "badge-success"
    case "top 10":
      return "badge-warning"
    case "cosplay":
      return "badge-accent"
    case "figurines":
      return "badge-primary"
    default:
      return "badge-outline"
  }
}

const Article = ({
  cover,
  title,
  author,
  date,
  category,
  tags,
  content
}: ArticleProps) => {
  return (
    <div className="max-w-3xl mx-auto bg-base-100 shadow-lg rounded-xl overflow-hidden">

      {/* Cover */}
      <figure>
        <img
          src={cover}
          alt={title}
          className="w-full h-72 object-cover"
        />
      </figure>

      {/* Body */} 
      <div className="p-8">

        <h1 className="text-3xl font-bold mb-2">
          {title}
        </h1>

        <p className="text-sm text-gray-500 mb-2">
          By {author} • {date}
        </p>

        {/* Category Badge */}
        <div className="mb-3">
          <span className={`badge ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Content paragraphs */}
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {/*first comment section*/}
        <Commentaire/>

        {/* Comments Section */}
        <div className="divider my-8"></div>
          

<div className="flex flex-col md:flex-row gap-8 items-start">

  {/* Image Side */}
  <div className="hidden md:block md:w-1/3 rounded-2xl overflow-hidden shadow-md sticky top-4">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTD1WVQOW9rDT74kQihcy6dsovPnOeZkjaQ&s"
      alt="Anime community"
      className="w-full h-full object-cover"
    />
    <div className="bg-primary/10 p-4 text-center">
      <p className="text-sm font-semibold text-primary">💬 Rejoins la discussion !</p>
      <p className="text-xs text-base-content/50 mt-1">Partage ton avis avec la communauté</p>
    </div>
  </div>

  {/* Comment Form Side */}
  <div className="flex-1">
    <h2 className="text-xl font-semibold mb-4">💬 Commentaires</h2>
    <textarea
      className="textarea textarea-bordered w-full"
      placeholder="Écris un commentaire..."
      rows={5}
    />
    <button
      className="btn btn-primary mt-4 w-full"
      onClick={() => {
  const box = document.getElementById("custom-alert");
  if (box) {
    box.classList.remove("hidden");
    setTimeout(() => box.classList.add("hidden"), 2000);
  }
}}
    >
      Poster le commentaire
    </button>
    <div
  id="custom-alert" 
  className="hidden fixed top-20 left-5 alert alert-info shadow-lg w-72"
>

  <span className="text-blue-900 font-semibold">
    Commentaire posté!
  </span>
</div>
  
  </div>

</div>

      </div>
    </div>
  )
}

export default Article


