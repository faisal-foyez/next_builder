import Link from 'next/link'

export default function  Gallery() {
  const images = [
    {id:1,name:'one',src:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'},
    {id:2,name:'two',src:'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'},
    {id:3, name:'three', src:'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649'}
  ]  
    return (
    <div className="flex flex-row flex-wrap gap-10">
      {
        images.map(image=>(
          <Link href={`photo/${image.id}`}>
            <div className="h-[500px] w-[300px] border">
              <img src={image.src} className="h-[90%] object-cover"/>
              <span>{image.name}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}