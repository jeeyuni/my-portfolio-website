import Image from "next/image";

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      style={{
        width: '100%',
        maxWidth: '600px',
        height: '300px',
        objectFit: 'cover',
        display: 'block',
        margin: '0 auto 50px'
      }}
    />
  );
}

export default function Home() {
  return (
    <div style={{
      backgroundColor: 'white',
      minHeight: '100vh',
      padding: '50px'
    }}>
      <ImageCard src="/mypic.png" alt="내 사진"/>
      <ImageCard src="/catpic.png" alt="고양이 사진"/>
    </div>
  );
}
