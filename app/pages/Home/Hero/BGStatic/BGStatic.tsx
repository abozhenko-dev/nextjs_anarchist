import Image from "next/image";

export const BGStatic = () => {
  return (
    <div className="hero__bg-static">
      <Image
        src="/hero/static-bg.png"
        layout="fill"
        objectFit="cover"
        quality={30}
        priority
        draggable={false}
      />
    </div>
  );
};
