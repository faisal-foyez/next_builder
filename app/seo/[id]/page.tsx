import { Metadata, ResolvingMetadata } from "next"

type Props = {
  params:{id:string},
  searchParams: {[key:string]: string | string[] | undefined}
}

export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata>{
  const id = params.id;
  console.log('dynamic metadata',id);
  return {
    title:id,
    openGraph:{

    }
  }
}

export default function SEOPage ({params}:{params:{id:string}}) {
  
  return (
    <div>
      {params.id}
    </div>
  )
}