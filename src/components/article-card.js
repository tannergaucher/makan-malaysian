import React from "react"

export default function ArticleCard({ small, title, text }) {
  return (
    <div>
      <small style={{ textTransform: `uppercase` }}>{small}</small>
      <h2 className="text--xxxl" style={{ marginBottom: 0, marginTop: 0 }}>
        {title}
      </h2>
      <p style={{ marginTop: 0 }}>{text}</p>
    </div>
  )
}
