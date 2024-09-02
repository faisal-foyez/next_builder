export default function Photo ({params}:{params:{id:string}}){
  const images = [
    {id:1,name:'one',src:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'},
    {id:2,name:'two',src:'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'},
    {id:3, name:'three', src:'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649'}
  ]  
  const {id} = params;
  const image = images.find(image=>image.id.toString() === id)
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <img src={image?.src}/>
        <span>{image?.name}</span>
      </div>
    </div>
  )
}