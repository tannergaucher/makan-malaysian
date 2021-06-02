import React from "react"

export default function AmazonIframe({ asins }) {
  return (
    <iframe
      style={{ width: `120px`, height: `240px` }}
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
      frameborder="0"
      src={`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=homerice-20&marketplace=amazon&amp;region=US&placement=B003U2AAQY&asins=B003U2AAQY,B003U2AAQY&linkId=c6f1248ad456fa8540691e93ef01922b&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=ff6347&bg_color=ffffff`}
    ></iframe>
  )
}
